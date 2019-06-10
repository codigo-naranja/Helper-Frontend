import React from "react";
import {
  Grid,
  TextField,
  IconButton,
  Input,
  InputLabel,
  InputAdornment,
  FormControl
} from "@material-ui/core";
import clsx from "clsx";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import { Visibility, VisibilityOff } from "@material-ui/icons";

const CssTextField = withStyles({
  root: {
    "& label.Mui-focused": {
      color: "green"
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "green"
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "red"
      },
      "&:hover fieldset": {
        borderColor: "yellow"
      },
      "&.Mui-focused fieldset": {
        borderColor: "green"
      }
    }
  }
})(TextField);

const useStyles = makeStyles(theme => ({
  actions: {
    padding: theme.spacing(4, 0),
    justifyContent: "center",
    [theme.breakpoints.down("sm")]: {
      textAlign: "center",
      padding: theme.spacing(3, 0)
    }
  },
  fieldContainer: {
    width: "100%"
  },
  field: {
    margin: theme.spacing(1, 0),
    width: "100%"
  },
  root: {
    display: "flex",
    flexWrap: "wrap"
  },
  margin: {
    margin: theme.spacing(1)
  },
  withoutLabel: {
    marginTop: theme.spacing(3)
  },
  textField: {
    flexBasis: 200
  }
}));

const PAForm = (props) => {
  const cstStyles = useStyles();
  const [values, setValues] = React.useState({
    amount: "",
    password: "",
    weight: "",
    showPassword: false
  });

  const handleChange = prop => event => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  return (
    <Grid
      container
      direction="column"
      alignItems="center"
      className={cstStyles.actions}
    >
      <Grid item xs={12} sm={8} className={cstStyles.fieldContainer}>
        <CssTextField
          className={cstStyles.field}
          id="custom-css-standard-input"
          label="T.Ident"
        />
      </Grid>
      <Grid item xs={12} sm={8} className={cstStyles.fieldContainer}>
        <CssTextField
          className={cstStyles.field}
          id="custom-css-standard-input"
          label="Código"
        />
      </Grid>
      <Grid item xs={12} sm={8} className={cstStyles.fieldContainer}>
        <FormControl className={clsx(cstStyles.margin, cstStyles.textField)}>
          <InputLabel htmlFor="adornment-password">Password</InputLabel>
          <Input
            id="adornment-password"
            type={values.showPassword ? "text" : "password"}
            value={values.password}
            onChange={handleChange("password")}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="Toggle password visibility"
                  onClick={handleClickShowPassword}
                >
                  {values.showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
      </Grid>
    </Grid>
  );
};
export default PAForm;
