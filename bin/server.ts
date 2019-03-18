// * ---------------------------------------------------------------------------------------
// * File to run with pm2, 'forever' etc for serving files and other server-side operations.
// * ---------------------------------------------------------------------------------------
import express from 'express';
import http from 'http';
import path from 'path';

const app = express();

app.set('port', 3010);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, '../public')));

const server = http.createServer(app).listen(app.get('port'));
server.on('error', err => { throw err; });
server.on('listening', () => console.log(`Listening on port ${app.get('port')}. Press CTRL + C or Command + . to stop.`));

export default app;
