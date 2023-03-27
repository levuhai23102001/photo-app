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
      return state;
    }
    default:
      return state;
  }
};

export default photoReducer;
