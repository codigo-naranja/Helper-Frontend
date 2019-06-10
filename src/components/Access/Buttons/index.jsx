import React from "react";
import { Fab, Grid } from "@material-ui/core";
import clsx from "clsx";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(theme => ({
  actions: {
    padding: theme.spacing(5, 0),
    justifyContent: "center",
    [theme.breakpoints.down("sm")]: {
      textAlign: "center",
      padding: theme.spacing(3, 0)
    }
  },
  btn: {
    width: "70%",
    margin: theme.spacing(1, 0),
    background: "none",
    color: "#707070",
    border: "1px solid #707070",
    boxShadow: "none",
    "&:hover": {
      color: "white",
      border: "1px solid #707070",
      background: "#707070"
    },
    [theme.breakpoints.down("xs")]: {
      width: "100%"
    }
  },
  lightBlue: {
    "&:hover": {
      background: "#0097a7",
      border: "1px solid rgba(1,1,1,0)"
    }
  },
  brown: {
    "&:hover": {
      background: "#795548",
      border: "1px solid rgba(1,1,1,0)"
    }
  },
  lightViolet: {
    "&:hover": {
      background: "#ba68c8",
      border: "1px solid rgba(1,1,1,0)"
    }
  },
  orange: {
    "&:hover": {
      background: "#ff8f00 ",
      border: "1px solid rgba(1,1,1,0)"
    }
  }
}));

const Buttons = () => {
  const cstStyles = useStyles();
  const CollisionLink = React.forwardRef((props, ref) => (
    <Link innerRef={ref} to="/loginpa" {...props} />
  ));

  return (
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
        component={CollisionLink}
      >
        Padre o Estudiante
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
  );
};
export default Buttons;
