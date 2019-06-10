// DEPENDENCES
import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
// COMPONENTS
import Access from "../../components/Access";
import Version from "../../shared/components/layout/Version";
import SocialMedia from "../../shared/components/layout/SocialMedia";

const styles = theme => ({
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
    [theme.breakpoints.down(325)]: {
      height: "auto"
    }
  }
});

class index extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Grid
        className={classes.cstContainer}
        container
        direction="column"
        justify="center"
        alignItems="center"
      >
        <Access pathName={this.props.location.pathname} />
        <SocialMedia />
        <Version />
      </Grid>
    );
  }
}
index.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(index);
