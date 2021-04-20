import {
  Container,
  CssBaseline,
  IconButton,
  Link,
  makeStyles,
  Paper,
  Typography,
} from "@material-ui/core";
import { fade } from "@material-ui/core/styles/colorManipulator";
import React from "react";
import BackgroundImage from "../../img/Home_bg.jpg";
import * as facebookLogo from "../../img/icons/facebook_logo.png";
// import * as instagramLogo from "../../img/icons/instagram_logo.png";

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: fade(theme.palette.background, 0.5),
    paddingTop: "40px",
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
  textbox: {
    maxWidth: "800px",
    alignSelf: "center",
    backgroundColor: fade(theme.palette.black, 0.7),
    color: "white",
    padding: "24px",
    width: "-webkit-fill-available",
  },
  impressum: {
    display: "flex",
    minWidth: "250px",
  },
  typography: {
    margin: "12px 0 12px 0",
    [theme.breakpoints.down("xs")]: {
      fontSize: "11px",
    },
  },
  socialMedia: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    marginLeft: "24px",
  },
  logo: {
    height: "48px",
    width: "48px",
  },
  minMargin: {
    minHeight: "24px",
  },
}));

const Impressum = () => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <CssBaseline />
      <Paper className={classes.backgroundImage}>
        <Container className={classes.container} maxWidth="xl">
          <div className={classes.minMargin} />
          <div className={classes.textbox}>
            <div className={classes.impressum}>
              <Typography className={classes.typography}>
                Mödlinger Frisbee Sport Verein <br />
                Josefgasse 17
                <br />
                2340 Mödling
                <br />
                ZVR-Zahl: 664355276
                <br />
                Email:{" "}
                <Link
                  color="secondary"
                  style={{ display: "contents" }}
                  href={"mailto:info@winonaraiders.org"}
                >
                  info@winonaraiders.org
                </Link>
                <br />
                <br />
                Kontodaten:
                <br />
                Marion Schneilinger
                <br />
                AT83 5300 0035 5502 0510
              </Typography>
              <div className={classes.socialMedia}>
                <IconButton
                  color="primary"
                  aria-label="facebook link"
                  component="span"
                  className={classes.logo}
                  onClick={() =>
                    (window.location.href =
                      "http://www.facebook.com/WinonaRaidersUltimate")
                  }
                >
                  <img
                    alt="facebook link"
                    src={facebookLogo}
                    className={classes.logo}
                  ></img>
                </IconButton>
                {/* <IconButton
                  color="primary"
                  aria-label="instagram link"
                  component="span"
                  className={classes.logo}
                >
                  <img
                    alt="instagram link"
                    src={instagramLogo}
                    className={classes.logo}
                  ></img>
                </IconButton> */}
              </div>
            </div>
          </div>
        </Container>
      </Paper>
    </React.Fragment>
  );
};

export default Impressum;
