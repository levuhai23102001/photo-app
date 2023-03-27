import { FormControl, TextField } from "@mui/material";
import React from "react";
import PropTypes from "prop-types";
const InputField = (props) => {
  const { field, form, type, placeholder, label, disabled } = props;

  const { name } = field;

  return (
    <FormControl>
      <TextField
        id={name}
        label={label}
        variant="outlined"
        style={{ width: 350 }}
        {...field}
        placeholder={placeholder}
      />
    </FormControl>
  );
};

export default InputField;

InputField.propTypes = {
  field: PropTypes.object.isRequired,
  form: PropTypes.object.isRequired,
  type: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  disable: PropTypes.bool,
};

InputField.defaultProps = {
  type: "text",
  label: "",
  placeholder: "",
  disable: false,
};
