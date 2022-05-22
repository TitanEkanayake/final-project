var admin = require("firebase-admin");

var serviceAccount = require("./finaldb-e07d3-firebase-adminsdk-iagwx-2cf32753fe.json");

const uid = process.argv[2];

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL:
    "https://finaldb-e07d3-default-rtdb.asia-southeast1.firebasedatabase.app",
});

const db = admin.firestore();
const compDb = db.collection("company");
const create = compDb.doc(uid).set({
  uid,
});

admin
  .auth()
  .setCustomUserClaims(uid, { admin: true })
  .then(() => {
    create;
    console.log("custom claims set for user", uid);
    process.exit();
  })
  .catch((error) => {
    console.log(error);
    process.exit(1);
  });
