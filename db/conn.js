const { MongoClient, ServerApiVersion } = require("mongodb");
const Db = process.env.ATLAS_URI;
const client = new MongoClient(Db, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1
});
 
var _db;
 
module.exports = {
  connectToServer: function (callback) {
    try {
      client.connect();
      console.log("Connected!");
      _db = client.db("Portfolio");
    } catch(err) {
      callback(err);
    }
  },
 
  getDb: function () {
    if (!_db) {
      this.connectToServer();
    }
    return _db;
  },
};