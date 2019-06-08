import React, { Component } from "react";
import AccessType from "../../components/AccessType";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";



// const classes = useStyles();
export default class index extends Component {
 
  constructor(props) {
    super(props)
  
    this.state = {
      useStyles: makeStyles({
        cstContainer: {
          height: "100vh"
        }
      })
    }
  }
  

  render() {
    const classes = this.state.useStyles()
    return (
      <Grid
        className={classes.cstContainer}
        container
        direction="row"
        justify="center"
        alignItems="center"
      >
        <AccessType />
      </Grid>
    );
  }
}
