// DEPENDENCIES // DEPENDENCIES // DEPENDENCIES // DEPENDENCIES
import React from "react";
import clsx from "clsx";
import { Visibility, VisibilityOff } from "@material-ui/icons";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
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
import AccessView from "../../../shared/components/views/AccessView";
import MessageModal from "../../../shared/components/layout/MessageModal";
// STYLES // STYLES // STYLES // STYLES
import { useStyles } from "./styles.js";

// COMPONENT // COMPONENT // COMPONENT // COMPONENT
const Form = ({
  onSubmit,
  closeError,
  handleClickShowPassword,
  inputValueChange,
  InputNumberMask,
  values
}) => {
  const cstStyles = useStyles(); // USE STYLES IN COMPONENT
  // RENDER // RENDER // RENDER // RENDER
  return (
    <AccessView profile="Acudiente o Estudiante">
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
    </AccessView>
  );
};
Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  closeError: PropTypes.func.isRequired,
  handleClickShowPassword: PropTypes.func.isRequired,
  inputValueChange: PropTypes.func.isRequired,
  InputNumberMask: PropTypes.func.isRequired,
  values: PropTypes.object.isRequired
};
export default Form;
