const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const socket = require("socket.io")
require("dotenv").config();
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.use(routes);

mongoose.connect(process.env.MONGODB_URI || "mongodb://" + process.env.DBUSER + ":" + process.env.DBPASS + "@ds263248.mlab.com:63248/heroku_lgmnpljn");



const server = app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});

const io = socket(server)

io.on("connection", socket => {

  socket.on("saved", data => {
    io.sockets.emit("saved", data)
  })

})