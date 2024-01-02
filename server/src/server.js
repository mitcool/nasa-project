const PORT = process.env.PORT || 5000;

const http = require('http');

const app =require('./app');

const server = http.createServer(app);

const {loadPlanets} = require('././models/planets.model');

async function startServer() {

    await loadPlanets()
    server.listen(PORT, () => {
        console.log('works');
    });
}
startServer();

