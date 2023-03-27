import React from "react";
import FormPhoto from "./Form/FormPhoto";
import { useDispatch } from "react-redux";
import { addNewPhoto } from "../../actions/photo";
import { useNavigate } from "react-router-dom";

const AddPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmitForm = (values) => {
    console.log("Form Submit:", values);
    const action = addNewPhoto(values);
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
