const express = require("express");
const serverless = require("serverless-http");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const middleware = require("@tomfischer/middleware");

const education = require("./routes/education");
const projects = require("./routes/projects");
const experience = require("./routes/experience");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());

app.use("/api/education", education);
app.use("/api/projects", projects);
app.use("/api/experience", experience);
app.use(middleware.errorHandler);

module.exports.handler = serverless(app);
