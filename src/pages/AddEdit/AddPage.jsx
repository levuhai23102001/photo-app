import React from "react";
import FormPhoto from "./Form/FormPhoto";
import { useDispatch } from "react-redux";
import { addNewPhoto } from "../../actions/photo";
import { useNavigate } from "react-router-dom";

const randomId = () => {
  return 1000 + Math.trunc(Math.random() * 9000);
};

const AddPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmitForm = (values) => {
    console.log("Form Submit:", values);
    const newId = randomId();
    const newPhoto = {
      id: newId,
      values,
    };

    const action = addNewPhoto(newPhoto);
    console.log(action);
    dispatch(action);

    navigate("/");
  };

  return (
    <>
      <FormPhoto onSubmit={handleSubmitForm} />
    </>
  );
};

export default AddPage;
