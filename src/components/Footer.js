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
    height: "60px",
    width: "424px",
    margin: "5px 0px 0px 0px",
    [theme.breakpoints.down("xs")]: {
      height: "45px",
      width: "318px",
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
