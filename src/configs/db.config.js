/**
 * @fileoverview -
 * @author: b3lf3g0r
 * @version: 1.0.0
 * @since: 2023-03-21
 * */
import dotenv from 'dotenv';

dotenv.config();

export const dbConfig = {
  mariadb: {
    host: process.env.MARIADB_HOST,
    port: process.env.MARIADB_PORT,
    username: process.env.MARIADB_USERNAME,
    password: process.env.MARIADB_PASSWORD,
    database: process.env.MARIADB_DATABASE,
  },
  redis: {
    host: process.env.REDIS_HOST,
    port: process.env.REDIS_PORT,
    db: process.env.REDIS_DB,
  },
};
