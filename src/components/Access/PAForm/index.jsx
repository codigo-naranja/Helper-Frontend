// DEPENDENCIES // DEPENDENCIES // DEPENDENCIES // DEPENDENCIES
import React from "react";
import clsx from "clsx";
import { Visibility, VisibilityOff } from "@material-ui/icons";
import MaskedInput from "react-text-mask";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import validate from "validate.js";
import {
  Fab,
  Grid,
  IconButton,
  Input,
  InputLabel,
  InputAdornment,
  FormControl
} from "@material-ui/core";
// COMPONENT // COMPONENT // COMPONENT // COMPONENT
import ErrorModal from "../../../shared/components/layout/ErrorModal";
// STYLES // STYLES // STYLES // STYLES
import { useStyles } from "./styles.js";

// DON'T ALLOW TO ENTER LETTERS IN INPUTS, JUST NUMBERS
function InputNumberMask(props) {
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
}
InputNumberMask.propTypes = {
  inputRef: PropTypes.func.isRequired
};

// COMPONENT // COMPONENT // COMPONENT // COMPONENT
const PAForm = props => {
  const cstStyles = useStyles(); // USE STYLES IN COMPONENT
  const constraints = {
    tident: {
      presence: true,
      message: "must be at least 6 characters"
    },
    code: {
      presence: true
    },
    password: {
      presence: true
    }
  };
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
    if (values.tident === "" || values.code === "" || values.password === "") {
      setValues({
        ...values,
        error: !values.error,
        errorTitle:
          "¡Oops! Asegurate de tener los siguientes campos con la información adecuada:"
      });
     console.log(validate({tident:1234567890}, constraints)) 
    }
  };

  return (
    <Grid
      container
      direction="column"
      alignItems="center"
      className={cstStyles.actions}
    >
      <ErrorModal
        action={values.error}
        closeError={closeError}
        titleMessage={values.errorTitle}
        message={values.errorMessage}
      />
      <Grid item xs={12} sm={8} className={cstStyles.fieldContainer}>
        <FormControl className={cstStyles.fieldControl}>
          <InputLabel className={cstStyles.placeholder} htmlFor="tident">
            T.Ident o Cédula
          </InputLabel>
          <Input
            className={clsx(cstStyles.field)}
            value={values.tident}
            onChange={inputValueChange("tident")}
            id="tident"
            inputComponent={InputNumberMask}
          />
        </FormControl>
      </Grid>
      <Grid item xs={12} sm={8} className={cstStyles.fieldContainer}>
        <FormControl className={cstStyles.fieldControl}>
          <InputLabel className={cstStyles.placeholder} htmlFor="code">
            Código
          </InputLabel>
          <Input
            className={clsx(cstStyles.field)}
            value={values.code}
            onChange={inputValueChange("code")}
            id="code"
            inputComponent={InputNumberMask}
          />
        </FormControl>
      </Grid>
      <Grid item xs={12} sm={8} className={cstStyles.fieldContainer}>
        <FormControl className={clsx(cstStyles.fieldControl)}>
          <InputLabel className={cstStyles.placeholder} htmlFor="password">
            Contraseña
          </InputLabel>
          <Input
            className={clsx(cstStyles.field)}
            id="password"
            type={values.showPassword ? "text" : "password"}
            value={values.password}
            onChange={inputValueChange("password")}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="Toggle password visibility"
                  onClick={handleClickShowPassword}
                >
                  {values.showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
      </Grid>
      <Grid className={cstStyles.containerBtn} item xs={12} sm={6}>
        <Fab
          className={cstStyles.btn}
          variant="extended"
          color="primary"
          aria-label="Add"
          onClick={onSubmit}
        >
          Ingresar
        </Fab>
      </Grid>
      <Grid className={cstStyles.containerForgot} item xs={12}>
        <Link to="/loginpa/forgotdata" className={cstStyles.forgot}>
          Olvidé mis datos
        </Link>
      </Grid>
    </Grid>
  );
};
export default PAForm;
