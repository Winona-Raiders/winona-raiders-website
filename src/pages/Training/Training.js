import { Container, CssBaseline, makeStyles, Paper } from "@material-ui/core";
import { fade } from "@material-ui/core/styles/colorManipulator";
import React from "react";
import BackgroundImage from "../../img/Home_bg.jpg";

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: fade(theme.palette.background, 0.5),
    paddingTop: "120px",
    paddingBottom: "18px",
    height: "100%",
    display: "flex",
    flexFlow: "column",
  },
  backgroundImage: {
    flex: "1 1 auto",
    backgroundSize: "cover",
    backgroundImage: `url(${BackgroundImage})`,
  },
}));

const Training = () => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <CssBaseline />
      <Paper className={classes.backgroundImage}>
        <Container className={classes.container} maxWidth="xl">
          <div></div>
        </Container>
      </Paper>
    </React.Fragment>
  );
};

export default Training;
