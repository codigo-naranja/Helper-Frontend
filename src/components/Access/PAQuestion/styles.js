import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(theme => ({
  actions: {
    padding: theme.spacing(4, 0),
    justifyContent: "center",
    [theme.breakpoints.down("sm")]: {
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
  title: {
    fontSize: 18,
    fontFamily: "Roboto Mono, monospace",
    textAlign: "left",
    [theme.breakpoints.down("sm")]: {
      padding: theme.spacing(2, 0, 0)
    }
  },
  root: {
    display: "flex",
    flexWrap: "wrap"
  },
  formControl: {
    margin: 0,
    width: "100%",
  },
  containerBtn: {
    width: "100%",
    margin: theme.spacing(3, 0, 0)
  },
  btn: {
    width: "100%"
  },
  containerBack: {
    margin: theme.spacing(3, 0, 0),
    color: "#707070"
  },
  back: {
    fontSize: 14,
    color: "#707070",
    "&:hover": {
     textDecoration: "underline"
    },
  }
}));
