const Movie = require('../models/movie');
const movieController = {};

movieController.getMovies = async (req, res) => {
    const movies = await Movie.find().limit(16);
    res.json(movies);
};

movieController.createMovie = async (req, res) => {
    const movie = new Movie(req.body);
    console.log(movie);
    await movie.save();
    res.json({
        status: 'saved movie'
    });
};

movieController.getMovie = async (req, res) => {
    const movie = await Movie.findById(req.params.id);
    res.json(movie);
};

movieController.editMovie = async (req, res) => {
    const { id } = req.params;
    const movie = {
        title: req.body.title,
        overview: req.body.overview,
        backdrop_path: req.body.backdrop_path,
        poster_path: req.body.poster_path,
        downloadUrl: req.body.downloadUrl,
        movieResource: req.body.movieResource,
        idMovie: req.body.idMovie
    };
    await Movie.findByIdAndUpdate(id, { $set: movie }, { new: true });
    res.json({
        message: 'updated movie'
    });
};

movieController.deleteMovie = async (req, res) => {
    await Movie.findByIdAndRemove(req.params.id);
    res.json({
        message: 'removed movie'
    });
};

module.exports = movieController;