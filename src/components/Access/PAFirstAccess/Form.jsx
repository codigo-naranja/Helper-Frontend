// DEPENDENCIES // DEPENDENCIES // DEPENDENCIES // DEPENDENCIES
import React from "react";
import PropTypes from "prop-types";
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
  values
}) => {
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
            La pregunta de seguridad te ayudará a recuperar la contraseña en
            caso de que la olvides.
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
    </AccessView>
  );
};
Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  closeError: PropTypes.func.isRequired,
  selectInputchange: PropTypes.func.isRequired,
  inputValueChange: PropTypes.func.isRequired,
  values: PropTypes.object.isRequired
};
export default Form;
