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
export default function Companies() {
  const classes = useStyles();
  const empresas = [
    {
      id: 1,
      picture:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/480px-Unofficial_JavaScript_logo_2.svg.png",
      name: "Tech SA",
      ramo: "engenharia",
      quantidadeVagas: 5,
    },
    {
      id: 2,
      picture:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/480px-Unofficial_JavaScript_logo_2.svg.png",
      name: "Tech SA",
      ramo: "engenharia",
      quantidadeVagas: 5,
    },
    {
      id: 3,
      picture:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/480px-Unofficial_JavaScript_logo_2.svg.png",
      name: "Tech SA",
      ramo: "engenharia",
      quantidadeVagas: 5,
    },
  ];

  return (
    <div>
      <Grid container lg={12} alignItems="center">
        {empresas.map((item) => {
          return (
            <>
              <Grid lg={3}></Grid>
              <Grid lg={6}>
                <Card className={classes.card} key={item.id}>
                  <CardActionArea>
                    <Grid container>
                      <Grid lg={2}>
                        <Stack
                          direction="column"
                          justifyContent="center"
                          alignItems="center"
                        >
                          <Avatar
                            className={classes.avatar}
                            src={item.picture}
                          />
                        </Stack>
                      </Grid>
                      <Stack className={classes.infos} spacing={1}>
                        <Typography variant="h6">{item.name}</Typography>
                        <Typography>{item.ramo}</Typography>
                        <Typography>
                          {item.quantidadeVagas} vagas disponíveis
                        </Typography>
                      </Stack>
                    </Grid>
                  </CardActionArea>
                </Card>
              </Grid>
              <Grid lg={3}></Grid>
            </>
          );
        })}
      </Grid>
    </div>
  );
}

//sm={{ height: "100%", width: "100%" }}
