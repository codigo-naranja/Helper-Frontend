import React from "react";
import Icon from "@material-ui/core/Icon";
import clsx from "clsx";
import { loadCSS } from "fg-loadcss";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-end"
  },
  icon: {
    margin: theme.spacing(2),
    width: "1.1em",
    color: "#fff",
    "&:hover": {
      color: "#cecece"
    }
  }
}));

const SocialMedia = () => {
  const classes = useStyles();
  React.useEffect(() => {
    loadCSS(
      "https://use.fontawesome.com/releases/v5.9.0/css/all.css",
      document.querySelector("#font-awesome-css")
    );
  }, []);
  return (
    <div className={classes.root}>
      <a href="https://www.facebook.com"  target="blank">
        <Icon
          className={clsx(classes.icon, "fab fa-facebook")}
          fontSize="large"
        />
      </a>
      <a href="https://www.twitter.com"  target="blank">
        <Icon
          className={clsx(classes.icon, "fab fa-twitter")}
          fontSize="large"
        />
      </a>
      <a href="https://www.youtube.com"  target="blank">
        <Icon
          className={clsx(classes.icon, "fab fa-youtube")}
          fontSize="large"
        />
      </a>
    </div>
  );
};

export default SocialMedia;
