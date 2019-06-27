// DEPENDENCIES // DEPENDENCIES // DEPENDENCIES // DEPENDENCIES
import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
// UTILS // UTILS // UTILS // UTILS
import { validateQuestionPA } from "../../../validations";
import { saveQuestion } from "../../../services/accessServices";
// COMPONENT // COMPONENT // COMPONENT // COMPONENT
import Form from "./Form";

// COMPONENT // COMPONENT // COMPONENT // COMPONENT
const PAFirstAccess = props => {
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
      saveQuestion(
        props.user.user.id,
        values.question,
        props.user.user.nit,
        values.answer,
        props.user.user.perf,
        props.user.token
      )
        .then(response => {
          props.history.push(`/dashboard/${props.user.user.id}`);
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
const mapStateToProps = state => {
  return {
    user: state.users[0]
  };
};
export default connect(mapStateToProps)(PAFirstAccess);
