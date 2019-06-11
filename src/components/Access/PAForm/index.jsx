import React from "react";
import {
  Fab,
  Grid,
  IconButton,
  Input,
  InputLabel,
  InputAdornment,
  FormControl
} from "@material-ui/core";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import { Visibility, VisibilityOff } from "@material-ui/icons";
import MaskedInput from "react-text-mask";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const useStyles = makeStyles(theme => ({
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
  root: {
    display: "flex",
    flexWrap: "wrap"
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
    color: "#707070"
  }
}));
function TextMaskCustom(props) {
  const { inputRef, ...other } = props;

  return (
    <MaskedInput
      {...other}
      ref={ref => {
        inputRef(ref ? ref.inputElement : null);
      }}
      mask={[/\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/]}
      placeholderChar={"\u2000"}
    />
  );
}

TextMaskCustom.propTypes = {
  inputRef: PropTypes.func.isRequired
};

const PAForm = props => {
  const cstStyles = useStyles();
  const [values, setValues] = React.useState({
    tident: "",
    code: "",
    password: "",
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
        <FormControl className={cstStyles.fieldControl}>
          <InputLabel className={cstStyles.placeholder} htmlFor="tident">
            T.Ident
          </InputLabel>
          <Input
            className={clsx(cstStyles.field)}
            value={values.tident}
            onChange={handleChange("tident")}
            id="tident"
            inputComponent={TextMaskCustom}
          />
        </FormControl>
      </Grid>
      <Grid item xs={12} sm={8} className={cstStyles.fieldContainer}>
        <FormControl className={cstStyles.fieldControl}>
          <InputLabel className={cstStyles.placeholder} htmlFor="code">
            Código
          </InputLabel>
          <Input
            className={clsx(cstStyles.field)}
            value={values.code}
            onChange={handleChange("code")}
            id="code"
            inputComponent={TextMaskCustom}
          />
        </FormControl>
      </Grid>
      <Grid item xs={12} sm={8} className={cstStyles.fieldContainer}>
        <FormControl className={clsx(cstStyles.fieldControl)}>
          <InputLabel className={cstStyles.placeholder} htmlFor="password">
            Password
          </InputLabel>
          <Input
            className={clsx(cstStyles.field)}
            id="password"
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
      <Grid className={cstStyles.containerBtn} item xs={12} md={6}>
        <Fab
          className={cstStyles.btn}
          variant="extended"
          color="primary"
          aria-label="Add"
        >
          Ingresar
        </Fab>
      </Grid>
      <Grid className={cstStyles.containerForgot} item xs={12}>
        <Link className={cstStyles.forgot}>Cambiar contraseña</Link> |{" "}
        <Link className={cstStyles.forgot}>Olvidé mis datos</Link>
      </Grid>
    </Grid>
  );
};
export default PAForm;
