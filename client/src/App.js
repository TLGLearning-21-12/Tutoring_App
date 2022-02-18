import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import { Container, AppBar, Typography, Grow, Grid } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { getTutors } from "./actions/tutors.js";
import beach from "./images/beach.png";
import Tutors from "./components/Tutors/Tutors.js";
import Form from "./components/Form/Form.js";
import useStyles from "./styles.js";
import Home from "./components/HomePage/Home.js";

function App() {
  const [currentId, setCurrentId] = useState(null);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTutors());
  }, [currentId, dispatch]);

  return (
    <div>
      <Router>
        <Routes>
          <Route path={"/"} element={<Home />} />
        </Routes>
      </Router>
      <Router>
        <Container maxWidth="lg">
          <Grow in>
            <Container>
              <Grid container spacing={4} justify="center">
                <Grid item xs={4} sm={7}>
                  <Tutors setCurrentId={setCurrentId} />
                </Grid>
                <Grid item xs={12} sm={4}>
                  <Form currentId={currentId} setCurrentId={setCurrentId} />
                </Grid>
              </Grid>
            </Container>
          </Grow>
        </Container>
      </Router>
    </div>
  );
}

export default App;
