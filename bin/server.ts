// * ---------------------------------------------------------------------------------------
// * File to run with pm2, 'forever' etc for serving files and other server-side operations.
// * ---------------------------------------------------------------------------------------
import { createConnection } from 'typeorm';
import express from 'express';
import http from 'http';
import path from 'path';

createConnection().then(connection => {
  const app = express();

  app.set('port', 3010);
  app.set('host', 'http://localhost:3000');
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(express.static(path.join(__dirname, (process.env.NODE_ENV === 'production') ? '../dist' : '../public')));

  // Error handling
  app.get('*', (req: express.Request, res: express.Response) => {
    res.type('html');
    res.sendFile(path.join(__dirname, 'error.html'));
  });

  // ================ //
  // POST app routes. //
  // ================ //
  app.route('/register')
    .options((req: express.Request, res: express.Response) => {
      res.setHeader('Access-Control-Allow-Origin', app.get('host'));
      res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
      res.status(200).end();
    })
    .post((req: express.Request, res: express.Response) => {
      res.type('application/json');
      res.setHeader('Access-Control-Allow-Origin', app.get('host'));
      res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
      res.setHeader('Access-Control-Allow-Methods', 'POST');
      res.send(req.body);
    });

  const server = http.createServer(app).listen(app.get('port'));
  server.on('error', err => { throw err; });
  server.on('listening', () => console.log(`Listening on port ${app.get('port')}. Press CTRL + C or Command + . to stop.`));
}).catch(err => {
  throw err;
});
