import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  container: { backgroundColor: "#cfe8fc", height: "100vh" }
});

const Training = props => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <CssBaseline />
      <Container className={classes.container} maxWidth="xl">
        <Typography>Training</Typography>
      </Container>
    </React.Fragment>
  );
};

export default Training;
