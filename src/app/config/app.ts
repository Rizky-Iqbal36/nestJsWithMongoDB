/* eslint-disable @typescript-eslint/no-var-requires */
import { config } from 'dotenv';

const pjson = require('../../../package.json');
config();

/*
|--------------------------------------------------------------------------
| Base App Config
|--------------------------------------------------------------------------
|
| You can add new object for config variable. You can put value directly or
| take from .env file. If it's related with credentials, you should put
| the value from .env file.
|
*/

const appConfig = {
  /**
   * App Configuration
   *
   */
  app: {
    name: pjson.name,
    version: pjson.version,
    secret_key: process.env.SECRET_KEY,
    env: process.env.NODE_ENV,
  },
  /**
   * Database Configuration
   * Please refer to https://docs.nestjs.com/techniques/database
   */
  database: {
    url: process.env.DATABASE_URL, //link to database (mongodb atlas)
    name: process.env.APP_NAME,
    useNewUrlParser: true,
    synchronize: true, // set true to sync based on models,
    logging: true,
    useUnifiedTopology: true,
  },
};

export default appConfig;
