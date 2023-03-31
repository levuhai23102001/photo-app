import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  photos: JSON.parse(localStorage.getItem("photo-list")) || [],
};

export const photo = createSlice({
  name: "photos",
  initialState,
  reducers: {
    addNewPhoto(state, action) {
      state.photos.push(action.payload);
      localStorage.setItem("photo-list", JSON.stringify(state.photos));
    },
    editPhoto(state, action) {
      const newPhoto = action.payload;
      const photoIndex = state.photos.findIndex(
        (photo) => photo.id === newPhoto.id
      );

      if (photoIndex >= 0) {
        state.photos[photoIndex] = newPhoto;
      }

      localStorage.setItem("photo-list", JSON.stringify(state.photos));
    },
    removePhoto(state, action) {
      const photoId = action.payload;
      state.photos.splice(
        state.photos.findIndex((photo) => photo.id === photoId),
        1
      );
      localStorage.setItem("photo-list", JSON.stringify(state.photos));
    },
  },
});

const { actions, reducer } = photo;

export const { addNewPhoto, editPhoto, removePhoto } = actions;

export default reducer;
