import React, { useState } from "react";
import useStyles from "./styles.js";

import { TextField, Button, Typography, Paper } from "@material-ui/core";
import FileBase from "react-file-base64";

const Form = () => {
  const classes = useStyles();
  const clear = () => {};
  const [frmData, setFrmData] = useState({
    title: "",
    name: "",
    subject: "",
    yearsOfExp: 0,
    selectedFile: "",
    endorsementCount: 0,
  });

  const handleSubmit = (evt) => {
    evt.preventDefault();
    console.log("Test....");
  };

  return (
    <Paper className={classes.paper}>
      <form
        autoComplete="off"
        noValidate={`${classes.root} ${classes.form} `}
        onSubmit={handleSubmit}
      >
        <Typography variant="h6">Tutor sign up</Typography>
        <TextField
          name="title"
          variant="outlined"
          label="Title"
          fullWidth
          value={frmData.title}
          onChange={(evt) =>
            setFrmData({ ...frmData, title: evt.target.value })
          }
        ></TextField>
        <TextField
          name="name"
          variant="outlined"
          label="Name"
          fullWidth
          value={frmData.name}
          onChange={(evt) => setFrmData({ ...frmData, name: evt.target.value })}
        ></TextField>{" "}
        <TextField
          name="subject"
          variant="outlined"
          label="What language do you teach?"
          fullWidth
          value={frmData.subject}
          onChange={(evt) =>
            setFrmData({ ...frmData, subject: evt.target.value })
          }
        ></TextField>{" "}
        {/* #TODO put a dropdown box for #'s here */}
        <TextField
          name="yearOfExp"
          variant="outlined"
          label="How long have you been programming?"
          fullWidth
          value={frmData.yearsOfExp}
          onChange={(evt) =>
            setFrmData({ ...frmData, yearsOfExp: evt.target.value })
          }
        ></TextField>
        <div className={classes.fileInput}>
          <FileBase
            type="file"
            multiple={false}
            onDone={({ base64 }) =>
              setFrmData({ ...frmData, selectedFile: base64 })
            }
          />
        </div>
        <Button
          className={classes.buttonSubmit}
          variant="contained"
          color="primary"
          size="large"
          type="submit"
          fullWidth
        >
          Submit
        </Button>
        <Button
          variant="contained"
          color="secondary"
          size="small"
          onClick={clear}
          fullWidth
        >
          Clear
        </Button>
      </form>
    </Paper>
  );
};

export default Form;
