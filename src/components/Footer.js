import { makeStyles } from "@material-ui/core";
import { fade } from "@material-ui/core/styles/colorManipulator";
import React from "react";

import * as townshipSupportBanner from "../img/support_bar_township_moedling.png";

const useStyles = makeStyles((theme) => ({
  footer: {
    fontWeight: "bold",
    backgroundColor: fade(theme.palette.black, 0.815),
    color: "white",
  },
  center: {
    display: "flex",
    justifyContent: "center",
    textAlign: "center",
  },
  supportBanner: {
    height: "100px",
    width: "375px",
    margin: "-15px 0px 0px 0px",
    [theme.breakpoints.down("xs")]: {
      margin: "0px 0px 0px 0px",
      height: "60px",
      width: "225px",
    },
  },
}));

const Footer = () => {
  const classes = useStyles();
  return (
    <div className={classes.footer}>
      <div className={classes.center}>
        <div>
          <img
            alt="support banner township moedling"
            src={townshipSupportBanner}
            className={classes.supportBanner}
          ></img>
        </div>
      </div>
    </div>
  );
};

export default Footer;
