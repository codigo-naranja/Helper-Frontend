import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(theme => ({
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
      background: "#707070"
    }
  },
  lightBlue: {
    "&:hover": {
      background: "#0097a7",
      border: "1px solid rgba(1,1,1,0)",
    }
  },
  brown: {
    "&:hover": {
      background: "#795548"
    }
  },
  lightViolet: {
    "&:hover": {
      background: "#ba68c8"
    }
  },
  orange: {
    "&:hover": {
      background: "#ff8f00 "
    }
  }
}));
