import { Container, CssBaseline, makeStyles, Paper } from "@material-ui/core";
import { fade } from "@material-ui/core/styles/colorManipulator";
import React, { useEffect, useState } from "react";
import BackgroundImage from "../../img/Home_bg.jpg";
import ReactMarkDown from "react-markdown";
import source from "../../content/Home.md";

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

const Home = () => {
  const [content, setContent] = useState("");
  useEffect(() => {
    fetch(source)
      .then((response) => response.text())
      .then((text) => {
        setContent(text);
      });
  }, []);

  const classes = useStyles();
  return (
    <React.Fragment>
      <CssBaseline />
      <Paper className={classes.backgroundImage}>
        <Container className={classes.container} maxWidth="xl">
          <ReactMarkDown source={content} />
        </Container>
      </Paper>
    </React.Fragment>
  );
};

export default Home;
