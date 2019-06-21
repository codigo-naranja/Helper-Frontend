// DEPENDENCIES // DEPENDENCIES // DEPENDENCIES // DEPENDENCIES
import React from "react";
import MaskedInput from "react-text-mask";
import PropTypes from "prop-types";
// UTILS // UTILS // UTILS // UTILS 
import { validateForgotDataPA } from "../../../validations";
import { forgotDataPA } from "../../../services/accessServices";
// COMPONENT // COMPONENT // COMPONENT // COMPONENT
import Form from "./Form";
// DON'T ALLOW TO ENTER LETTERS IN INPUTS, JUST NUMBERS
const InputNumberMask = props => {
  const { inputRef, ...other } = props;

  return (
    <MaskedInput
      {...other}
      ref={ref => {
        inputRef(ref ? ref.inputElement : null);
      }}
      mask={[/\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/]}
      placeholderChar={"\u2000"}
    />
  );
};
InputNumberMask.propTypes = {
  inputRef: PropTypes.func.isRequired
};

// COMPONENT // COMPONENT // COMPONENT // COMPONENT
const PAForgotData = ({ props }) => {
  // USE STATE IN FUNCTIONAL COMPONENT
  const [values, setValues] = React.useState({
    profile: "",
    tident: "",
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
    const errors = validateForgotDataPA
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
      forgotDataPA(values.tident, "-", values.profile)
        .then(response => {
          props.history.push(`/loginpa/forgotdata/answer`, {
            question: response.preg,
            user: {
              tident: values.tident,
              profile: values.profile
            }
          });
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
      InputNumberMask={InputNumberMask}
      values={values}
    />
  );
};
PAForgotData.propTypes = {
  props: PropTypes.object.isRequired
};
export default PAForgotData;
