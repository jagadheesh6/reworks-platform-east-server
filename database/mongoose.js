const mongoose = require("mongoose");

const urlMongo = "mongodb://harsha:harsha2000@ac-mw5ejeo-shard-00-00.ou8heqr.mongodb.net:27017,ac-mw5ejeo-shard-00-01.ou8heqr.mongodb.net:27017,ac-mw5ejeo-shard-00-02.ou8heqr.mongodb.net:27017/platform_east?ssl=true&replicaSet=atlas-1090ke-shard-0&authSource=admin&retryWrites=true&w=majority";

mongoose.connect(urlMongo, {
    autoCreate: true,
  })
  .then(() => console.log("Connected to MongoDB Atlas"))
  .catch(() => console.log("Unable to connect to MongoDB Atlas"));
