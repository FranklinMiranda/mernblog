const { MongoClient } = require('mongodb');
const Db = process.env.ATLAS_URI;
const client = new MongoClient(Db, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

var _db;

module.exports = {
  connectToServer: function (callback) {


    console.log('connectToServer');

    _db = client.db('employees')
    console.log(client.db)

    
    // client.connect(function (err, db) {
    //   console.log('client.connect');
    //   // Verify we got a good "db" object
    //   if (db) {
    //     _db = db.db('employees');
    //     console.log('Successfully connected to MongoDB.');
    //   }

    //   return callback(err);
    // });
  },

  getDb: function () {
    return _db;
  },
};
