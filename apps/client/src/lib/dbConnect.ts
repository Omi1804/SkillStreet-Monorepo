import mongoose from "mongoose";

let alreadyConnected = false;

export function ensureDbConnected() {
  if (alreadyConnected) {
    return;
  }

  mongoose
    .connect("mongodb+srv://omi:1234@omi.vqrn8w9.mongodb.net/mernCourse", {
      dbName: "mernCourse",
    })
    .then(() => {
      alreadyConnected = true;
      console.log("Database Connected Successfully");
    })
    .catch((err) => {
      console.log("Error connecting to database " + err);
    });
}
