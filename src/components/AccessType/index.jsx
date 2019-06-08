import React from "react";
import clsx from "clsx";
import {
  Card,
  CardContent,
  Fab,
  Typography,
  Grid,
  Box,
  Divider
} from "@material-ui/core";
import { useStyles } from "./styles";

const AccessType = () => {
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
          className={clsx(classes.btn, classes.lightBlue)}
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
};

export default AccessType;
