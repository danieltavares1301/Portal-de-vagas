import React from "react";
import { CardContent, Typography, Divider } from "@material-ui/core";
import { useState, useEffect } from "react";
import axios from "axios";
import { Stack } from "@mui/material";

function Skills() {
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
      <Typography variant="h5">Habilidades e competências</Typography>
      <Divider />
      {data.map((info) => {
        return (
          <div>
            {info.skills.map((item) => {
              return (
                <div key={item.idSkill}>
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
export default Skills;
