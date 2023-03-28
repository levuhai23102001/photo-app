export const addNewPhoto = (photo) => {
  return {
    type: "ADD_NEW_PHOTO",
    payload: photo,
  };
};

export const editPhoto = (photo) => {
  return {
    type: "EDIT_PHOTO",
    payload: photo,
  };
};

export const removePhoto = (photo) => {
  return {
    type: "REMOVE_PHOTO",
    payload: photo,
  };
};
