# forum project

[![CodeFactor](https://www.codefactor.io/repository/github/tedjenkins/forum/badge)](https://www.codefactor.io/repository/github/tedjenkins/forum)

Untitled and discontinued forum (messageboard) project.

#### Includes...

- ~~User registration and sign-in functionality!~~
- ~~Boards! Where there are threads, with posts!~~
- An admin panel!

## Tooling

[Vue](https://vuejs.org/) is the front-end framework, [Express](https://expressjs.com/) is the back-end framework. Code itself is written in [TypeScript](https://www.typescriptlang.org/) where possible. The ORM tool is [TypeORM](https://github.com/typeorm/typeorm). Styling is assisted by [Sass](https://sass-lang.com/). Unit testing is run with [Jest](https://jestjs.io/), end-to-end testing with [Testcafé](https://github.com/DevExpress/testcafe). The linting tool is [TSLint](https://palantir.github.io/tslint/), and the code formatting tool is [Prettier](https://prettier.io/).

#### Installation notes

This project uses dotenv, so make a .env file in base directory with the following:

```
TYPEORM_CONNECTION = mysql
TYPEORM_HOST = localhost
TYPEORM_USERNAME = forumuser123
TYPEORM_PASSWORD = forumpass123
TYPEORM_DATABASE = forumdb
TYPEORM_PORT = 3306
TYPEORM_SYNCHRONIZE = false
TYPEORM_LOGGING = false
TYPEORM_ENTITIES = src/db/entities/*.ts
```

...with values changed as seen fit.

## License

MIT
