import {
  Container,
  CssBaseline,
  makeStyles,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@material-ui/core";
import { fade } from "@material-ui/core/styles/colorManipulator";
import React from "react";
import GoogleMap from "../../components/GoogleMap";
import BackgroundImage from "../../img/Home_bg.jpg";

const useStyles = makeStyles((theme) => ({
  typography: {
    margin: "12px 0 12px 0",
  },
  backgroundImage: {
    flex: "1 1 auto",
    backgroundSize: "cover",
    backgroundImage: `url(${BackgroundImage})`,
  },
  container: {
    backgroundColor: fade(theme.palette.background, 0.5),
    paddingTop: "120px",
    paddingBottom: "18px",
    height: "100%",
    display: "flex",
    flexFlow: "column",
  },
  textbox: {
    maxWidth: "800px",
    alignSelf: "center",
    backgroundColor: fade(theme.palette.black, 0.7),
    color: "white",
    padding: "12px",
  },
  flexRow: {
    display: "flex",
  },
  flexColumn: {
    display: "flex",
    flexDirection: "column",
  },
  table: {
    "& td": {
      color: "white",
    },
    "& th": {
      color: "white",
    },
  },
  training: {
    marginTop: "24px",
  },
}));

const Training = () => {
  const classes = useStyles();
  const summerLocation =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1627.441345183705!2d16.28570355241367!3d48.09135559587673!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476daf121607a7bf%3A0xdf31eda3022c4795!2sDr.%20Karl%20Giannoni-Gasse%2018%2C%202340%20M%C3%B6dling!5e1!3m2!1sde!2sat!4v1596805260663!5m2!1sde!2sat";
  const winterLocation =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1627.0670673006812!2d16.275243147188743!3d48.10318099691116!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDjCsDA2JzExLjUiTiAxNsKwMTYnMzMuOSJF!5e1!3m2!1sde!2sat!4v1596804555425!5m2!1sde!2sat";

  return (
    <React.Fragment>
      <CssBaseline />
      <Paper className={classes.backgroundImage}>
        <Container className={classes.container} maxWidth="xl">
          <div className={classes.textbox}>
            <div className={classes.flexRow}>
              <div className={classes.flexColumn}>
                <Typography
                  className={classes.typography}
                  variant="h6"
                  component="h6"
                >
                  Training Sommer
                </Typography>
                <TableContainer>
                  <Table className={classes.table}>
                    <TableHead>
                      <TableRow>
                        <TableCell>Wer?</TableCell>
                        <TableCell>Wann?</TableCell>
                        <TableCell>Wo?</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      <TableRow>
                        <TableCell component="th" scope="row">
                          Winona Raiders
                        </TableCell>
                        <TableCell>10:00 - 12:00</TableCell>
                        <TableCell>
                          Dr.-Karl-Giannoni-Gasse, 2340 Mödling
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </TableContainer>
              </div>
              <GoogleMap
                locationLink={summerLocation}
                title="google-map-giannonigasse"
              />
            </div>
            <div className={classes.training}>
              <div className={classes.flexRow}>
                <div className={classes.flexColumn}>
                  <Typography
                    className={classes.typography}
                    variant="h6"
                    component="h6"
                  >
                    Training Winter
                  </Typography>
                  <TableContainer>
                    <Table className={classes.table}>
                      <TableHead>
                        <TableRow>
                          <TableCell>Wer?</TableCell>
                          <TableCell>Wann?</TableCell>
                          <TableCell>Wo?</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        <TableRow>
                          <TableCell component="th" scope="row">
                            Winona Raiders
                          </TableCell>
                          <TableCell>10:00 - 12:00</TableCell>
                          <TableCell>Lerchenhöhe, 2345 Brunn/Gebirge</TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </TableContainer>
                </div>
                <GoogleMap
                  locationLink={winterLocation}
                  title="google-maps-turnerstrasse"
                />
              </div>
            </div>
          </div>
        </Container>
      </Paper>
    </React.Fragment>
  );
};

export default Training;
