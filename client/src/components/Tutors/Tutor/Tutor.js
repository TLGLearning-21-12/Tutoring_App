import React from "react";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@material-ui/core";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import DeleteIcon from "@material-ui/icons/Delete";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import moment from "moment";

import useStyles from "./styles.js";

const Tutor = ({ tutor, setCurrentId }) => {
  const classes = useStyles();
  return (
    // <Card className={classes.card}>
    //   <CardMedia
    //     className={classes.media}
    //     image={tutor.selectedFile}
    //     title={tutor.title}
    //   />
    //   <div className={classes.overlay}>
    //     <Typography variant="h6">{tutor.name}</Typography>
    //     <Typography variant="body2">
    //       {moment(tutor.activationDate).fromNow()}
    //     </Typography>
    //   </div>
    //   <div className={classes.overlay2}>
    //     <Button
    //       style={{ color: "white" }}
    //       size="small"
    //       onClick={() => setCurrentId(tutor._id)}
    //     >
    //       <MoreHorizIcon fontSize="default" />
    //     </Button>
    //   </div>
    //   <div className={classes.details}>
    //     <Typography variant="body2" color="textSecondary">
    //       {tutor.yearsOfExp}
    //     </Typography>
    //   </div>
    //   <CardContent>
    //     <Typography className={classes.title} variant="h5" gutterBottom>
    //       {tutor.subject}
    //     </Typography>
    //   </CardContent>
    //   <CardActions className={classes.cardActions}>
    //     <Button size="small" color="primary" onClick={() => {}}>
    //       <ThumbUpAltIcon fontSize="small" />
    //       {tutor.endorsmentCount}
    //     </Button>
    //     <Button size="small" color="primary" onClick={() => {}}>
    //       <DeleteIcon fontSize="small" />
    //       Delete
    //     </Button>
    //   </CardActions>
    // </Card>
    <Card className={classes.card}>
      <CardMedia
        className={classes.media}
        image={tutor.selectedFile}
        title={tutor.title}
      />
      <div className={classes.overlay}>
        <Typography variant="h6">{tutor.name}</Typography>
        <Typography variant="body2">
          {moment(tutor.createdAt).fromNow()}
        </Typography>
      </div>
      <div className={classes.overlay2}>
        <Button
          style={{ color: "white" }}
          size="small"
          onClick={() => setCurrentId(tutor._id)}
        >
          <MoreHorizIcon fontSize="default" />
        </Button>
      </div>

      <CardContent>
        <Typography className={classes.body} variant="body" gutterBottom>
          {`${"Subject: "}  ${tutor.subject}`}
        </Typography>
        <Typography className={classes.body} variant="body" gutterBottom>
          {`${""} ${"With "}  ${tutor.yearsOfExp} ${" Years of Experience"}`}
        </Typography>
      </CardContent>
      <CardActions className={classes.cardActions}>
        <Button size="small" color="primary" onClick={() => {}}>
          <DeleteIcon fontSize="small" />
          Delete
        </Button>
      </CardActions>
    </Card>
  );
};

export default Tutor;
