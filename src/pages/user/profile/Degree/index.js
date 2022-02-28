import React from "react";
import {
  CardContent,
  Avatar,
  Grid,
  CardActionArea,
  Divider,
  Typography,
  Card,
  Button,
  Dialog,
  DialogTitle,
  IconButton,
} from "@material-ui/core";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { makeStyles, createStyles } from "@material-ui/styles";
import { useState, useEffect, useRef } from "react";
import axios from "axios";
import { Stack } from "@mui/material";

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      marginTop: theme.spacing(1),
    },
    cardActivities: {},
    cardFeed: {
      marginLeft: theme.spacing(10),
    },
    grid3: {
      marginLeft: theme.spacing(2),
      marginTop: theme.spacing(1),
    },
    TextField: {
      marginTop: theme.spacing(2),

      marginLeft: theme.spacing(3),
      marginBottom: theme.spacing(1),
      width: 450,
    },
    button: {
      marginLeft: theme.spacing(3),
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(2),
      fontSize: 12,
    },

    form: {
      padding: theme.spacing(2),
    },
    item: {
      textAlign: "center",
      fontSize: 20,
    },
    divDialog: {
      alignItems: "center",
      direction: "row",
      justifyContent: "center",
      alignItems: "center",
    },
    containerActivities: {
      width: 550,
      height: 550,
      position: "absolute",
    },
    divActivities: {
      width: 550,
      height: 550,
    },
    divAct: {
      marginLeft: theme.spacing(2),
      marginRigth: theme.spacing(2),
    },
    divCard: {
      margin: theme.spacing(1),
    },
    hCardDescriptionProject: {
      width: 105,
    },
    cardTitle: {
      color: "#808080",
    },
    nameFinishedSubjects: {
      marginBottom: theme.spacing(-2),
      fontWeight: 500,
      fontSize: 18,
    },
    nameProject: {
      fontWeight: 500,
      fontSize: 18,
    },
  })
);
function Degree() {
  const [data, setDatas] = useState([]);
  const [openDegree, setOpenDegree] = useState(false);
  const [openCurrentCourse, setOpenCurrentCourse] = useState(false);
  const [scroll, setScroll] = useState("body");
  const descriptionElementRef = useRef(null);

  const handleCloseDegree = () => {
    setOpenDegree(false);
  };

  const handleCloseCurrentCourse = () => {
    setOpenCurrentCourse(false);
  };

  useEffect(() => {
    async function loadDatas() {
      const response = await axios.get(
        "https://raw.githubusercontent.com/profsergiocosta/data/main/overview.json"
      );
      setDatas(response.data);
    }
    loadDatas();
  }, []);

  const classes = useStyles();
  return (
    <div>
      <CardContent className="cardContent">
        <Typography variant="h5">Formação</Typography>
        <Divider />
        {data.map((info) => {
          return (
            <div>
              {info.currentCourse.map((item) => {
                return (
                  <div className="final">
                    <CardActionArea
                      onClick={() => {
                        setOpenCurrentCourse(true);
                      }}
                    >
                      <Stack direction="column">
                        <Typography variant="h6">info</Typography>
                      </Stack>
                    </CardActionArea>
                  </div>
                );
              })}
            </div>
          );
        })}
      </CardContent>
    </div>
  );
}
export default Degree;
