// const dbOperations = require('../utils/dbOperations');

// const storeNewMovie = async (request, h) => {
// 	try{
// 		//const movieName = request.payload.movieInput;	
// 		// const genreNames = movieName.genres;
// 		// for(let i=0; i<genreNames.length; i++){
// 		// 	const movieGenre = await dbOperations.retriveMovieGenreFromDBByName(genreNames[i]);
// 		// 	genreArray.push(movieGenre[0].id);
// 		// }
// 		const actorsArray = movieName.actors;

        
// 		return h.response('Stored').code(200);
// 	}
// 	catch(err){
// 		return h.response(err.message).code(500); 
// 	}
// };