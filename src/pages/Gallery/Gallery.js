import { Container, CssBaseline, makeStyles, Paper } from "@material-ui/core";
import { fade } from "@material-ui/core/styles/colorManipulator";
import React from "react";
import BackgroundImage from "../../img/Training_bg.jpg";

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: fade(theme.palette.background, 0.5),
    paddingTop: "18px",
    paddingBottom: "18px",
  },
  backgroundImage: {
    backgroundSize: "cover",
    backgroundImage: `url(${BackgroundImage})`,
  },
}));

const Gallery = () => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <CssBaseline />
      <Paper className={classes.backgroundImage}>
        <Container className={classes.container} maxWidth="xl"></Container>
      </Paper>
    </React.Fragment>
  );
};

export default Gallery;
