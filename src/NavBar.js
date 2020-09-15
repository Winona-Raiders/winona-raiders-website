import { IconButton, makeStyles, Typography } from "@material-ui/core";
import Tabs from "@material-ui/core/Tabs";
import React from "react";
import * as facebookLogo from "./img/icons/facebook_logo.png";
import * as instagramLogo from "./img/icons/instagram_logo.png";
import TabLink from "./Routing/TabLink";
import { useTabsWithRouter } from "./Routing/useTabWithRouter";
import strings from "./strings";

const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: theme.palette.primary.light,
    color: "white",
  },
  headline: {
    color: theme.palette.primary.contrastText,
    textAlign: "center",
    textTransform: "uppercase",
    fontSize: "xx-large",
  },
  tabs: {
    "& a": {
      [theme.breakpoints.down("xs")]: {
        fontSize: "small",
      },
    },
  },
  socialMedia: {
    display: "flex",
    alignItems: "center",
  },
  logo: {
    margin: "0 7px 0 7px",
    height: "40px",
    width: "40px",
  },
  headlineContainer: {
    display: "flex",
    justifyContent: "center",
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column",
      alignItems: "center",
    },
  },
}));

const Navbar = () => {
  const classes = useStyles();
  const tabValue = useTabsWithRouter(
    ["/juniors", "/training", "/impressum"],
    "/"
  );

  return (
    <div className={classes.appBar}>
      <div className={classes.headlineContainer}>
        <Typography className={classes.headline}>{strings.headline}</Typography>
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
      <Tabs
        className={classes.tabs}
        variant="fullWidth"
        value={tabValue}
        aria-label="nav-tabs"
      >
        <TabLink label="Home" value="/" />
        <TabLink label="Training" value="/training" />
        <TabLink label="Juniors" value="/juniors" />
        <TabLink label="Impressum" value="/impressum" />
      </Tabs>
    </div>
  );
};

export default Navbar;
