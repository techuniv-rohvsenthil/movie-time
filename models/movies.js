'use strict';
module.exports = (sequelize, DataTypes) => {
	const movies = sequelize.define('movies', {
		id: {
			type: DataTypes.STRING,
			primaryKey: true},
		name: DataTypes.STRING,
		genre: DataTypes.STRING
	}, {});
	movies.associate = function(models) {
		// associations can be defined here
	};
	return movies;
};