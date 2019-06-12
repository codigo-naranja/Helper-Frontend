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
    fontFamily: "Roboto Mono, monospace",
    fontWeight: 500,
    letterSpacing: 1,
    textTransform: "none",
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
