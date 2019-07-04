import cors from "cors";
import express from "express";
import passport from "passport";
import mongoose from "mongoose";
import bluebird from "bluebird";
import bodyParser from "body-parser";
import session from "express-session";
import { v4 as uuid } from "uuid";
import FileStoreGenerator from "session-file-store";
import history from "connect-history-api-fallback";
import userApi from "@routes/user.route";

const server = express();

const mongodbURL = "mongodb://localhost:27017/";
const mongodbOptions = {
  useNewUrlParser: true,
  auth: { user: "", password: "" },
  authSource: "admin"
};

(mongoose as any).Promise = bluebird;
mongoose.set("useCreateIndex", true);
mongoose
  .connect(mongodbURL, mongodbOptions)
  .then(() => {
    console.log(`mongodb connected at ${mongodbURL}`);
  })
  .catch(err => {
    console.log(`mongodb connection error: ${err}`);
  });

const FileStore = FileStoreGenerator(session);

server.set("port", process.env.PORT || 8000);
server.use(
  session({
    genid: () => {
      return uuid();
    },
    store: new FileStore(),
    secret: "patati patata",
    resave: false,
    saveUninitialized: true
  })
);
server.use(cors());
server.use(history());
server.use(passport.initialize());
server.use(passport.session());
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));
server.use("/", userApi);

server.listen(server.get("port"), () => {
  console.log("Server running on port:", server.get("port"));
});
