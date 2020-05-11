import { Typography, makeStyles } from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import React from "react";
import TabLink from "./Routing/TabLink";
import { useTabsWithRouter } from "./Routing/useTabWithRouter";
import strings from "./strings";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  appBar: {
    backgroundColor: theme.palette.primary.light,
  },
  headline: {
    color: theme.palette.primary.contrastText,
    textAlign: "center",
    textTransform: "uppercase",
    fontSize: "xxx-large",
  },
}));

const Navbar = () => {
  const classes = useStyles();
  const tabValue = useTabsWithRouter(["/juniors", "/training", "/"], "/");

  return (
    <AppBar className={classes.appBar} position="sticky">
      <Typography className={classes.headline}>{strings.headline}</Typography>
      <Tabs variant="fullWidth" value={tabValue} aria-label="nav-tabs">
        <TabLink label="Home" value="/" />
        <TabLink label="Training" value="/training" />
        <TabLink label="Juniors" value="/juniors" />
      </Tabs>
    </AppBar>
  );
};

export default Navbar;
