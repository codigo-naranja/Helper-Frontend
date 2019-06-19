// DEPENDENCIES // DEPENDENCIES // DEPENDENCIES // DEPENDENCIES
import React from "react";
import PropTypes from "prop-types";
import { validateQuestionPA } from "../../../validations";
import { saveQuestion } from "../../../services/accessServices";
import {
  Fab,
  Grid,
  Input,
  InputLabel,
  FormControl,
  MenuItem,
  Select,
  Typography
} from "@material-ui/core";
// COMPONENT // COMPONENT // COMPONENT // COMPONENT
import MessageModal from "../../../shared/components/layout/MessageModal";
// STYLES // STYLES // STYLES // STYLES
import { useStyles } from "./styles";

// COMPONENT // COMPONENT // COMPONENT // COMPONENT
const PAFirstAccess = ({ props }) => {
  const cstStyles = useStyles(); // USE STYLES IN COMPONENT
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
      saveQuestion(values.tident, "-", values.profile)
        .then(response => {
          props.history.push({
            pathname: `/dashboard/`,
            state: {
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
        <Typography className={cstStyles.title} color="textSecondary">
          La pregunta de seguridad te ayudará a recuperar la contraseña en caso
          de que la olvides.
        </Typography>
      </Grid>
      <Grid item xs={12} sm={8} className={cstStyles.fieldContainer}>
        <FormControl className={cstStyles.formControl}>
          <InputLabel className={cstStyles.placeholder} htmlFor="question">
            Escoge una pregunta
          </InputLabel>
          <Select
            className={cstStyles.field}
            value={values.question}
            onChange={selectInputchange}
            inputProps={{
              name: "question",
              id: "question"
            }}
          >
            <MenuItem value="">
              <em>Ninguno</em>
            </MenuItem>
            <MenuItem value={"Cúal es el nombre de tu primera mascota"}>
              ¿Cúal es el nombre de tu primera mascota?
            </MenuItem>
            <MenuItem value={"En qué ciudad nació tu mamá"}>
              ¿En qué ciudad nació tu mamá?
            </MenuItem>
            <MenuItem value={"En qué año nació tu papá"}>
              ¿En qué año nació tu papá?
            </MenuItem>
            <MenuItem value={"Cuál era tu materia favorita en el colegio"}>
              ¿Cuál era tu materia favorita en el colegio?
            </MenuItem>
            <MenuItem
              value={"Cuál es el nombre de tu mejor amigo de la infancia"}
            >
              ¿Cuál es el nombre de tu mejor amigo de la infancia?
            </MenuItem>
          </Select>
        </FormControl>
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
          Enviar
        </Fab>
      </Grid>
    </Grid>
  );
};
PAFirstAccess.propTypes = {
  props: PropTypes.object.isRequired
};
export default PAFirstAccess;
