import { createSlice } from '@reduxjs/toolkit';
import {
  fetchAllProfessions,
  fetchProfessionById,
  addLecture,
  deleteLecture,
  deletePhoto,
  deleteProfession,
  addProfession,
  addPhotosToGallery,
} from './operationsProfessions';

const handlePending = state => {
  state.isLoading = true;
  state.error = null;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const professionsSlice = createSlice({
  name: 'professions',
  initialState: {
    items: [],
    currentProfession: null,
    isLoading: false,
    error: null,
  },
  extraReducers: builder => {
    builder
      .addCase(addProfession.pending, handlePending)
      .addCase(addProfession.fulfilled, (state, action) => {
        state.isLoading = false;
        if (action.payload) {
          state.items.push(action.payload);
        }
      })
      .addCase(addProfession.rejected, handleRejected)

      .addCase(fetchAllProfessions.pending, handlePending)
      .addCase(fetchAllProfessions.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = action.payload;
      })
      .addCase(fetchAllProfessions.rejected, handleRejected)

      
      .addCase(fetchProfessionById.pending, state => {
        handlePending(state);
      })
      .addCase(fetchProfessionById.fulfilled, (state, action) => {
        state.isLoading = false;
        state.currentProfession = action.payload;
      })
      .addCase(fetchProfessionById.rejected, handleRejected)

      .addCase(addLecture.pending, handlePending)
      .addCase(addLecture.fulfilled, (state, action) => {
        state.isLoading = false;
        state.currentProfession = action.payload; 
      })
      .addCase(addLecture.rejected, handleRejected)

      .addCase(addPhotosToGallery.pending, handlePending)
      .addCase(addPhotosToGallery.fulfilled, (state, action) => {
        state.isLoading = false;
        state.currentProfession = action.payload; 
      })
      .addCase(addPhotosToGallery.rejected, handleRejected)

      .addCase(deleteLecture.pending, handlePending)
      .addCase(deleteLecture.fulfilled, (state, action) => {
        state.isLoading = false;
        if (state.currentProfession && state.currentProfession._id === action.payload.professionId) {
          state.currentProfession.lectures = state.currentProfession.lectures.filter(
            lecture => lecture._id !== action.payload.lectureId,
          );
        }
      })
      .addCase(deleteLecture.rejected, handleRejected)

      .addCase(deletePhoto.pending, handlePending)
      .addCase(deletePhoto.fulfilled, (state, action) => {
        state.isLoading = false;
        if (state.currentProfession && state.currentProfession._id === action.payload.professionId) {
          state.currentProfession.gallery = state.currentProfession.gallery.filter(
            photo => photo._id !== action.payload.photoId,
          );
        }
      })
      .addCase(deletePhoto.rejected, handleRejected)

      .addCase(deleteProfession.pending, handlePending)
      .addCase(deleteProfession.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = state.items.filter(item => item._id !== action.payload);
        state.currentProfession = null;
      })
      .addCase(deleteProfession.rejected, handleRejected);
  },
});

export const professionsReducer = professionsSlice.reducer;
