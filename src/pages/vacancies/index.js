import React from "react";
import {
  makeStyles,
  Card,
  CardActionArea,
  Grid,
  Avatar,
  Typography,
} from "@material-ui/core";
import { Stack } from "@mui/material";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#F0F0F0",
  },
  avatar: {
    marginTop: theme.spacing(2),
    height: 70,
    width: 70,
  },
  infos: {
    marginLeft: theme.spacing(2),
    marginTop: theme.spacing(2),
  },
  card: {
    marginTop: theme.spacing(3),
  },
}));
export default function Vacancies() {
  const classes = useStyles();
  return (
    <div>
      <Grid container lg={12} alignItems="center">
        <Grid lg={3}></Grid>
        <Grid lg={6}>
          <Card className={classes.card}>
            <CardActionArea>
              <Grid container>
                <Grid lg={2}>
                  <Stack
                    direction="column"
                    justifyContent="center"
                    alignItems="center"
                  >
                    <Avatar className={classes.avatar}></Avatar>
                  </Stack>
                </Grid>
                <Stack className={classes.infos} spacing={1}>
                  <Typography>Nome da empresa</Typography>
                  <Typography>Nome da vaga</Typography>
                  <Typography>Local da vaga</Typography>
                </Stack>
              </Grid>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid lg={3}></Grid>
      </Grid>
    </div>
  );
}

//sm={{ height: "100%", width: "100%" }}
