import * as functions from "firebase-functions";
import * as config from "config";

export default functions
  .region(config.get("region"))
  .auth.user()
  .onCreate(user => {
    console.log("user created");
  });
