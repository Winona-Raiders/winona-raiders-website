import { Container, CssBaseline, makeStyles, Paper } from "@material-ui/core";
import { fade } from "@material-ui/core/styles/colorManipulator";
import React from "react";
import Footer from "../../components/Footer";
import Teamfoto from "../../img/Bibione_teamfoto.jpg";
import BackgroundImage from "../../img/Home_bg.jpg";

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: fade(theme.palette.background, 0.5),
    paddingTop: "18px",
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
  teamfoto: {
    width: "50%",
  },
}));

const Gallery = () => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <CssBaseline />
      <Paper className={classes.backgroundImage}>
        <Container className={classes.container} maxWidth="xl">
          <div>
            {/* <img
              className={classes.teamfoto}
              src={Teamfoto}
              alt="Teamfoto Bibione"
            /> */}
          </div>
          <Footer />
        </Container>
      </Paper>
    </React.Fragment>
  );
};

export default Gallery;
