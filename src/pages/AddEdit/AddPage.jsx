import React from "react";
import FormPhoto from "./Form/FormPhoto";
import { useDispatch, useSelector } from "react-redux";
import { addNewPhoto, editPhoto } from "../../redux-toolkit/photoSlice";
import { useNavigate, useParams } from "react-router-dom";

const randomId = () => {
  return 1000 + Math.trunc(Math.random() * 9000);
};

const AddPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { photoId } = useParams();
  const idAddMode = !photoId;
  const editedPhoto = useSelector((state) => {
    const foundPhoto = state.photos.photos.find((x) => x.id === +photoId);
    console.log("edited:", state.photos.photos, photoId, foundPhoto);
    return foundPhoto;
  });

  const handleSubmitForm = (values) => {
    if (idAddMode) {
      const newId = randomId();
      const newPhoto = {
        id: newId,
        ...values,
      };
      const action = addNewPhoto(newPhoto);
      console.log(action);
      dispatch(action);
    } else {
      const action = editPhoto(values);
      console.log(action);
      dispatch(action);
    }
    navigate("/");
  };

  const initialValues = idAddMode
    ? {
        title: "",
        categoryId: null,
      }
    : editedPhoto;

  return (
    <>
      <FormPhoto initialValues={initialValues} onSubmit={handleSubmitForm} />
    </>
  );
};

export default AddPage;
