// DEPENDENCIES // DEPENDENCIES // DEPENDENCIES // DEPENDENCIES
import React from "react";
import {Link} from "react-router-dom"
import {
  Card,
  CardContent,
  Typography,
  Grid,
  Box,
  Divider,
} from "@material-ui/core";
// COMPONENTS // COMPONENTS // COMPONENTS // COMPONENTS
import Buttons from "./Buttons";
import PAForm from "./PAForm";
import ForgotData from "./ForgotData"
// STYLES // STYLES // STYLES // STYLES
import { useStyles } from "./styles";
// COMPONENT // COMPONENT // COMPONENT // COMPONENT
const AccessType = props => {
  const classes = useStyles(); // USE STYLES IN COMPONENT

  const toggleForms = props => {
    switch (props.pathName) {
      case "/loginpa":
        return <PAForm push={props.history.push}/>;
      case "/loginpa/forgotdata":
        return <ForgotData push={props.history.push}/>;
      default:
        return <Buttons />;
    }
  };
  const profile = props =>{
    switch (props.pathName) {
      case "/loginpa":
        return <span className={classes.acu}>Acudiente o Estudiante</span>
      case "/loginpa/forgotdata":
        return <span>Olvidé mis datos</span>
      default:
        return <span>Perfil de acceso</span>
    }
  }
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
              <Link to="/">

                <img
                  className={classes.img}
                  alt="complex"
                  src={process.env.PUBLIC_URL + "/images/Logo-Helper.png"}
                />
              </Link>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography className={classes.title} color="textSecondary">
                <strong>BIENVENIDO</strong> <br />
                {profile(props)}
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
