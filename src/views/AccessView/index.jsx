// DEPENDENCIES // DEPENDENCIES // DEPENDENCIES // DEPENDENCIES
import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
// COMPONENTS // COMPONENTS // COMPONENTS // COMPONENTS
import Access from "../../components/Access";
import Version from "../../shared/components/layout/Version";
import SocialMedia from "../../shared/components/layout/SocialMedia";
// STYLES // STYLES // STYLES // STYLES
import { styles } from "./styles.js";
// COMPONENT // COMPONENT // COMPONENT // COMPONENT
class index extends Component {
  render() {
    const { classes } = this.props; // USE STYLES IN COMPONENT
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
