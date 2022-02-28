import React, { useState } from "react";
import {
  Box,
  Button,
  Card,
  Grid,
  makeStyles,
  Typography,
  Avatar,
  CardContent,
} from "@material-ui/core";
//import AppFooter from "../../Components/AppFooter";
import FavoriteIcon from "@material-ui/icons/Favorite";
import CommentIcon from "@material-ui/icons/Comment";
import { Rating, Stack } from "@mui/material";

import { Build } from "@material-ui/icons";
//import Header from "../../Components/Header";
//import HeaderNoAuth from "../../Components/HeaderNoAuth";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#F0F0F0",
  },
  firstGrid: {
    marginTop: theme.spacing(1),
  },
  secondGrid: {
    margin: theme.spacing(4, 8),
  },
  headerCourse: {
    backgroundColor: "#fff",
  },
  img: {
    margin: theme.spacing(3),
  },
  description: {
    margin: theme.spacing(3),
  },
  button: {
    marginTop: theme.spacing(2),
  },
  detailsGrid: {
    marginLeft: theme.spacing(11),
  },
  detailsCard: {
    margin: theme.spacing(2),
  },
  detailsTyp: {
    margin: theme.spacing(2),
  },
  signUp: {
    margin: theme.spacing(1),
  },
}));

export default function HomeNoAuth() {
  const classes = useStyles();

  return (
    <Grid className={classes.root} container>
      <Grid xs={1}></Grid>
      <Grid xs={10} className={classes.firstGrid}>
        <div>
          <Card>
            <Grid container className={classes.headerCourse}>
              <Grid xs={4} className={classes.img}>
                <Box>
                  <img style={{ width: "100%" }} src="/principal.jpg" />
                </Box>
              </Grid>
              <Grid xs={1} />
              <Grid xs={5} className={classes.description}>
                <Typography variant="h3">
                  Um Portal de vagas completo para você.
                </Typography>
                <Typography variant="subtitle1">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </Typography>
              </Grid>
            </Grid>
          </Card>
          <Grid container className={classes.secondGrid}>
            <Grid xs={5} container>
              <Card>
                <CardContent className={classes.signUp}>
                  <Typography variant="h4">Cadastre-se</Typography>
                  <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis
                    aute irure dolor in reprehenderit in voluptate velit esse
                    cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </Typography>
                  <Button
                    variant="contained"
                    className={classes.button}
                    size="large"
                    href="/signUp"
                  >
                    Cadastre-se
                  </Button>
                </CardContent>
              </Card>
            </Grid>
            <Grid xs={5} className={classes.detailsGrid} container>
              <Card>
                <CardContent className={classes.signUp}>
                  <Typography variant="h4">Cadastre sua empresa</Typography>
                  <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis
                    aute irure dolor in reprehenderit in voluptate velit esse
                    cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </Typography>
                  <Button
                    variant="contained"
                    className={classes.button}
                    size="large"
                  >
                    Cadastre sua empresa
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </div>
      </Grid>
      <Grid xs={1}></Grid>
    </Grid>
  );
}
