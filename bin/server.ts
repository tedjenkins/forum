/* tslint:disable:no-console */
// * ---------------------------------------------------------------------------------------
// * File to run with pm2, 'forever' etc for serving files and other server-side operations.
// * ---------------------------------------------------------------------------------------
import { createConnection } from 'typeorm';
import Boards from '../src/db/entities/Boards';
import Posts from '../src/db/entities/Posts';
import Threads from '../src/db/entities/Threads';
import Users from '../src/db/entities/Users';
import express from 'express';
import http from 'http';
import path from 'path';
import { props, utils } from '../src/utils';

createConnection()
  .then(connection => {
    const app = express();

    app.set('port', 3010);
    app.set('host', 'http://localhost:3000');
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    app.use(
      express.static(
        path.join(
          __dirname,
          process.env.NODE_ENV === 'production' ? '../dist' : '../public'
        )
      )
    );

    // =============== //
    // GET app routes. //
    // =============== //
    app
      .route('/get-boards')
      .options((req: express.Request, res: express.Response) => {
        res.setHeader('Access-Control-Allow-Origin', app.get('host'));
        res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
        res.status(200).end();
      })
      .get(async (req: express.Request, res: express.Response) => {
        res.type('application/json');
        res.setHeader('Access-Control-Allow-Origin', app.get('host'));
        res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
        res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS');

        const result = await connection.getRepository(Boards).find();

        res.send(result);
      });

    app
      .route('/get-threads/:num')
      .options((req: express.Request, res: express.Response) => {
        res.setHeader('Access-Control-Allow-Origin', app.get('host'));
        res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
        res.status(200).end();
      })
      .get(async (req: express.Request, res: express.Response) => {
        res.type('application/json');
        res.setHeader('Access-Control-Allow-Origin', app.get('host'));
        res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
        res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS');

        const result = await connection
          .getRepository(Threads)
          .find({ take: +req.params.num });

        res.send(result);
      });

    app
      .route('/get-users/:num')
      .options((req: express.Request, res: express.Response) => {
        res.setHeader('Access-Control-Allow-Origin', app.get('host'));
        res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
        res.status(200).end();
      })
      .get(async (req: express.Request, res: express.Response) => {
        res.type('application/json');
        res.setHeader('Access-Control-Allow-Origin', app.get('host'));
        res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
        res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS');

        const result = await connection
          .getRepository(Users)
          .find({ take: +req.params.num });

        res.send(result);
      });

    // ================ //
    // POST app routes. //
    // ================ //
    app
      .route('/login')
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

        if (
          utils.inputIsValid(req.body.username) &&
          utils.passwordIsValid(req.body.password)
        ) {
          // handle login
        }
      });

    app
      .route('/register-user')
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

        // handle registration
      });

    app
      .route('/makepost')
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

        connection
          .createQueryBuilder()
          .insert()
          .into(Threads)
          .values({
            title: req.body.threadTitle,
            authorId: req.body.userId,
            boardId: req.body.boardId,
            isPromoted: 0
          })
          // .insert()
          // .into(Posts)
          // .values({
          //   authorId: req.body.userId,
          //   threadId: req.body
          // })
          .execute();

        // req.body.userId: number; -> threads.author_id & posts.author_id
        // req.body.boardId: number; -> threads.board_id
        // req.body.threadTitle: string; -> threads.title
        // req.body.threadContent: string; -> posts.content
        res.send(req.body);
      });

    app.use((req: express.Request, res: express.Response) => {
      res.type('html');
      res.sendFile(path.join(__dirname, '..', 'public', 'error.html'));
      res.status(404);
    });

    const server = http.createServer(app).listen(app.get('port'));
    server.on('error', err => {
      throw err;
    });
    server.on('listening', () =>
      console.log(
        `Listening on port ${app.get(
          'port'
        )}. Press CTRL + C or Command + . to stop.`
      )
    );
  })
  .catch(err => {
    throw err;
  });
