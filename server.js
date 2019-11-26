// Dependencies
const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");
const cors = require("cors");
const fs = require("fs");

const dotenv = require("dotenv");
dotenv.config();

const app = express();

//Routes
const articleRoutes = require("./routes/article-routes");
const eventRoutes = require("./routes/event-routes");
const quizRoutes = require("./routes/quiz-routes");

// Middleware/ Checkware
app.use(morgan("dev"));
app.use(bodyParser.json());
// app.use(cookieParser());
// app.use(expressValidator());
app.use(cors());
app.use("/", articleRoutes);
// app.use("/", eventRoutes);
// app.use("/", quizRoutes);

// MongoDB
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log("DB connected."))
  .catch(err => {
    console.log(`db connection error: ${err.message}`);
    process.exit();
  });

// Port
const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`App listening on port: ${port}`);
});
