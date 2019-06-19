// DEPENDENCIES // DEPENDENCIES // DEPENDENCIES // DEPENDENCIES
import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { validateAnswerQuestionPA } from "../../../validations";
import { forgotDataPA } from "../../../services/accessServices";
import {
  Fab,
  Grid,
  Input,
  InputLabel,
  FormControl,
  Typography
} from "@material-ui/core";
// COMPONENT // COMPONENT // COMPONENT // COMPONENT
import MessageModal from "../../../shared/components/layout/MessageModal";
// STYLES // STYLES // STYLES // STYLES
import { useStyles } from "./styles.js";

// COMPONENT // COMPONENT // COMPONENT // COMPONENT
const PAQuestion = ({ props }) => {
  const cstStyles = useStyles(); // USE STYLES IN COMPONENT
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
          {props.history.location.state.question
            ? `¿${props.history.location.state.question}?`
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
  );
};
PAQuestion.propTypes = {
  props: PropTypes.object.isRequired
};
export default PAQuestion;
