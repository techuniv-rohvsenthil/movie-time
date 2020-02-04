'use strict';
module.exports = (sequelize, DataTypes) => {
	const genres = sequelize.define('genres', {
		name: DataTypes.STRING,
		id: DataTypes.NUMBER
	}, {});
	genres.associate = function(models) {
		// associations can be defined here
	};
	return genres;
};