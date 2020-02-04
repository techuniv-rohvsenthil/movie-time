const dbOperations = require('../utils/dbOperations');

// const getMovieDetails = async (request, h) => {
// 	try{
// 		//const movieDetails = {};
// 		const movieName = request.payload.movieName;	
// 		const movieMetadata = await dbOperations.retriveMovieMetadataFromDB(movieName);
// 		return h.response(movieMetadata).code(200);
// 	}
// 	catch(err){
// 		return h.response(err.message).code(500); 
// 	}
// };

//module.exports = {getMovieDetails};