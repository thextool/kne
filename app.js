const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const app = express();
const cors = require('cors')


const resolutions = require("./routes/resolutions");

app.use(cors())
app.use(morgan('dev'));
app.use(bodyParser.json());

app.use("/resolutions", resolutions);

app.get('/', (req, res) => {
    res.json({
        message: 'Hello Matt'
    })
})

// catch 404 and forward to error handler
app.use((req, res, next) => {
    const err = new Error("Not Found");
    res.status(404);
    next(err);
});

// error handler
app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.json({
        message: err.message,
        error: req.app.get("env") === "development" ? err.stack : {}
    });
});

module.exports = app;
