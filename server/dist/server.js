"use strict";

var _express = _interopRequireDefault(require("express"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// import session from 'express-session'
// import CORS from 'cors'
var port = process.env.SERVER_PORT || 8000;
var server = new _express["default"]();
server.get("/", function (req, res) {
  // console.log(req)
  res.send("Home\n");
});
server.listen(port, function () {
  console.log("Server running on port:", port);
});