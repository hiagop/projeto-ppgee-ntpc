import express from "express";
import session from "express-session";
import bodyParser from "body-parser";
import FileStoreGenerator from "session-file-store";
import { v4 as uuid } from "uuid";
// import CORS from 'cors'

import api from "./routes";

const port: number = parseInt(process.env.SERVER_PORT as string) || 8000;

const server = express();

const FileStore = FileStoreGenerator(session);

server.use(
  session({
    genid: req => {
      return uuid();
    },
    store: new FileStore(),
    secret: "patati patata",
    resave: false,
    saveUninitialized: true
  })
);
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));
server.use("/", api);

server.listen(port, () => {
  console.log("Server running on port:", port);
});
