const dbOperations = require('../../src/utils/dbOperations');
const db = require('../../models/index');


describe('the storeMovieMetadataToDB function,', () => {

	it('should insert the metadata details of the movie', async () => {
		const mockValues = {
			id: '6638453965',
			name: 'The Shawshank Redemption',
			genres: '2,4'
		};
		const mockSequelize = jest.spyOn(db.movies, 'create');
		mockSequelize.mockResolvedValue();
		await dbOperations.storeMovieMetadataToDB(mockValues);
		expect(mockSequelize).toHaveBeenCalled();
		mockSequelize.mockRestore();
	});
    
});

describe('the storeMovieGenreToDB function,', () => {

	it('should insert the genre details of the movie', async () => {
		const mockValues = {
			name: 'Crime',
			id: 1
		};
		const mockSequelize = jest.spyOn(db.genres, 'create');
		mockSequelize.mockResolvedValue();
		await dbOperations.storeMovieGenreToDB(mockValues);
		expect(mockSequelize).toHaveBeenCalled();
		mockSequelize.mockRestore();
	});
    
});

describe('the storeMovieActorsToDB function,', () => {

	it('should insert the actor details of the movie', async () => {
		const mockValues = {
			name:'Brad Pitt',
			movies:'753347449,1393797017,6621531523'
		};
		const mockSequelize = jest.spyOn(db.actors, 'create');
		mockSequelize.mockResolvedValue();
		await dbOperations.storeMovieActorsToDB(mockValues);
		expect(mockSequelize).toHaveBeenCalled();
		mockSequelize.mockRestore();
	});
    
});

describe('the retriveMovieMetadataFromDB function,', () => {

	it('should retrieve details of the movie', async () => {
		const mockValues = {
			movieName:'The Shawshank Redemption',
		};
		const mockSequelize = jest.spyOn(db.movies, 'findAll');
		mockSequelize.mockResolvedValue();
		await dbOperations.retriveMovieMetadataFromDB(mockValues);
		expect(mockSequelize).toHaveBeenCalled();
		mockSequelize.mockRestore();
	});
    
});

describe('the retriveMovieGenreFromDB function,', () => {

	it('should retrieve genre of the movie given number', async () => {
		const mockValues = '1';

		const mockSequelize = jest.spyOn(db.genres, 'findAll');
		mockSequelize.mockResolvedValue();
		await dbOperations.retriveMovieGenreFromDB(mockValues);
		expect(mockSequelize).toHaveBeenCalled();
		mockSequelize.mockRestore();
	});
    
});

describe('the retriveMovieActorsFromDB function,', () => {

	it('should retrieve actors list', async () => {
		const mockSequelize = jest.spyOn(db.actors, 'findAll');
		mockSequelize.mockResolvedValue();
		await dbOperations.retriveMovieActorsFromDB();
		expect(mockSequelize).toHaveBeenCalled();
		mockSequelize.mockRestore();
	});
    
});
