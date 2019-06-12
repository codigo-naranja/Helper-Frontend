// DEPENDENCIES // DEPENDENCIES // DEPENDENCIES // DEPENDENCIES
import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
// STYLES // STYLES // STYLES // STYLES
const styles = makeStyles(theme => ({
  text: {
    fontFamily: "Roboto Mono, monospace",
    color: "#fff",
    textAlign: "center"
  }
}));
// COMPONENT // COMPONENT // COMPONENT // COMPONENT
const Version = () => {
  const classes = styles(); // USE STYLES IN COMPONENT
  return (
    <Typography
      className={classes.text}
      variant="caption"
      display="block"
      gutterBottom
    >
      © 2019 Código Naranja | Todos los derechos reservados | Version 5.0
    </Typography>
  );
};

export default Version;
