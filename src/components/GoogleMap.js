import { makeStyles } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
  map: {
    margin: "12px",
  },
}));

const GoogleMap = ({ locationLink, title = "google-map" }) => {
  const classes = useStyles();
  return (
    <iframe
      className={classes.map}
      title={title}
      src={locationLink}
      width="200"
      height="150"
      frameBorder="0"
      allowFullScreen=""
      aria-hidden="false"
      tabIndex="0"
    ></iframe>
  );
};

export default GoogleMap;
