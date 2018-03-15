// const MongoClient = require('mongodb').MongoClient;
const { MongoClient } = require("mongodb");

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

  db.collection('Todos').find({completed: false}).toArray().then((docs) => {
      console.log('List of todos');
      console.log(JSON.stringify(docs, undefined, 2));
      
  }, (err) => {

      console.log('Unable to fetch todos', err);

  });

 

//   client.close();
});
