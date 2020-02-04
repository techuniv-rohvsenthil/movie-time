const dbOperations = require('../../src/utils/dbOperations');
const {getMovieDetails} = require('../../src/handlers/get-movie-details');

describe('the getMovieDetails handler function,', () => {  

	it('should return the details of the passed movie name with statusCode: 200 for success case', async () => {
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

	it('should return error message with statusCode: 500 when retrieve of metadata fails', async () => {
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
		mockMetadataRetrieve.mockRejectedValue(new Error('Failed to retrieve metadata'));
		const mockGenreRetrieve = jest.spyOn(dbOperations, 'retriveMovieGenreFromDB');
		mockGenreRetrieve.mockResolvedValue([{name:'Mystery',id:'2'}, {name:'Romance', id:'4'}]);
		const mockActorsRetrieve = jest.spyOn(dbOperations, 'retriveMovieActorsFromDB');
		mockActorsRetrieve.mockResolvedValue([{name:'Brad Pitt',movies:'7533474498,1393797017,6621531523'},{name:'Morgan Freeman',movies:'6621531523,6638453965'}]);
		await getMovieDetails(mockRequest, mockH);
		expect(mockMetadataRetrieve).toHaveBeenCalled();
		expect(mockH.response).toHaveBeenCalledWith('Failed to retrieve metadata');
		expect(codeMock).toHaveBeenCalledWith(500);
		mockMetadataRetrieve.mockRestore();
		mockGenreRetrieve.mockRestore();
		mockActorsRetrieve.mockRestore();
	});
    
	it('should return error message with statusCode: 500 when retrieve of genre fails', async () => {
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
		mockGenreRetrieve.mockRejectedValue(new Error ('Failed to retrieve genre') );
		const mockActorsRetrieve = jest.spyOn(dbOperations, 'retriveMovieActorsFromDB');
		mockActorsRetrieve.mockResolvedValue([{name:'Brad Pitt',movies:'7533474498,1393797017,6621531523'},{name:'Morgan Freeman',movies:'6621531523,6638453965'}]);
		await getMovieDetails(mockRequest, mockH);
		expect(mockMetadataRetrieve).toHaveBeenCalled();
		expect(mockGenreRetrieve).toHaveBeenCalled();
		expect(mockH.response).toHaveBeenCalledWith('Failed to retrieve genre');
		expect(codeMock).toHaveBeenCalledWith(500);
		mockMetadataRetrieve.mockRestore();
		mockGenreRetrieve.mockRestore();
		mockActorsRetrieve.mockRestore();
	});
    
	it('should return error message with statusCode: 500 when retrieve of actors fails', async () => {
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
		mockActorsRetrieve.mockRejectedValue(new Error ('Failed to retrieve actors'));
		await getMovieDetails(mockRequest, mockH);
		expect(mockMetadataRetrieve).toHaveBeenCalled();
		expect(mockGenreRetrieve).toHaveBeenCalled();
		expect(mockActorsRetrieve).toHaveBeenCalled();
		expect(mockH.response).toHaveBeenCalledWith('Failed to retrieve actors');
		expect(codeMock).toHaveBeenCalledWith(500);
		mockMetadataRetrieve.mockRestore();
		mockGenreRetrieve.mockRestore();
		mockActorsRetrieve.mockRestore();
	});

});