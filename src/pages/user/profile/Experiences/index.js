import React from "react";
import {
  CardContent,
  Avatar,
  Typography,
  Grid,
  Divider,
} from "@material-ui/core";
import { useState, useEffect } from "react";
import axios from "axios";
import { Stack } from "@mui/material";

function Experiences() {
  const [data, setDatas] = useState([]);

  useEffect(() => {
    async function loadDatas() {
      const response = await axios.get(
        "https://raw.githubusercontent.com/profsergiocosta/data/main/overview.json"
      );
      setDatas(response.data);
    }
    loadDatas();
  }, []);

  return (
    <CardContent>
      <Typography variant="h5">Experiências</Typography>
      <Divider />
      {data.map((info) => {
        return (
          <div>
            {info.experiences.map((item) => {
              return (
                <div>
                  <Stack direction="column">
                    <Typography variant="h6">info</Typography>
                  </Stack>
                </div>
              );
            })}
          </div>
        );
      })}
    </CardContent>
  );
}
export default Experiences;
