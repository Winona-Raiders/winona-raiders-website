import {
  Container,
  CssBaseline,
  Link,
  List,
  ListItem,
  makeStyles,
  Paper,
  Typography,
} from "@material-ui/core";
import { fade } from "@material-ui/core/styles/colorManipulator";
import React from "react";
import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import AwesomeSliderStyles from "react-awesome-slider/src/styles";
import BackgroundImage from "../../img/Home_bg.jpg";

const AutoplaySlider = withAutoplay(AwesomeSlider);
const useStyles = makeStyles((theme) => ({
  typography: {
    margin: "12px 0 12px 0",
    [theme.breakpoints.down("xs")]: {
      fontSize: "11px",
    },
  },
  backgroundImage: {
    flex: "1 1 auto",
    backgroundSize: "cover",
    backgroundImage: `url(${BackgroundImage})`,
  },
  container: {
    backgroundColor: fade(theme.palette.background, 0.5),
    paddingTop: "40px",
    paddingBottom: "18px",
    height: "100%",
    display: "flex",
    flexFlow: "column",
  },
  gallery: {
    maxHeight: "350px",
    maxWidth: "800px",
    alignSelf: "center",
    marginBottom: "64px",
  },
  welcome: {
    maxWidth: "800px",
    alignSelf: "center",
    backgroundColor: fade(theme.palette.black, 0.7),
    color: "white",
    padding: "24px",
  },
}));

const importAll = (r) => {
  return r.keys().map(r);
};

const images = importAll(
  require.context("../../img/juniors-gallery", false, /\.(png|jpe?g|svg)$/)
);

const getGalleryImages = (images) => {
  let galleryImages = [];
  images.forEach((image, index) => {
    galleryImages.push(<div key={`gallery-image-${index}`} data-src={image} />);
  });
  return galleryImages;
};

const Juniors = () => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <Paper className={classes.backgroundImage}>
        <Container className={classes.container} maxWidth="xl">
          <AutoplaySlider
            cssModule={AwesomeSliderStyles}
            play={true}
            cancelOnInteraction={true}
            interval={4000}
            className={classes.gallery}
            organicArrows={false}
          >
            {getGalleryImages(images)}
          </AutoplaySlider>
          <div className={classes.welcome}>
            <Typography
              className={classes.typography}
              variant="h6"
              component="h6"
            >
              Privateers
            </Typography>
            <Typography className={classes.typography}>
              Die Privateers trainieren seit 2017 in Mödling und hat sich
              seitdem zweimal den Titel Vize-Staatsmeister verdient. In Mödling
              hat das Jugend Team die Möglichkeit von Coaches zu lernen, die
              selbst einmal in diversen Nationalteams gespielt haben.
            </Typography>
            <Typography className={classes.typography}>
              Die Privateers laden hiermit alle Junginteressenten ein mit uns
              mit zu trainieren. Im Training wirst du die Grundlagen des Spiels
              und der Würfe kennenlernen, außerdem wirst du deine ersten
              Erfahrungen in einem richtigen Ultimate Frisbee Spiel sammeln
              können. Das solltest du nicht vergessen bevor du zu uns ins
              Training kommst:
              <List>
                <ListItem>1. Trinkflasche</ListItem>
                <ListItem>2. Stoppelschuhe"</ListItem>
                <ListItem>3. Weißes und schwarzes Sport-Shirt"</ListItem>
                <ListItem>
                  4. Email an{" "}
                  <Link
                    color="secondary"
                    style={{ display: "contents" }}
                    href={"mailto:info@winonaraiders.org"}
                  >
                    info@winonaraiders.org
                  </Link>
                </ListItem>
              </List>
              Auf geht's - Pack alles zusammen und schreib uns wir sehen uns im
              Training!
            </Typography>
          </div>
        </Container>
      </Paper>
    </React.Fragment>
  );
};

export default Juniors;
