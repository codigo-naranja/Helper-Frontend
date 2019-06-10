import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Grid,
  Box,
  Divider
} from "@material-ui/core";
import Buttons from "./Buttons";
import PAForm from "./PAForm";
import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(theme => ({
  cardContainer: {
    width: "100%",
    [theme.breakpoints.down("xs")]: {
      flexBasis: "auto"
    }
  },
  card: {
    borderRadius: 12,
    padding: theme.spacing(3, 2),
    boxShadow: "5px 5px 8px 3px rgba(0,0,0,0.1)",
    border: "none",
    [theme.breakpoints.down("sm")]: {
      padding: theme.spacing(2)
    }
  },
  title: {
    fontSize: 16,
    fontFamily: "Roboto Mono, monospace",
    textAlign: "right",
    [theme.breakpoints.down("sm")]: {
      textAlign: "center",
      padding: theme.spacing(2, 0, 0)
    }
  },
  imgContainer: {
    width: 150
  },
  img: {
    width: "100%"
  }
}));

const AccessType = props => {
  const classes = useStyles();

  const toggleForms = props => {
    switch (props.pathName) {
      case "/loginpa":
        return <PAForm/>;
      default:
        return <Buttons />;
    }
  };
  return (
    <Grid
      item
      className={classes.cardContainer}
      xs={12}
      sm={7}
      md={5}
      lg={4}
      xl={3}
    >
      <Card className={classes.card}>
        <CardContent>
          <Grid
            container
            direction="row"
            justify="space-between"
            alignItems="center"
          >
            <Grid
              container
              direction="row"
              justify="center"
              alignItems="center"
              item
              xs={12}
              sm={6}
            >
              <Box className={classes.imgContainer}>
                <img
                  className={classes.img}
                  alt="complex"
                  src={process.env.PUBLIC_URL + "/images/Logo-Helper.png"}
                />
              </Box>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography className={classes.title} color="textSecondary">
                <strong>BIENVENIDO</strong> <br />
                Perfil de acceso
              </Typography>
            </Grid>
          </Grid>
        </CardContent>
        <Divider variant="middle" />
        {toggleForms(props)}
      </Card>
    </Grid>
  );
};

export default AccessType;
