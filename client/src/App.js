import { Container, AppBar, Typography, Grow, Grid } from "@material-ui/core";
import beach from "./images/beach.png";
import Tutors from "./components/Tutors/Tutors.js";
import Form from "./components/Form/Form.js";
import useStyles from "./styles.js";

function App() {
  const classes = useStyles();
  return (
    <Container maxWidth="lg">
      <AppBar className={classes.appBar} position="static" color="inherit">
        <Typography className={classes.heading} variant="h2" align="center">
          iTutor
        </Typography>
        <img className={classes.image} src={beach} alt="tutors" height="60" />
      </AppBar>
      <Grow in>
        <Container>
          <Grid
            container
            justify="space-between"
            alignItems="stretch"
            spacing={3}
          >
            <Grid item xs={12} sm={7}>
              <Tutors />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form />
            </Grid>
            <Grid item xs={12} sm={4}></Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
}

export default App;
