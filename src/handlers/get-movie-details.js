const dbOperations = require('../utils/dbOperations');

const getMovieDetails = async (request, h) => {
	try{
		let movieDetails = {};
		const movieName = request.payload.movieName;	
		const movieMetadata = await dbOperations.retriveMovieMetadataFromDB(movieName);
		movieDetails.name = movieMetadata[0].name;
		const genreNumbers = movieMetadata[0].genre.split(',');
		let genreArray = [];
		for(let i=0; i<genreNumbers.length; i++){
			const movieGenre = await dbOperations.retriveMovieGenreFromDB(genreNumbers[i]);
			console.log(movieGenre);
			genreArray.push(movieGenre[0].name);
		}
		movieDetails.genre = genreArray;
		return h.response(movieDetails).code(200);
	}
	catch(err){
		return h.response(err.message).code(500); 
	}
};

module.exports = {getMovieDetails};