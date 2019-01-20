const mongoose = require('mongoose');

const URI = 'mongodb://glozano:colombia@cluster0-shard-00-00-ypzwq.mongodb.net:27017,cluster0-shard-00-01-ypzwq.mongodb.net:27017,cluster0-shard-00-02-ypzwq.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true';

mongoose.connect(URI)
    .then(db => console.log('db is connected'))
    .catch(err => console.error(err));

module.exports = mongoose;