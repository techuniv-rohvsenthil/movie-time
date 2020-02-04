const Hapi = require('@hapi/hapi');
const routes = require('../src/routes/routes');

const createServer = async () => {
	const server = Hapi.Server({
		host: 'localhost',
		port: 8080,
	});
	server.route(routes);
	return server;
};

module.exports = createServer;