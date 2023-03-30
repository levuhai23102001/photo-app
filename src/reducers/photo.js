const initialState = {
  photos: JSON.parse(localStorage.getItem("photo-list")) || [],
};

const photoReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_NEW_PHOTO": {
      const newPhotoList = [...state.photos];
      newPhotoList.push(action.payload);
      localStorage.setItem("photo-list", JSON.stringify(newPhotoList));
      return {
        ...state,
        photos: newPhotoList,
      };
    }
    case "EDIT_PHOTO": {
      const newPhotoList = [...state.photos];
      const newPhoto = action.payload;
      console.log(newPhoto);
      const photoIndex = newPhotoList.findIndex(
        (photo) => photo.id === newPhoto.id
      );

      if (photoIndex >= 0) {
        newPhotoList[photoIndex] = newPhoto;
      }
      localStorage.setItem("photo-list", JSON.stringify(newPhotoList));
      return {
        ...state,
        photos: newPhotoList,
      };
    }
    case "REMOVE_PHOTO": {
      const newPhotoList = [...state.photos];
      const photoId = action.payload;
      console.log(photoId);
      // newList.filter((photo) => photo.id !== photoId);
      newPhotoList.splice(
        newPhotoList.findIndex((photo) => photo.id === photoId),
        1
      );
      localStorage.setItem("photo-list", JSON.stringify(newPhotoList));
      return {
        ...state,
        photos: newPhotoList,
      };
    }

    default:
      return state;
  }
};

export default photoReducer;
