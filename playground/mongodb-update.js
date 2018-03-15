// const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require("mongodb");

//connection url
const url = "mongodb://localhost:27017";

// Database name
const dbName = "TodoApp";

// Connect using MongoClient
MongoClient.connect(url, (err, client) => {
  if (err) {
    return console.log("Unable to connect to MongoDB server");
  }

  console.log("Connection To MongoDb server was Successful");
  var db = client.db(dbName);

  db.collection('Todos').findOneAndUpdate({
      _id: new ObjectID('5aaa75c718b4321ebcd292c9')
    }, {
        $set: {
            completed: true
        }
    }, {
        returnOriginal: false
    }).then((result) => {
        console.log(result);
    });

  //   client.close();
});
