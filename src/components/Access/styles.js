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
  },
  acu:{
    [theme.breakpoints.up("sm")]:{
      fontSize: "14px"

    }
  }
}));
