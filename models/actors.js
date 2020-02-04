'use strict';
module.exports = (sequelize, DataTypes) => {
	const actors = sequelize.define('actors', {
		name: {
			type: DataTypes.STRING,
			primaryKey: true},
		movies: DataTypes.STRING
	}, {});
	actors.associate = function(models) {
		// associations can be defined here
	};
	return actors;
};