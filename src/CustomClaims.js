const admin = require("firebase-admin");

const serviceAccount = require("..finaldb-e07d3-firebase-adminsdk-iagwx-049136e04d.json");

const uid = process.arv[2];

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "finaldb-e07d3.firebaseapp.com",
});

admin
  .auth()
  .setCustomUserClaims(uid, { admin: true })
  .then(() => {
    console.log("custom claims set for user", uid);
    process.exit();
  })
  .catch((error) => {
    console.log(error);
    process.exit(1);
  });
