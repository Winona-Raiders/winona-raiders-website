import {
  Container,
  CssBaseline,
  Divider,
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
    [theme.breakpoints.down("xs")]: {
      fontSize: "11px",
    },
  },
  backgroundImage: {
    flex: "1 1 auto",
    backgroundSize: "cover",
    backgroundImage: `url(${BackgroundImage})`,
  },
  container: {
    backgroundColor: fade(theme.palette.background, 0.5),
    paddingTop: "40px",
    paddingBottom: "18px",
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  textbox: {
    maxWidth: "800px",
    alignSelf: "center",
    backgroundColor: fade(theme.palette.black, 0.7),
    color: "white",
    padding: "24px",
    display: "flex",
    [theme.breakpoints.down("sm")]: {
      display: "block",
    },
  },
  tableHeader: {
    "& th": {
      fontSize: "medium",
      fontWeight: "bold",
    },
  },
  header: {
    fontSize: "x-large",
    fontWeight: "bold",
    margin: "12px 0 12px 0",
    textAlign: "center",
    alignSelf: "center",
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
  divider: {
    margin: "0 24px 0 24px",
    backgroundColor: "white",
  },
  locationMaps: {
    textAlign: "center",
    justifyContent: "space-around",
    display: "flex",
    flexDirection: "column",
  },
}));

const renderTrainings = ({
  classes,
  indexTitle,
  header,
  description,
  trainings,
}) => {
  return (
    <div className={classes.training}>
      <div className={classes.flexRow}>
        <div className={classes.flexColumn}>
          <Typography
            className={`${classes.header} ${classes.typography}`}
            variant="h6"
            component="h6"
          >
            {header}
          </Typography>
          <Typography className={classes.typography}>{description}</Typography>
          <TableContainer>
            <Table className={classes.table}>
              <TableHead className={classes.tableHeader}>
                <TableRow>
                  <TableCell>
                    <Typography className={classes.typography}>Wer?</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography className={classes.typography}>
                      Wann?
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography className={classes.typography}>Wo?</Typography>
                  </TableCell>
                  <TableCell></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {trainings.map((training, index) => {
                  const { who, when, where } = training;
                  return (
                    <TableRow key={`training-info-${indexTitle}-${index}`}>
                      <TableCell component="th" scope="row">
                        <Typography className={classes.typography}>
                          {who}
                        </Typography>
                      </TableCell>
                      <TableCell>
                        <Typography className={classes.typography}>
                          {when}
                        </Typography>
                      </TableCell>
                      <TableCell>
                        <Typography className={classes.typography}>
                          {where}
                        </Typography>
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </div>
    </div>
  );
};

const Training = () => {
  const classes = useStyles();
  const oetb =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1627.441345183705!2d16.28570355241367!3d48.09135559587673!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476daf121607a7bf%3A0xdf31eda3022c4795!2sDr.%20Karl%20Giannoni-Gasse%2018%2C%202340%20M%C3%B6dling!5e1!3m2!1sde!2sat!4v1596805260663!5m2!1sde!2sat";
  const guntramsdorf =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3256.6106053612643!2d16.315338415986712!3d48.064050279217525!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476dae433d6bb22d%3A0x8686284501384baf!2sDoktor-Karl-Renner-Stra%C3%9Fe%2011b%2C%202353%20Guntramsdorf!5e1!3m2!1sde!2sat!4v1603212855633!5m2!1sde!2sat";
  // const lerchenhoehe =
  //   "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1627.0670673006812!2d16.275243147188743!3d48.10318099691116!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDjCsDA2JzExLjUiTiAxNsKwMTYnMzMuOSJF!5e1!3m2!1sde!2sat!4v1596804555425!5m2!1sde!2sat";
  const mariaEnzersdorf =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3254.399564948476!2d16.26806261598773!3d48.09898807922032!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476daf662289ab63%3A0x85c899fd7f5fab91!2sSportgymnasium%20Maria%20Enzersdorf!5e1!3m2!1sde!2sat!4v1597079633412!5m2!1sde!2sat";
  return (
    <React.Fragment>
      <CssBaseline />
      <Paper className={classes.backgroundImage}>
        <Container className={classes.container} maxWidth="xl">
          <div className={classes.textbox}>
            <div className={classes.flexColumn}>
              {renderTrainings({
                classes,
                indexTitle: "summer-training",
                header: "Aktuelle Trainingszeiten",
                trainings: [
                  // {
                  //   who: "Winona Raiders / Privateers",
                  //   when: "Montag 19:00-20:30",
                  //   where: "Sportgymnasium , 2344 Maria Enzersdorf",
                  // },
                  {
                    who: "Winona Raiders / Privateers",
                    when: "Mittwoch 18:00-19:30",
                    where: "Doktor Karl Renner Straße 11b, 2353 Guntramsdorf",
                  },
                  {
                    who: "Winona Raiders",
                    when: "Sonntag 10:00-12:00",
                    where: "Dr.-Karl-Giannoni-Gasse, 2340 Mödling",
                  },
                ],
              })}
            </div>
            <Divider
              orientation="vertical"
              flexItem={true}
              className={classes.divider}
            />
            <div className={classes.locationMaps}>
              {/* wird erst im winter wieder angezeigt */}
              {/* <div>
                <Typography> Sportgymnasium Maria Enzersdorf </Typography>
                <GoogleMap locationLink={mariaEnzersdorf} />
              </div> */}
              <div>
                <Typography> Guntramsdorf </Typography>
                <GoogleMap locationLink={guntramsdorf} />
              </div>
              <div>
                <Typography> Dr.-Karl-Giannoni-Gasse </Typography>
                <GoogleMap locationLink={oetb} />
              </div>
              {/* <div>
                <Typography> Lerchenhöhe </Typography>
                <GoogleMap locationLink={lerchenhoehe} />
              </div> */}
            </div>
          </div>
        </Container>
      </Paper>
    </React.Fragment>
  );
};

export default Training;
