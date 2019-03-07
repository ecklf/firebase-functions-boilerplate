import * as functions from "firebase-functions";
import * as config from "config";

export default functions
  .region(config.get("region"))
  .https.onRequest((request, response) => {
    response.send("Hello from Firebase!");
  });
