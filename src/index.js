import {
  createMuiTheme,
  makeStyles,
  ThemeProvider,
} from "@material-ui/core/styles";
import { default as React } from "react";
import ReactDOM from "react-dom";
import { Route, Switch } from "react-router";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./NavBar";
import Gallery from "./pages/Gallery/Gallery";
import Home from "./pages/Home/Home";
import Juniors from "./pages/Juniors/Juniors";
import Training from "./pages/Training/Training";

const theme = createMuiTheme({
  typography: {
    fontFamily: `cursive`,
    fontSize: 14,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
  },
  palette: {
    primary: {
      // light: will be calculated from palette.primary.main,
      main: "#000000",
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
    },
    secondary: {
      main: "#add8e6",
    },
    background: "#cfe8fc",
    black: "#000000",
    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    contrastThreshold: 3,
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: 0.2,
  },
});

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexFlow: "column",
    height: "100%",
  },
  transparentBackground: {
    backgroundColor: theme.palette.secondary.light,
    height: "100vh",
  },
}));

const Root = () => {
  const classes = useStyles(theme);

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <div className={classes.root}>
          <Navbar />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/training">
              <Training />
            </Route>
            <Route path="/juniors">
              <Juniors />
            </Route>
            <Route path="/gallery">
              <Gallery />
            </Route>
          </Switch>
        </div>
      </ThemeProvider>
    </BrowserRouter>
  );
};

ReactDOM.render(<Root />, document.getElementById("root"));
