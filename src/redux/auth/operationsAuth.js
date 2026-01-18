import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { setAuthHeader, cleanAuthHeader } from '../../helpers/axiosConfig';

export const register = createAsyncThunk('auth/register', async (user, { rejectWithValue }) => {
  try {
    const response = await axios.post('/auth/register', user);
    Notify.success('Реєстрація успішна! Будь ласка, підтвердіть ваш email.');
    return response.data.user;
  } catch (error) {
    const serverMessage = error.response?.data?.message;
   
    if (error.response?.status === 409 || error.response?.status === 400) {
      // Якщо прийшов масив (від Joi)
      if (Array.isArray(serverMessage)) {
        serverMessage.forEach(msg => Notify.failure(msg));
      }
      // Якщо прийшов рядок (від Conflict/409)
      else if (typeof serverMessage === 'string') {
        Notify.failure(serverMessage);
      }
    } else {
      Notify.failure('Сталася помилка сервера. Спробуйте пізніше.');
    }

    return rejectWithValue(error.response?.data?.message || error.message);
  }
});

export const verificationUser = createAsyncThunk(
  'auth/verificationUser',
  async (verificationToken, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(`/auth/verify/${verificationToken}`);

      Notify.success('Пошта підтверджена! Тепер ви можете увійти в систему.');

      return data;
    } catch (error) {
      const serverMessage = error.response?.data?.message;

      if (error.response?.status === 404) {
        Notify.failure('Посилання недійсне або вже було використане.');
      } else if (typeof serverMessage === 'string') {
        Notify.failure(serverMessage);
      } else {
        Notify.failure('Сталася помилка при верифікації.');
      }
   
      return rejectWithValue(error.message);
    }
  },
);

export const resendVerification = createAsyncThunk('auth/resendVerification', async (email, { rejectWithValue }) => {
  try {
    const { data } = await axios.post('/auth/verify/resend-email', { email });
    Notify.success('Лист підтвердження надіслано повторно!');
    return data;

  } catch (error) {
    const serverMessage = error.response?.data?.message;

    if (Array.isArray(serverMessage)) {
      serverMessage.forEach(msg => Notify.failure(msg));
    } else if (typeof serverMessage === 'string') {
      Notify.failure(serverMessage);
    } else {
      Notify.failure('Не вдалося надіслати лист. Спробуйте пізніше.');
    }
    return rejectWithValue(serverMessage);
  }
});

export const loginization = createAsyncThunk('auth/loginization', async (user, { rejectWithValue }) => {
  try {
    const response = await axios.post('/auth/login', user);
    setAuthHeader(response.data.token);
    Notify.success(`Вітаємо, ${response.data.user.name}!`);
    return response.data;
  } catch (error) {
    const status = error.response?.status;
    const serverMessage = error.response?.data?.message;

    // 1. Обробка помилок валідації (Joi повертає масив)
    if (status === 400 && Array.isArray(serverMessage)) {
      serverMessage.forEach(msg => Notify.failure(msg));
    }
    // 2. Обробка 401, 403 та інших помилок (де message — це рядок)
    else if (serverMessage && typeof serverMessage === 'string') {
      Notify.failure(serverMessage);
    }
    // 3. Запасний варіант, якщо сервер не надіслав текст
    else if (status === 401) {
      Notify.failure('Пошта не верифікована або доступ заборонено');
    } else if (!error.response) {
      Notify.failure('Помилка мережі. Перевірте з’єднання з інтернетом.');
    } else {
      Notify.failure('Сталася непередбачена помилка');
    }

    return rejectWithValue(serverMessage || error.message);
  }
});

export const logOut = createAsyncThunk('auth/logout', async (user, { rejectWithValue }) => {
  try {
    await axios.post('/auth/logout', user);
    cleanAuthHeader();
  } catch (e) {
    return rejectWithValue(e.message);
  }
});

export const refreshUser = createAsyncThunk(
  'auth/refreshUser',
  async (_, thunkAPI) => {
    const reduxState = thunkAPI.getState();
    setAuthHeader(reduxState.auth.token);
    const response = await axios.get('/auth/current');
    return response.data.user;
  },
  {
    condition: (_, thunkAPI) => {
      const reduxState = thunkAPI.getState();
      return reduxState.auth.token !== null;
    },
  },
);

export const updateAvatar = createAsyncThunk('user/updateAvatar', async (file, { rejectWithValue }) => {
  try {
    const formData = new FormData();
    formData.append('avatar', file);

    const { data } = await axios.patch('/user/avatars', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    Notify.success('Аватар оновлено!');
    return data.avatar;
  } catch (error) {
    Notify.failure('Помилка завантаження');
    return rejectWithValue(error.message);
  }
});
