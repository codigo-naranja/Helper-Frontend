// DEPENDENCIES // DEPENDENCIES // DEPENDENCIES // DEPENDENCIES
import React from "react";
import MaskedInput from "react-text-mask";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { validateForgotDataPA } from "../../../validations";
import { forgotDataPA } from "../../../services/accessServices";
import {
  Fab,
  Grid,
  Input,
  InputLabel,
  FormControl,
  MenuItem,
  Select
} from "@material-ui/core";
// COMPONENT // COMPONENT // COMPONENT // COMPONENT
import MessageModal from "../../../shared/components/layout/MessageModal";
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
          // props.push(`/loginpa/forgotdata/answer`);
          props.push({
            path: `/loginpa/forgotdata/answer`,
            data: {
              question: response.preg,
              user: {
                tident: values.tident,
                profile: values.profile
              }
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
    <Grid
      container
      direction="column"
      alignItems="center"
      className={cstStyles.actions}
    >
      <MessageModal
        action={values.error}
        closeModal={closeError}
        titleMessage={values.errorTitle}
        message={values.errorMessage}
      />
      <Grid item xs={12} sm={8} className={cstStyles.fieldContainer}>
        <FormControl className={cstStyles.formControl}>
          <InputLabel className={cstStyles.placeholder} htmlFor="profile">
            Perfil
          </InputLabel>
          <Select
            className={cstStyles.field}
            value={values.profile}
            onChange={selectInputchange}
            inputProps={{
              name: "profile",
              id: "profile"
            }}
          >
            <MenuItem value="">
              <em>Ninguno</em>
            </MenuItem>
            <MenuItem value={"est"}>Estudiante</MenuItem>
            <MenuItem value={"acu"}>Acudiente</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={12} sm={8} className={cstStyles.fieldContainer}>
        <FormControl className={cstStyles.fieldControl}>
          <InputLabel className={cstStyles.placeholder} htmlFor="tident">
            T.Ident o Cédula
          </InputLabel>
          <Input
            className={cstStyles.field}
            value={values.tident}
            onChange={inputValueChange("tident")}
            id="tident"
            inputComponent={InputNumberMask}
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
          Validar
        </Fab>
      </Grid>
      <Grid className={cstStyles.containerForgot} item xs={12}>
        <Link to="/loginpa" className={cstStyles.forgot}>
          Regresar
        </Link>
      </Grid>
    </Grid>
  );
};
export default PAForm;
