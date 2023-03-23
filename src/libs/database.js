/**
 * @fileoverview -
 * @author: b3lf3g0r
 * @version: 1.0.0
 * @since: 2023-03-21
 * */
import { Sequelize } from 'sequelize';
// import { Redis } from 'ioredis';
import { dbConfig } from '../configs/db.config.js';
import { Logger } from '../utils/index.js';

export const database = {
  sequelizeConnect() {
    return new Sequelize(
      dbConfig.mariadb.database,
      dbConfig.mariadb.username,
      dbConfig.mariadb.password,
      {
        host: dbConfig.mariadb.host,
        dialect: 'mariadb',
        protocol: 'mariadb',
        pool: {
          max: 5,
          min: 0,
          acquire: 30000,
          idle: 10000,
        },
        logging: (...debug) => {
          process.env.NODE_ENV === 'production'
            ? Logger.warn(debug)
            : Logger.info(debug);
        },
      }
    );
  },

  // redisClient() {
  //   return new Redis({
  //     port: dbConfig.redis.port,
  //     host: dbConfig.redis.host,
  //     db: dbConfig.redis.db,
  //   });
  // },
};
