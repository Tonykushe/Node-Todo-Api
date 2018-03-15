// const MongoClient = require('mongodb').MongoClient;
const {MongoClient} = require("mongodb");

//connection url
const url = 'mongodb://localhost:27017';

// Database name
const dbName = 'TodoApp'


// Connect using MongoClient
MongoClient.connect(url, (err, client) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }

    console.log('Connection To MongoDb server was Successful');

    var db = client.db(dbName);

    db.collection('Todos').insertOne({
        text: 'Something To do',
        completed: false
    }, (err, result) => {
        if (err) {
            return console.log('Unable to insert todo', err);
            
        }
        console.log(JSON.stringify(result.ops, undefined, 2));
    });

    db.collection('Users').insertOne({
        name: 'Tony Mugendi',
        age: 23,
        location: 'Nairobi'
    }, (err, result) => {
        if (err) {
            return console.log('Unable to insert user', err);
            
        }
        console.log(JSON.stringify(result.ops[0]._id.getTimestamp(), undefined, 2));

    });

    client.close();
    
});