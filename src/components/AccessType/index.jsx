import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Card,
  CardContent,
  Fab,
  Typography,
  Grid,
  Box,
  Divider
} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  card: {
    minWidth: 420,
    maxWidth: "min-content",
    borderRadius: 12,
    padding: theme.spacing(3, 2),
    boxShadow: "5px 5px 8px 3px rgba(0,0,0,0.1)",
    border: "none"
  },
  title: {
    fontSize: 16,
    fontFamily: "Roboto Mono, monospace",
    textAlign: "right"
  },
  imgContainer: {
    width: 150
  },
  img: {
    width: "100%"
  },
  actions: {
    padding: theme.spacing(5, 0),
    justifyContent: "center"
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
      background: "#707070",
      
    }
  }
}));

export default function AccessType() {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <CardContent>
        <Grid
          container
          direction="row"
          justify="space-between"
          alignItems="center"
        >
          <Box className={classes.imgContainer}>
            <img
              className={classes.img}
              alt="complex"
              src={process.env.PUBLIC_URL + "/images/Logo-Helper.png"}
            />
          </Box>

          <Typography className={classes.title} color="textSecondary">
            <strong>BIENVENIDO</strong> <br />
            Perfil de acceso
          </Typography>
        </Grid>
      </CardContent>
      <Divider variant="middle" />
      <Grid
        container
        direction="row"
        alignItems="center"
        className={classes.actions}
      >
        <Fab
          className={classes.btn}
          variant="extended"
          color="primary"
          aria-label="Add"
        >
          Administrativo
        </Fab>
        <Fab
          className={classes.btn}
          variant="extended"
          color="primary"
          aria-label="Add"
        >
          Profesor
        </Fab>
        <Fab
          className={classes.btn}
          variant="extended"
          color="primary"
          aria-label="Add"
        >
          Padre o Estudiante
        </Fab>
        <Fab
          className={classes.btn}
          variant="extended"
          color="primary"
          aria-label="Add"
        >
          Asociación
        </Fab>
      </Grid>
    </Card>
  );
}
