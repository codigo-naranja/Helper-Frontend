// DEPENDENCIES // DEPENDENCIES // DEPENDENCIES // DEPENDENCIES
import React from "react";
import PropTypes from "prop-types";
// UTILS // UTILS // UTILS // UTILS
import { validateAnswerQuestionPA } from "../../../validations";
import { forgotDataPA } from "../../../services/accessServices";
// COMPONENT // COMPONENT // COMPONENT // COMPONENT
import Form from "./Form";
// COMPONENT // COMPONENT // COMPONENT // COMPONENT
const PAQuestion = props => {
  // USE STATE IN FUNCTIONAL COMPONENT
  const [values, setValues] = React.useState({
    answer: "",
    error: false,
    errorTitle: "",
    errorMessage: ""
  });
  // METHODS // METHODS // METHODS // METHODS
  const inputValueChange = prop => event => {
    setValues({ ...values, [prop]: event.target.value });
  };
  const closeError = () => {
    setValues({ ...values, error: !values.error });
  };
  const onSubmit = () => {
    const errors = validateAnswerQuestionPA
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
      forgotDataPA(
        props.history.location.state.user.tident,
        values.answer,
        props.history.location.state.user.profile
      )
        .then(response => {
          props.history.push("/");
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
      inputValueChange={inputValueChange}
      values={values}
      question={props.history.location.state.question}
    />
  );
};
PAQuestion.propTypes = {
  props: PropTypes.object.isRequired
};
export default PAQuestion;
