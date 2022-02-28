import React, { useState, useEffect } from "react";
import {
  Box,
  Button,
  IconButton,
  Card,
  Grid,
  makeStyles,
  Typography,
  Avatar,
} from "@material-ui/core";
import About from "./About";
import Degree from "./Degree";
import Experiences from "./Experiences";
import Skills from "./Skills";
import EditIcon from "@material-ui/icons/Edit";
import { Stack } from "@mui/material";
import { getUserData } from "../../../Services/authService";
//import Header from "../../Components/Header";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#F0F0F0",
  },
  firstGrid: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(2),
  },

  avatar: {
    margin: theme.spacing(1, "auto"),
    height: 110,
    width: 110,
    aspectRatio: 1,
  },
  card: {
    marginTop: theme.spacing(3),
  },
  editButton: {
    margin: theme.spacing("auto", "auto"),
  },
}));

export default function Profile() {
  const classes = useStyles();
  const [data, setDatas] = useState({
    name: "",
    profession: "",
    picture: "",
  });

  useEffect(() => {
    async function loadDatas() {
      try {
        const dados = await getUserData();
        setDatas({
          about: dados.about,
        });
      } catch {
        console.log("erro");
      }
    }
    loadDatas();
    console.log(data);
  }, []);

  return (
    <div className={classes.root}>
      <Grid container>
        <Grid xs={2}></Grid>
        <Grid xs={8} className={classes.firstGrid}>
          <Card>
            {[data].map((item) => {
              return (
                <Grid container>
                  <Grid xs={4}></Grid>
                  <Grid xs={4}>
                    <Stack
                      container
                      direction="column"
                      justifyContent="space-between"
                      alignItems="center"
                      spacing={1}
                    >
                      <Avatar className={classes.avatar}>{item.name[0]}</Avatar>
                      <Typography variant="h5">{item.name}</Typography>
                      <Typography variant="h6">
                        {item.profession ? item.profession : null}
                      </Typography>
                    </Stack>
                  </Grid>
                  <Stack
                    xs={4}
                    direction="column"
                    justifyContent="center"
                    alignItems="center"
                  >
                    <IconButton
                      aria-label="settings"
                      size="large"
                      href="/Profile/settings"
                    >
                      <EditIcon className={classes.editButton} />
                    </IconButton>
                  </Stack>
                </Grid>
              );
            })}
          </Card>
          <Grid container>
            <Grid xs={2} />
            <Grid
              xs={8}
              container
              direction="column"
              justifyContent="space-around"
            >
              <Card className={classes.card}>
                <About />
              </Card>
              <Card className={classes.card}>
                <Degree />
              </Card>
              <Card className={classes.card}>
                <Experiences />
              </Card>
              <Card className={classes.card}>
                <Skills />
              </Card>
            </Grid>
            <Grid xs={2} />
          </Grid>
        </Grid>
        <Grid xs={2}></Grid>
      </Grid>
    </div>
  );
}
const userInfos = [
  {
    picture:
      "https://img.freepik.com/vetores-gratis/astronauta-bonito-com-desenhos-animados-da-paz-da-mao-conceito-de-icone-de-tecnologia-espacial-isolado-estilo-flat-cartoon_138676-2184.jpg?size=338&ext=jpg",
    name: "daniel",
    profession: "engenheiro",
    email: "daniel@gmail.com",
  },
];
