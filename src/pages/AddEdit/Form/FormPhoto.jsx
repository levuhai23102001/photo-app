import React from "react";

import PropTypes from "prop-types";
import { PHOTO_CATEGORY_OPTIONS as cateOption } from "../../../constants/categories";
import { FastField, Form, Formik } from "formik";
import InputField from "./InputField";
import SelectField from "./SelectField";

import PhotoField from "../Photo/PhotoField";
import { FormGroup, Button } from "reactstrap";
import "./formPhoto.css";

const FormPhoto = (props) => {
  const initialValues = {
    title: "",
    categoryId: null,
  };

  return (
    <>
      <Formik initialValues={initialValues} onSubmit={props.onSubmit}>
        {(formikProps) => {
          const { values, errors, touched } = formikProps;

          console.log({ values, errors, touched });
          return (
            <Form className="form-container">
              <FastField
                name="title"
                component={InputField}
                label="Title"
                placeholder="Eg: Wow nature..."
              />
              <FastField
                name="categoryId"
                component={SelectField}
                label="Categories"
                placeholder="Choose a category..."
                options={cateOption}
              />
              <FastField
                name="photo"
                component={PhotoField}
                label="Add new Photo"
              />
              <FormGroup>
                <Button type="submit" color="primary">
                  Add to album
                </Button>
              </FormGroup>
            </Form>
          );
        }}
      </Formik>
    </>
  );
};

export default FormPhoto;

FormPhoto.propTypes = {
  onsubmit: PropTypes.func,
};
