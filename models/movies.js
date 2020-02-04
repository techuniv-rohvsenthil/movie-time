'use strict';
module.exports = (sequelize, DataTypes) => {
	const movies = sequelize.define('movies', {
		id: DataTypes.NUMBER,
		name: DataTypes.STRING,
		genre: DataTypes.ARRAY
	}, {});
	movies.associate = function(models) {
		// associations can be defined here
	};
	return movies;
};