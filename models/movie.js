const mongoose = require('mongoose');
const { Schema } = mongoose;

const MovieSchema = new Schema({
    title: { type: String, required: true },
    overview: { type: String, required: true },
    backdrop_path: { type: String, required: true },
    poster_path: { type: String, required: true },
    downloadUrl: { type: String, required: false },
    movieResource: { type: String, required: true },
    idMovie: { type: String, required: true }
});

module.exports = mongoose.model('Movie', MovieSchema);