const fetch = require('node-fetch');

async function fetchMovieData() {

	let movieDetails = {};

	const movieMetadataURL = 'https://stormy-plains-72807.herokuapp.com/movies';
	const movieMetadataResponse = await fetch(movieMetadataURL);
	const movieMetadata = await movieMetadataResponse.json();
    
	const movieGenresURL = 'https://stormy-plains-72807.herokuapp.com/genres';
	const movieGenresResponse = await fetch(movieGenresURL);
	const movieGenres = await movieGenresResponse.json();
    
	const movieActorsURL = 'https://stormy-plains-72807.herokuapp.com/actors';
	const movieActorsResponse = await fetch(movieActorsURL);
	const movieActors = await movieActorsResponse.json();

		
}










module.exports = {fetchMovieData};
