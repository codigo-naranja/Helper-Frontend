// DEPENDENCIES // DEPENDENCIES // DEPENDENCIES // DEPENDENCIES
import React from "react";
import { Link } from "react-router-dom";
import {
  Card,
  CardContent,
  Typography,
  Grid,
  Box,
  Divider
} from "@material-ui/core";
// COMPONENTS // COMPONENTS // COMPONENTS // COMPONENTS
import Version from "../../layout/Version";
import SocialMedia from "../../layout/SocialMedia";
// STYLES // STYLES // STYLES // STYLES
import { useStyles } from "./styles.js";
// COMPONENT // COMPONENT // COMPONENT // COMPONENT
const AccessView = props => {
  const classes = useStyles();
  const { children, profile } = props;
  return (
    <Grid
      className={classes.cstContainer}
      container
      direction="column"
      justify="center"
      alignItems="center"
    >
      <Grid
        item
        className={classes.cardContainer}
        xs={12}
        sm={7}
        md={5}
        lg={4}
        xl={3}
      >
        <Card className={classes.card}>
          <CardContent>
            <Grid
              container
              direction="row"
              justify="space-between"
              alignItems="center"
            >
              <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
                item
                xs={12}
                sm={6}
              >
                <Box className={classes.imgContainer}>
                  <Link to="/">
                    <img
                      className={classes.img}
                      alt="complex"
                      src={process.env.PUBLIC_URL + "/images/Logo-Helper.png"}
                    />
                  </Link>
                </Box>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Typography className={classes.title} color="textSecondary">
                  <strong>BIENVENIDO</strong> <br />
                  <span>{profile}</span>
                </Typography>
              </Grid>
            </Grid>
          </CardContent>
          <Divider variant="middle" />
          {children}
        </Card>
      </Grid>
      <SocialMedia />
      <Version />
    </Grid>
  );
};

export default AccessView;
