const db = require('../../models/index');

const storeMovieMetadataToDB = async (movieObj) => {
	const id = movieObj.id;
	const name = movieObj.name;
	const genre = movieObj.genres;
	db.movies.create({ id: id.toString(), name: name.toString(), genre: genre.toString()});
};

const storeMovieGenreToDB = async (movieObj) => {
	const name = movieObj.name;
	const id = movieObj.id;
	db.movies.create({name: name.toString(), id: id.toString() });
};

const storeMovieActorsToDB = async (movieObj) => {
	const name = movieObj.name;
	const movies = movieObj.movies;
	db.movies.create({name: name.toString(), movies: movies.toString() });
};

module.exports = {storeMovieMetadataToDB, storeMovieGenreToDB, storeMovieActorsToDB};