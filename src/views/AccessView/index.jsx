// DEPENDENCIES // DEPENDENCIES // DEPENDENCIES // DEPENDENCIES
import React from "react";
import { Grid } from "@material-ui/core";
// COMPONENTS // COMPONENTS // COMPONENTS // COMPONENTS
import Access from "../../components/Access";
import Version from "../../shared/components/layout/Version";
import SocialMedia from "../../shared/components/layout/SocialMedia";
// STYLES // STYLES // STYLES // STYLES
import { useStyles } from "./styles.js";
// COMPONENT // COMPONENT // COMPONENT // COMPONENT
const AccessView = (props) => {
  const classes = useStyles();
  return (
    <Grid
      className={classes.cstContainer}
      container
      direction="column"
      justify="center"
      alignItems="center"
    >
      <Access pathName={props.location.pathname} history={props.history} />
      <SocialMedia />
      <Version />
    </Grid>
  );
};

export default AccessView;
