import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(theme => ({
  actions: {
    padding: theme.spacing(2, 0),
    justifyContent: "center",
    [theme.breakpoints.down("sm")]: {
      textAlign: "center",
      padding: theme.spacing(2, 3)
    }
  },
  fieldContainer: {
    width: "100%"
  },
  fieldControl: {
    margin: theme.spacing(1, 0),
    width: "100%"
  },
  field: {
    padding: theme.spacing(0, 0, 1)
  },
  placeholder: {
    padding: theme.spacing(0, 1, 4),
    fontFamily: "Roboto Mono, monospace",
    fontWeight: 400,
    letterSpacing: 1,
    color: "#B2B2B2"
  },
  formControl: {
    margin: theme.spacing(1)
  },
  containerBtn: {
    width: "100%",
    margin: theme.spacing(3, 0, 0)
  },
  btn: {
    width: "100%"
  },
  containerForgot: {
    margin: theme.spacing(3, 0, 0),
    color: "#707070"
  },
  forgot: {
    fontSize: 12,
    color: "#707070",
    "&:hover": {
     textDecoration: "underline"
    },
  }
}));
