const uri = process.env.MONGO_URI;
const MongoClient = require('mongodb').MongoClient;
const DB_NAME = "bugtracker";
const MONGO_OPTIONS = { useUnifiedTopology: true, useNewUrlParser: true };

module.exports = () => {
    const count = (collectionName) => {
        return new Promise((resolve, reject) => {
             MongoClient.connect(uri, MONGO_OPTIONS, (err, client) => {
                const db = client.db(DB_NAME);
                const collection = db.collection(collectionName);
 
                collection.countDocuments({}, (err, docs) => {
                    resolve(docs);
                     client.close();
                });
            });
        });
    };
    const get = (collectionName) => {
        return new Promise((resolve, reject) => {
             MongoClient.connect(uri, MONGO_OPTIONS, (err, client) => {
                const db = client.db(DB_NAME);
                const collection = db.collection(collectionName);
                
                collection.find({}).toArray((err, docs) => {
                    resolve(docs);
                    client.close();
                 });
            });
        });
    };
    const add = (collectionName, item) => {
        return new Promise((resolve, reject) => {
            MongoClient.connect(uri, MONGO_OPTIONS, (err, client) => {
                const db = client.db(DB_NAME);
                const collection = db.collection(collectionName);
                collection.insertOne(item, (err, result) => {
                    resolve(result);
                });
            });
        });
    };
    const aggregate = (collectionName, pipeline = []) => {
        return new Promise((resolve, reject) => {
            MongoClient.connect(uri, MONGO_OPTIONS, (err, client) => {
                const db = client.db(DB_NAME);
                const collection = db.collection(collectionName);
                collection.aggregate(pipeline).toArray((err, docs) => {
                    if (err) {
                        console.log(" --- aggregate ERROR ---");
                        console.log(err);
                    }
                     resolve(docs);
                    client.close();
                });
            });
        });
    };      
    return {
        count,
        get,
        add,
        aggregate,
    };
};
