import { FormControl } from "@mui/material";
import React from "react";
import { Label } from "reactstrap";
import PropTypes from "prop-types";
import Photo from "./Photo";

const PhotoField = (props) => {
  const { field, form, label } = props;
  const { name, value, onBlur } = field;

  const handleImageChange = (newImage) => {
    form.setFieldValue(name, newImage);
  };

  return (
    <FormControl>
      {label && <Label for={name}>{label}</Label>}

      <Photo
        name={name}
        image={value}
        onChangeImage={handleImageChange}
        onChooseButtonBlur={onBlur}
      />
    </FormControl>
  );
};

export default PhotoField;

PhotoField.propTypes = {
  field: PropTypes.object.isRequired,
  form: PropTypes.object.isRequired,

  label: PropTypes.string,
};

PhotoField.defaultProps = {
  label: "",
};
