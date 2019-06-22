// DEPENDENCIES // DEPENDENCIES // DEPENDENCIES // DEPENDENCIES
import React from "react";
import MaskedInput from "react-text-mask";
import PropTypes from "prop-types";
// UTILS // UTILS // UTILS // UTILS
import { validateUserLoginPA } from "../../../validations";
import { loginUserPA } from "../../../services/accessServices";
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
const PALogin = props => {
  // USE STATE IN FUNCTIONAL COMPONENT
  const [values, setValues] = React.useState({
    tident: "",
    code: "",
    password: "",
    error: false,
    errorTitle: "",
    errorMessage: "",
    showPassword: false
  });
  // METHODS // METHODS // METHODS // METHODS
  const inputValueChange = prop => event => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };
  const closeError = () => {
    setValues({ ...values, error: !values.error });
  };
  const onSubmit = () => {
    const errors = validateUserLoginPA
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
      loginUserPA(values.tident, values.code, values.password)
        .then(user => {
          user.user.seg === 1
            ? props.history.push(`/loginpa/firstaccess/${user.user.id}`)
            : props.history.push(`/dashboard/${user.user.id}`);
          console.log(user);
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
  // RENDER // RENDER // RENDER // RENDER
  return (
    <Form
      onSubmit={onSubmit}
      closeError={closeError}
      inputValueChange={inputValueChange}
      InputNumberMask={InputNumberMask}
      handleClickShowPassword={handleClickShowPassword}
      values={values}
    />
  );
};
PALogin.propTypes = {
  props: PropTypes.object.isRequired
};
export default PALogin;
