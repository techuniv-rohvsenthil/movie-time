const {fetchMovieDetails} = require('../handlers/fetch-movie-data');
const {getMovieDetails} = require('../handlers/get-movie-details');

const routeArray = [
	{path: '/stores', method: 'GET', handler: fetchMovieDetails},
	{path: '/fetches', method: 'POST', handler: getMovieDetails}
];
module.exports = routeArray;