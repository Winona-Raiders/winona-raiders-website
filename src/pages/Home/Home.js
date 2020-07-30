import {
  Container,
  CssBaseline,
  Link,
  makeStyles,
  Paper,
  Typography,
} from "@material-ui/core";
import { fade } from "@material-ui/core/styles/colorManipulator";
import React from "react";
import AwesomeSlider from "react-awesome-slider";
import AwesomeSliderStyles from "react-awesome-slider/src/styles";
import Footer from "../../components/Footer";
import BackgroundImage from "../../img/Home_bg.jpg";

const useStyles = makeStyles((theme) => ({
  backgroundImage: {
    flex: "1 1 auto",
    backgroundSize: "cover",
    backgroundImage: `url(${BackgroundImage})`,
  },
  container: {
    backgroundColor: fade(theme.palette.background, 0.5),
    paddingTop: "18px",
    paddingBottom: "18px",
    height: "100%",
    display: "flex",
    flexFlow: "column",
  },
  gallery: {
    height: "30%",
    width: "60%",
    alignSelf: "center",
    marginBottom: "64px",
  },
  teamfoto: {
    width: "50%",
  },
  welcome: {
    width: "70%",
    alignSelf: "center",
    backgroundColor: fade(theme.palette.black, 0.5),
    color: "white",
    padding: "12px",
  },
}));

const importAll = (r) => {
  return r.keys().map(r);
};

const images = importAll(
  require.context("../../img/gallery", false, /\.(png|jpe?g|svg)$/)
);

const getGalleryImages = (images) => {
  let galleryImages = [];
  images.forEach((image, index) => {
    galleryImages.push(<div key={`gallery-image-${index}`} data-src={image} />);
  });
  return galleryImages;
};

const Home = () => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <Paper className={classes.backgroundImage}>
        <Container className={classes.container} maxWidth="xl">
          <AwesomeSlider
            cssModule={AwesomeSliderStyles}
            className={classes.gallery}
          >
            {getGalleryImages(images)}
          </AwesomeSlider>
          <Typography className={classes.welcome}>
            Wir sind ein 1995 gegründetes Ultimate Frisbee Team aus Mödling.
            Unsere gut 40 aktiven Mitglieder vereint die Begeisterung am Sport
            mit der Frisbeescheibe. <br />
            Der Verein umfasst folgende Teams:
            <h4>- Winona Raiders</h4>
            Die Kampfmannschaft des Vereins trainiert zweimal pro Woche und
            bereitet sich so nicht nur auf zahlreiche Turniere sondern auch auf
            das Highlight der Saison, die Österreichischen Beach
            Staatsmeisterschaften in Bibione, vor.
            <h4>- Privateers</h4>
            Mädchen und Burschen im Alter von 10 bis 15 spielen in unserem Team
            "Privateers". Die Jugendmannschaft des Vereins trainiert einmal pro
            Woche und nimmt
            <br />
            <br />
            Alle, die einen fairen Teamsport ausüben möchten, sind bei uns
            herzlich willkommen! Du suchst ein Frisbee-Team in Mödling? Melde
            dich bei uns (
            <Link
              color="secondary"
              style={{ display: "contents" }}
              href={"mailto:info@winonaraiders.org"}
            >
              info@winonaraiders.org
            </Link>
            ) und schau vorbei, wir freuen uns auf dich !
          </Typography>
          <Footer />
        </Container>
      </Paper>
    </React.Fragment>
  );
};

export default Home;
