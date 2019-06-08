import React, { Component } from "react";
import AccessType from "../../components/AccessType";
import { withStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import { styles } from "./styles";
import Version from "../../shared/components/layout/Version";
import SocialMedia from "../../shared/components/layout/SocialMedia";

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
        <AccessType />
        <SocialMedia />
        <Version />
      </Grid>
    );
  }
}
export default withStyles(styles)(index);
