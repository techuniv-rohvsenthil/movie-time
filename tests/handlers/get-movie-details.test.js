const dbOperations = require('../../src/utils/dbOperations');
const {getMovieDetails} = require('../../src/handlers/get-movie-details');

describe('the getMovieDetails handler function,', () => {  

	it('should the details of the passed movie name', async () => {
		const mockResponse = {
			'name': 'The Shawshank Redemption',
			'genre': [
				'Mystery',
				'Romance'
			],
			'actors': [
				'Morgan Freeman'
			]
		};
		const mockRequest = {
			payload: {
				movieName: 'The Shawshank Redemption'
			}
		}; 
		const codeMock = jest.fn();
		const mockH = {
			response: jest.fn(() => {
				return{
					code: codeMock
				};
			})
		};
		const mockMetadataRetrieve = jest.spyOn(dbOperations, 'retriveMovieMetadataFromDB');
		mockMetadataRetrieve.mockResolvedValue([{id:'6638453965',name:'The Shawshank Redemption', genre:'2,4'}]);
		const mockGenreRetrieve = jest.spyOn(dbOperations, 'retriveMovieGenreFromDB');
		mockGenreRetrieve.mockResolvedValue([{name:'Mystery',id:'2'}, {name:'Romance', id:'4'}]);
		const mockActorsRetrieve = jest.spyOn(dbOperations, 'retriveMovieActorsFromDB');
		mockActorsRetrieve.mockResolvedValue([{name:'Brad Pitt',movies:'7533474498,1393797017,6621531523'},{name:'Morgan Freeman',movies:'6621531523,6638453965'}]);
		await getMovieDetails(mockRequest, mockH);
		expect(mockMetadataRetrieve).toHaveBeenCalled();
		expect(mockGenreRetrieve).toHaveBeenCalled();
		expect(mockActorsRetrieve).toHaveBeenCalled();
		//expect(mockH.response).toHaveBeenCalledWith(mockResponse);
		expect(mockH.response).toHaveBeenCalled();
		expect(codeMock).toHaveBeenCalledWith(200);
		mockMetadataRetrieve.mockRestore();
		mockGenreRetrieve.mockRestore();
		mockActorsRetrieve.mockRestore();
	});

	// xit('should return error message when retrieve fails', async () => {
	// 	const mockStoreToDB = jest.spyOn(dbOperations, 'storeMovieMetadataToDB');
	// 	mockStoreToDB.mockRejectedValue(new Error('Failed to store to DB'));
	// 	const res = await fetchOperations.fetchMetadata();
	// 	expect(res).toBe('Failed to store to DB');
	// 	mockStoreToDB.mockRestore();
	// });

});