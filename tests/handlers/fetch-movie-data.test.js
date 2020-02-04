const {fetchMetadata} = require('../../src/handlers/fetch-movie-data');
const dbOperations = require('../../src/utils/dbOperations');

describe('the fetchMetadata handler function,', () => {  

	it('should call storeMovieMetadataToDB', async () => {
		const mockStoreToDB = jest.spyOn(dbOperations, 'storeMovieMetadataToDB');
		mockStoreToDB.mockResolvedValue();
		const res = await fetchMetadata();
		expect(mockStoreToDB).toHaveBeenCalled();
		expect(res).toBe('Successfully stored');
		mockStoreToDB.mockRestore();
	});

	it('should return error message when retrieve fails', async () => {
		const mockStoreToDB = jest.spyOn(dbOperations, 'storeMovieMetadataToDB');
		mockStoreToDB.mockRejectedValue(new Error('Failed to store to DB'));
		const res = await fetchMetadata();
		expect(res).toBe('Failed to store to DB');
		mockStoreToDB.mockRestore();
	});

});
