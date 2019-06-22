// DEPENDENCIES // DEPENDENCIES // DEPENDENCIES // DEPENDENCIES
import React from "react";
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
// COMPONENT // COMPONENT // COMPONENT // COMPONENT
import AccessView from "../../../shared/components/views/AccessView";
import MessageModal from "../../../shared/components/layout/MessageModal";
// STYLES // STYLES // STYLES // STYLES
import { useStyles } from "./styles";

// COMPONENT // COMPONENT // COMPONENT // COMPONENT
const Form = ({
  onSubmit,
  closeError,
  selectInputchange,
  inputValueChange,
  InputNumberMask,
  values
}) => {
  const cstStyles = useStyles(); // USE STYLES IN COMPONENT
  return (
    <AccessView profile="Olvidé mis datos">
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
    </AccessView>
  );
};
Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  closeError: PropTypes.func.isRequired,
  selectInputchange: PropTypes.func.isRequired,
  inputValueChange: PropTypes.func.isRequired,
  InputNumberMask: PropTypes.func.isRequired,
  values: PropTypes.object.isRequired
};
export default Form;
