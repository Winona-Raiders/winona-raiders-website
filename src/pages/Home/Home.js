import { makeStyles, Typography } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles({
  container: { backgroundColor: "#cfe8fc", height: "100vh" },
});

const Home = () => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Typography className={classes.container}>Home</Typography>
    </React.Fragment>
  );
};

export default Home;
