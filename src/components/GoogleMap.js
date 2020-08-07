import { makeStyles } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
  map: {
    margin: "12px",
  },
}));

const GoogleMap = ({ locationLink, title }) => {
  const classes = useStyles();
  return (
    <iframe
      className={classes.map}
      title={title}
      src={locationLink}
      width="400"
      height="300"
      frameborder="0"
      allowfullscreen=""
      aria-hidden="false"
      tabindex="0"
    ></iframe>
  );
};

export default GoogleMap;
