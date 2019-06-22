// DEPENDENCIES // DEPENDENCIES // DEPENDENCIES // DEPENDENCIES
import React from "react";
import { Fab, Grid } from "@material-ui/core";
import clsx from "clsx";
import { Link } from "react-router-dom";
// COMPONENTS // COMPONENTS // COMPONENTS // COMPONENTS
import AccessView from "../../../shared/components/views/AccessView";
// STYLES // STYLES // STYLES // STYLES
import { useStyles } from "./styles";
// COMPONENT // COMPONENT // COMPONENT // COMPONENT
const AccessButtons = () => {
  const cstStyles = useStyles(); // USE STYLES IN COMPONENT
  // LINKS
  const LoginPa = React.forwardRef((props, ref) => (
    <Link innerRef={ref} to="/loginpa" {...props} />
  ));

  return (
    <AccessView profile="Perfil de acceso">
      <Grid
        container
        direction="row"
        alignItems="center"
        className={cstStyles.actions}
      >
        <Fab
          className={clsx(cstStyles.btn, cstStyles.lightBlue)}
          variant="extended"
          color="primary"
          aria-label="Add"
        >
          Administrativo
        </Fab>
        <Fab
          className={clsx(cstStyles.btn, cstStyles.brown)}
          variant="extended"
          color="primary"
          aria-label="Add"
        >
          Profesor
        </Fab>
        <Fab
          className={clsx(cstStyles.btn, cstStyles.lightViolet)}
          variant="extended"
          color="primary"
          aria-label="Add"
          component={LoginPa}
        >
          Acudiente o Estudiante
        </Fab>
        <Fab
          className={clsx(cstStyles.btn, cstStyles.orange)}
          variant="extended"
          color="primary"
          aria-label="Add"
        >
          Asociación
        </Fab>
      </Grid>
    </AccessView>
  );
};
export default AccessButtons;
