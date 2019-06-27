// DEPENDENCIES // DEPENDENCIES // DEPENDENCIES // DEPENDENCIES
import React, { useEffect } from "react";
import Typography from "@material-ui/core/Typography";
import CustomizedSnackbars from "../popMessage";
import { makeStyles } from "@material-ui/core/styles";
// UTILS // UTILS // UTILS // UTILS
import { getVersion } from "../../../../services/accessServices";
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
  const [version, setVersion] = React.useState();
  const [schedule, setSchedule] = React.useState(0);
  const [message, setMessage] = React.useState("");
  useEffect(() => {
    getVersion()
      .then(result => {
        setVersion(result.versionPA);
        setMessage(result.Comentario);
        setSchedule(result.programado);
      })
      .catch(err => {
        setVersion("");
      });
  }, []);

  return (
    <React.Fragment>
      {schedule === 1 && (
        <CustomizedSnackbars
          type="warning"
          message={message}
          vertical="bottom"
          horizontal="left"
        />
      )}

      <Typography
        className={classes.text}
        variant="caption"
        display="block"
        gutterBottom
      >
        © 2019 Código Naranja | Todos los derechos reservados | Version{" "}
        {version ? version : "..."}
      </Typography>
    </React.Fragment>
  );
};

export default Version;
