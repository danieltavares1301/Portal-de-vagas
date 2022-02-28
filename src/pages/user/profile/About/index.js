import React from "react";
import { CardContent, Divider, Typography } from "@material-ui/core";

import { useState, useEffect } from "react";
import axios from "axios";
import { getUserData } from "../../../../Services/authService";
import api from "../../../../Services/api";
import { Stack } from "@mui/material";

function About() {
  const [data, setDatas] = useState({
    about: "",
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
    <>
      {[data].map((info) => {
        return (
          <CardContent>
            <Typography variant="h5">Sobre</Typography>
            <Divider />
            <Stack direction="column">
              <Typography variant="h6"></Typography>
            </Stack>
          </CardContent>
        );
      })}
    </>
  );
}

export default About;
