import { IconButton, Link, makeStyles, Typography } from "@material-ui/core";
import { fade } from "@material-ui/core/styles/colorManipulator";
import React from "react";
import * as facebookLogo from "../img/icons/facebook_logo.png";
import * as instagramLogo from "../img/icons/instagram_logo.png";

const useStyles = makeStyles((theme) => ({
  footer: {
    padding: "12px",
    paddingRight: "24px",
    fontWeight: "bold",
    backgroundColor: fade(theme.palette.black, 0.7),
    color: "white",
  },
  impressum: {
    display: "flex",
    marginRight: "24px",
    justifyContent: "center",
    textAlign: "center",
  },
  socialMedia: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
  },
  logo: {
    height: "48px",
    width: "48px",
  },
  minMargin: {
    minHeight: "24px",
  },
}));

const Footer = () => {
  const classes = useStyles();
  return (
    <>
      <div className={classes.minMargin} />
      <div className={classes.footer}>
        <div className={classes.impressum}>
          <Typography className={classes.impressum}>
            Mödlinger Frisbee Sport Verein <br />
            Josefgasse 17
            <br />
            2340 Mödling
            <br />
            ZVR-Zahl: 66455276
            <br />
            Email:{" "}
            <Link
              color="secondary"
              style={{ display: "contents" }}
              href={"mailto:info@winonaraiders.org"}
            >
              info@winonaraiders.org
            </Link>
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
            <IconButton
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
            </IconButton>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
