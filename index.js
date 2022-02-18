import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";

import tutorRoutes from "./server/routes/tutors.js";

const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
app.use("/tutors", tutorRoutes);

const CONNECTION_URL =
  "mongodb+srv://Meri:tutoringmpjs@cluster0.qstm5.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

var MONGODB_URI = process.env.MONGODB_URI || CONNECTION_URL;

mongoose.connect(MONGODB_URI);

// mongoose
//   .connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() =>
//     app.listen(PORT, () => console.log(`Server running on port: ${PORT}`))
//   )
//   .catch((err) => console.error(err.message));

// mongoose.set("useFindAndModify", false);
