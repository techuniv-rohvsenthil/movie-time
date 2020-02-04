'use strict';
module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.createTable('movies', {
			id: {
				primaryKey: true,
				type: Sequelize.NUMBER
			},
			name: {
				type: Sequelize.STRING
			},
			genre: {
				type: Sequelize.ARRAY
			},
			createdAt: {
				allowNull: false,
				type: Sequelize.DATE
			},
			updatedAt: {
				allowNull: false,
				type: Sequelize.DATE
			}
		});
	},
	down: (queryInterface, Sequelize) => {
		return queryInterface.dropTable('movies');
	}
};