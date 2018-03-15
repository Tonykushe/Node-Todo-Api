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

  // Delete One
  db.collection('Todos').deleteOne({text: 'eat lunch'}).then((result) => {
      console.log(result);

  });

  // Delete many
  db.collection('Todos').deleteMany({text: 'eat lunch'}).then((result) => {
      console.log(result);
  });

  // Find one and Delete
  db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
      console.log(result);

  });

 

//   client.close();
});
