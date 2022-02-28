import React, { useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import {
  Button,
  Link,
  Typography,
  TextField,
  makeStyles,
  Grid,
  Dialog,
  DialogTitle,
} from "@material-ui/core";

import DeleteIcon from "@material-ui/icons/Delete";
import { Stack } from "@mui/material";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.default,
    height: "100%",
  },
  dadosIncorretos: {
    color: theme.palette.error.main,
    fontSize: 16,
  },
  grid: {
    height: "100%",
  },
  quoteContainer: {
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  },
  quote: {
    backgroundColor: theme.palette.neutral,
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundImage: "url(/images/auth.jpg)",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  },
  quoteInner: {
    textAlign: "center",
    flexBasis: "600px",
  },
  quoteText: {
    color: theme.palette.white,
    fontWeight: 300,
  },
  name: {
    marginTop: theme.spacing(3),
    color: theme.palette.white,
  },
  bio: {
    color: theme.palette.white,
  },
  contentContainer: {},
  content: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  contentHeader: {
    display: "flex",
    alignItems: "center",
    paddingTop: theme.spacing(5),
    paddingBototm: theme.spacing(2),
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
  },
  logoImage: {
    marginLeft: theme.spacing(4),
  },
  contentBody: {
    flexGrow: 1,
    display: "flex",
    alignItems: "center",
    [theme.breakpoints.down("md")]: {
      justifyContent: "center",
    },
  },
  form: {
    paddingLeft: 100,
    paddingRight: 100,
    paddingBottom: 125,
    flexBasis: 700,
    [theme.breakpoints.down("sm")]: {
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2),
    },
  },
  title: {
    marginTop: theme.spacing(3),
  },
  socialButtons: {
    marginTop: theme.spacing(3),
  },
  socialIcon: {
    marginRight: theme.spacing(1),
  },
  sugestion: {
    marginTop: theme.spacing(2),
  },
  textField: {
    marginTop: theme.spacing(2),
  },
  signInButton: {
    margin: theme.spacing(2, 0),
  },
  deleteButton: {
    margin: theme.spacing(1, 20),
  },
  buttonDialog: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
  },
}));

const userInfos = [
  {
    picture:
      "https://img.freepik.com/vetores-gratis/astronauta-bonito-com-desenhos-animados-da-paz-da-mao-conceito-de-icone-de-tecnologia-espacial-isolado-estilo-flat-cartoon_138676-2184.jpg?size=338&ext=jpg",
    name: "daniel",
    profession: "engenheiro",
    email: "daniel@gmail.com",
  },
];

export default function SettingsUser() {
  const [picture, setPicture] = useState();
  const [name, setName] = useState();
  const [profession, setProfession] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [openDegree, setOpenDegree] = useState(false);
  const [scroll, setScroll] = useState("body");
  const classes = useStyles();
  const handleCloseDegree = () => {
    setOpenDegree(false);
  };

  return (
    <Grid container>
      {userInfos.map((item) => {
        return (
          <>
            <Grid lg={3}></Grid>
            <Grid lg={8} item className={classes.contentBody}>
              <form className={classes.form}>
                <Typography className={classes.title} variant="h2">
                  Editar Perfil
                </Typography>
                <TextField
                  className={classes.textField}
                  fullWidth
                  label="URL Picture"
                  name="Picture"
                  onChange={(e) => setPicture(e.target.value)}
                  type="text"
                  variant="outlined"
                  defaultValue={`${item.picture}`}
                />
                <TextField
                  className={classes.textField}
                  fullWidth
                  label="Name"
                  name="Name"
                  onChange={(e) => setName(e.target.value)}
                  type="text"
                  variant="outlined"
                  defaultValue={`${item.name}`}
                />
                <TextField
                  className={classes.textField}
                  fullWidth
                  label="Profession"
                  name="Profession"
                  onChange={(e) => setProfession(e.target.value)}
                  type="text"
                  variant="outlined"
                  defaultValue={`${item.profession}`}
                />
                <TextField
                  className={classes.textField}
                  fullWidth
                  label="Email address"
                  name="email"
                  onChange={(e) => setEmail(e.target.value)}
                  type="text"
                  variant="outlined"
                  defaultValue={`${item.email}`}
                />

                <Button
                  className={classes.signInButton}
                  color="primary"
                  fullWidth
                  size="large"
                  type="submit"
                  variant="contained"
                >
                  Salvar alterações
                </Button>
                <Button
                  className={classes.deleteButton}
                  color="primary"
                  size="medium"
                  variant="contained"
                  onClick={() => {
                    setOpenDegree(true);
                  }}
                >
                  <DeleteIcon />
                  Excluir Conta
                </Button>
              </form>
              <div>
                <Dialog
                  open={openDegree}
                  onClose={handleCloseDegree}
                  aria-labelledby="scroll-dialog-title"
                  aria-describedby="scroll-dialog-description"
                >
                  <DialogTitle id="scroll-dialog-title">
                    Certeza que deseja excluir sua conta permanentemente?
                  </DialogTitle>
                  <Stack
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                    spacing={1}
                  >
                    <Button variant="contained">sim</Button>
                    <Button variant="contained">Cancelar</Button>
                  </Stack>
                </Dialog>
              </div>
            </Grid>
          </>
        );
      })}
    </Grid>
  );
}

//{error && <p className={classes.dadosIncorretos}>{error}</p>}
// onSubmit={handleSignUp}
