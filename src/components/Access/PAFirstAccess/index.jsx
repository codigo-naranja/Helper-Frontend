// DEPENDENCIES // DEPENDENCIES // DEPENDENCIES // DEPENDENCIES
import React from "react";
import PropTypes from "prop-types";
// UTILS // UTILS // UTILS // UTILS
import { validateQuestionPA } from "../../../validations";
import { saveQuestion } from "../../../services/accessServices";
// COMPONENT // COMPONENT // COMPONENT // COMPONENT
import Form from "./Form";

// COMPONENT // COMPONENT // COMPONENT // COMPONENT
const PAFirstAccess = ({ props }) => {
  // USE STATE IN FUNCTIONAL COMPONENT
  const [values, setValues] = React.useState({
    question: "",
    answer: "",
    error: false,
    errorTitle: "",
    errorMessage: ""
  });
  // METHODS // METHODS // METHODS // METHODS
  const inputValueChange = prop => event => {
    setValues({ ...values, [prop]: event.target.value });
  };

  function selectInputchange(event) {
    setValues(oldValues => ({
      ...oldValues,
      [event.target.name]: event.target.value
    }));
  }
  const closeError = () => {
    setValues({ ...values, error: !values.error });
  };
  const onSubmit = () => {
    const errors = validateQuestionPA
      .validate(values)
      .map((err, i) => <li key={`00${i}`}>- {err.message}</li>);
    if (errors.length > 0) {
      setValues({
        ...values,
        error: !values.error,
        errorTitle:
          "¡Oops! Asegurate de tener los siguientes campos con la información adecuada:",
        errorMessage: errors
      });
    } else {
      saveQuestion(values.tident, "-", values.profile)
        .then(response => {
          console.log(response);
        })
        .catch(err => {
          setValues({
            ...values,
            error: !values.error,
            errorTitle:
              "¡Oops! Asegurate de tener los siguientes campos con la información adecuada:",
            errorMessage: err
          });
        });
    }
  };
  return (
    <Form
      onSubmit={onSubmit}
      closeError={closeError}
      selectInputchange={selectInputchange}
      inputValueChange={inputValueChange}
      values={values}
    />
  );
};
PAFirstAccess.propTypes = {
  props: PropTypes.object.isRequired
};
export default PAFirstAccess;
