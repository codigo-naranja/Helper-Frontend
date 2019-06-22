import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(theme => ({
  cstContainer: {
    height: "100vh",
    background: "rgba(52,147,230,1);" /* fallback for old browsers */,
    // eslint-disable-next-line no-dupe-keys
    background: `url('${
      process.env.PUBLIC_URL
    }/images/bg-pattern.png'), -moz-linear-gradient(-45deg, rgba(52,147,230,1) 0%, rgba(97,129,219,1) 28%, rgba(113,123,215,1) 38%, rgba(196,91,194,1) 89%);`,
    // eslint-disable-next-line no-dupe-keys
    background: `url('${
      process.env.PUBLIC_URL
    }/images/bg-pattern.png'), -webkit-linear-gradient(-45deg, rgba(52,147,230,1) 0%, rgba(97,129,219,1) 28%, rgba(113,123,215,1) 38%, rgba(196,91,194,1) 89%)`,
    backgroundSize: "cover",

    [theme.breakpoints.down("sm")]: {
      padding: theme.spacing(1),
      flexWrap: "nowrap"
    },
    [theme.breakpoints.down(361)]: {
      height: "auto"
    }
  },
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
  acu: {
    [theme.breakpoints.up("sm")]: {
      fontSize: "14px"
    }
  }
}));
