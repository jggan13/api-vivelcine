const mongoose = require('mongoose');
const URIDB = 'mongodb+srv://jganchozo:Jesuss13@cluster0-7ryt2.mongodb.net/vivelcine?retryWrites=true&w=majority';

mongoose.connect(URIDB)
        .then((db) => {
            console.log('db is connected');
        })
        .catch((err) => {
            console.log(err);
        });

module.exports = mongoose;