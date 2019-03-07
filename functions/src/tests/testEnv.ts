import * as config from "config";
import * as adminEnv from "firebase-admin";
adminEnv.initializeApp();

export const admin = adminEnv;
export const testEnv = require("firebase-functions-test")(
  config.get("firebaseAPI"),
  "./service-account.json"
);
