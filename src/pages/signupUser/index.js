import React, { Component, useEffect, useState } from "react";
import { Link as RouterLink, withRouter } from "react-router-dom";
import api from "../../Services/api";

import Avatar from "@material-ui/core/Avatar";
import { IconButton } from "@material-ui/core";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import HeaderHome from "../../components/headerHome";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

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
}));

export default function SignUpUSer(props) {
  const [nameSU, setName] = useState();
  const [emailSU, setEmail] = useState();
  const [passwordSU, setPassword] = useState();
  const [error, setError] = useState();
  const { history } = props;
  const handleBack = () => {
    history.goBack();
  };
  const handleSignUp = async (e) => {
    e.preventDefault();
    await api
      .post("user", {
        name: nameSU,
        email: emailSU,
        password: passwordSU,
      })
      .then((res) => {
        console.log("cadastrado com sucesso");
        localStorage.setItem(res.data._id, "id");
        history.push("/Profile");
      })
      .catch((erro) => {
        console.log(erro);
        setError("Email já existente!");
      });
  };

  const classes = useStyles();
  return (
    <div className={classes.root}>
      <HeaderHome />
      <Grid className={classes.grid} container>
        <Grid className={classes.quoteContainer} item lg={5}>
          <div className={classes.quote}>
            <div className={classes.quoteInner}>
              <Typography className={classes.quoteText} variant="h2">
                Portal de vagas
              </Typography>
            </div>
          </div>
        </Grid>
        <Grid className={classes.content} item lg={7} xs={12}>
          <div className={classes.content}>
            <div className={classes.contentHeader}>
              <IconButton onClick={handleBack}>
                <ArrowBackIcon />
              </IconButton>
            </div>
            <div className={classes.contentBody}>
              <form className={classes.form} onSubmit={handleSignUp}>
                <Typography className={classes.title} variant="h2">
                  Sign Up
                </Typography>
                <TextField
                  className={classes.textField}
                  fullWidth
                  label="Name"
                  name="Name"
                  onChange={(e) => setName(e.target.value)}
                  type="text"
                  variant="outlined"
                />
                <TextField
                  className={classes.textField}
                  fullWidth
                  label="Email address"
                  name="email"
                  onChange={(e) => setEmail(e.target.value)}
                  type="text"
                  variant="outlined"
                />

                <TextField
                  className={classes.textField}
                  fullWidth
                  label="Password"
                  name="password"
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  variant="outlined"
                />
                {error && <p className={classes.dadosIncorretos}>{error}</p>}
                <Button
                  className={classes.signInButton}
                  color="primary"
                  fullWidth
                  size="large"
                  type="submit"
                  variant="contained"
                >
                  Sign up now
                </Button>
              </form>
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
