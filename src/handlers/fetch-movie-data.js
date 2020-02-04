const fetch = require('node-fetch');
const dbOperations = require('../utils/dbOperations');

async function fetchMovieDetails(){
	try{
		await fetchMetadata();
		await fetchGenre();
		await fetchActors();
		return 'Sucessfully stored';
	}
	catch(err){
		return err.message;
	}
}
    
async function fetchMetadata() {
	try{
		const movieMetadataURL = 'https://stormy-plains-72807.herokuapp.com/movies';
		const movieMetadataResponse = await fetch(movieMetadataURL);
		const movieMetadata = await movieMetadataResponse.json();
		const movieMetadataArray = movieMetadata.movies;

		for(let iter=0; iter<movieMetadataArray.length; iter++){
			await dbOperations.storeMovieMetadataToDB(movieMetadataArray[iter]);
		}
		return 'Successfully stored';
	}
	catch(err){
		return err.message;

	}
}

async function fetchGenre(){
	try{
		const movieGenresURL = 'https://stormy-plains-72807.herokuapp.com/genres';
		const movieGenresResponse = await fetch(movieGenresURL);
		const movieGenres = await movieGenresResponse.json();
		const movieGenreArray = movieGenres.genres;

		for(let iter=0; iter<movieGenreArray.length; iter++){
			await dbOperations.storeMovieGenreToDB(movieGenreArray[iter]);
		}
		return 'Successfully stored';
	}
	catch(err){
		return err.message;

	}
}

async function fetchActors(){
	try{
		const movieActorsURL = 'https://stormy-plains-72807.herokuapp.com/actors';
		const movieActorsResponse = await fetch(movieActorsURL);
		const movieActors = await movieActorsResponse.json();
		const movieActorsArray = movieActors.actors;
		for(let iter=0; iter<movieActorsArray.length; iter++){
			await dbOperations.storeMovieActorsToDB(movieActorsArray[iter]); 
		}
		return 'Successfully stored';
	}
	catch(err){
		return err.message;
	}
    
}

module.exports = {fetchMetadata, fetchGenre, fetchActors, fetchMovieDetails};
    
	