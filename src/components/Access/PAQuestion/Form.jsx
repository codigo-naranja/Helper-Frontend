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
  Typography
} from "@material-ui/core";
// COMPONENT // COMPONENT // COMPONENT // COMPONENT
import AccessView from "../../../shared/components/views/AccessView";
import MessageModal from "../../../shared/components/layout/MessageModal";
// STYLES // STYLES // STYLES // STYLES
import { useStyles } from "./styles.js";

// COMPONENT // COMPONENT // COMPONENT // COMPONENT
const Form = ({ onSubmit, closeError, inputValueChange, values, question }) => {
  const cstStyles = useStyles(); // USE STYLES IN COMPONENT

  return (
    <AccessView profile="Pregunta de seguridad">
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
          <Typography className={cstStyles.title} color="textSecondary">
            {question
              ? `¿${question}?`
              : "¡Algo sucedió! intenta de nuevo el paso anterior."}
          </Typography>
        </Grid>
        <Grid item xs={12} sm={8} className={cstStyles.fieldContainer}>
          <FormControl className={cstStyles.fieldControl}>
            <InputLabel className={cstStyles.placeholder} htmlFor="tident">
              Respuesta
            </InputLabel>
            <Input
              className={cstStyles.field}
              onChange={inputValueChange("answer")}
              inputProps={{
                "aria-label": "Description"
              }}
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
        <Grid className={cstStyles.containerBack} item xs={12}>
          <Link to="/loginpa" className={cstStyles.back}>
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
  inputValueChange: PropTypes.func.isRequired,
  question: PropTypes.string.isRequired,
  values: PropTypes.object.isRequired
};
export default Form;
