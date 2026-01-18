import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const addProfession = createAsyncThunk('professions/add', async (formData, thunkAPI) => {
  try {
    const { data } = await axios.post('/professions', formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    });
    return data.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response?.data?.message || error.message);
  }
});

export const fetchAllProfessions = createAsyncThunk('professions/fetchAll', async (_, { rejectWithValue }) => {
  try {
    const { data } = await axios.get('/professions');
    return data.professions;
  } catch (error) {
    return rejectWithValue(error.message);
  }
});

export const fetchProfessionById = createAsyncThunk('professions/fetchById', async (id, { rejectWithValue }) => {
  try {
    const { data } = await axios.get(`/professions/${id}`);
    return data.profession;
  } catch (error) {
    return rejectWithValue(error.message);
  }
});

export const addPhotosToGallery = createAsyncThunk(
  'professions/addPhotos',
  async ({ id, formData }, { rejectWithValue }) => {
    try {
      const { data } = await axios.patch(`/professions/${id}/gallery`, formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });

      return data.data.result;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || error.message);
    }
  },
);

export const addLecture = createAsyncThunk(
  'professions/addLecture',
  async ({ id, lectureData }, { rejectWithValue }) => {
    try {
      const { data } = await axios.patch(`/professions/${id}/lectures`, lectureData);
      return data.data.result;
    } catch (error) {
      const serverMessages = error.response?.data?.message;
      const errorMessage = Array.isArray(serverMessages) ? serverMessages[0] : error.message;

      return rejectWithValue(errorMessage);
    }
  },
);

export const deleteLecture = createAsyncThunk(
  'professions/deleteLecture',
  async ({ professionId, lectureId }, { rejectWithValue }) => {
    try {
      const { data } = await axios.delete(`/professions/${professionId}/lectures/${lectureId}`);
      return { professionId, lectureId, updatedData: data.data }; 
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const deletePhoto = createAsyncThunk(
  'professions/deletePhoto',
  async ({ professionId, photoId }, { rejectWithValue }) => {
    try {
      await axios.delete(`/professions/${professionId}/gallery/${photoId}`);
      return { professionId, photoId };
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const deleteProfession = createAsyncThunk('professions/deleteProfession', async (id, thunkAPI) => {
  try {
    await axios.delete(`/professions/${id}`);
    return id;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});
