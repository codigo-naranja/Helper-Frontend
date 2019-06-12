// DEPENDENCIES // DEPENDENCIES // DEPENDENCIES // DEPENDENCIES
import React from "react";
import MaskedInput from "react-text-mask";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import {
  Fab,
  Grid,
  Input,
  InputLabel,
  FormControl,
  MenuItem,
  Select
} from "@material-ui/core";
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
    tident: ""
  });
  // METHODS // METHODS // METHODS // METHODS
  const inputValueChange = prop => event => {
    setValues({ ...values, [prop]: event.target.value });
  };

  function selectInputchange(event) {
    setValues(oldValues => ({
      ...oldValues,
      [event.target.name]: event.target.value,
    }));
  }
  return (
    <Grid
      container
      direction="column"
      alignItems="center"
      className={cstStyles.actions}
    >
      <Grid item xs={12} sm={8} className={cstStyles.fieldContainer}>
        <FormControl className={cstStyles.formControl}>
          <InputLabel className={cstStyles.placeholder} htmlFor="profile">Perfil</InputLabel>
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
              <em>None</em>
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
