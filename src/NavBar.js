import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import React from "react";
import TabLink from "./Routing/TabLink";
import { useTabsWithRouter } from "./Routing/useTabWithRouter";

const Navbar = () => {
  const tabValue = useTabsWithRouter(["/juniors", "/training", "/"], "/");

  return (
    <AppBar position="static">
      <Tabs variant="fullWidth" value={tabValue} aria-label="nav-tabs">
        <TabLink label="Home" value="/" />
        <TabLink label="Training" value="/training" />
        <TabLink label="Juniors" value="/juniors" />
      </Tabs>
    </AppBar>
  );
};

export default Navbar;
