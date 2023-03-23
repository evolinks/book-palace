/**
 * @fileoverview -
 * @author: b3lf3g0r
 * @version: 1.0.0
 * @since: 2023-03-21
 * */
import http from 'http';
import ip from 'ip';
import { app } from './index.js';
import { database } from './libs/index.js';
import { Logger } from './utils/index.js';

const PORT = process.env.PORT || 5500;
const server = http.createServer(app);

database
  .sequelizeConnect()
  .authenticate()
  .then(() => {
    server.listen(PORT, () => {
      Logger.info(
        `Astro Commerce Server is running on http://${ip.address()}:${PORT}`
      );
    });
  })
  .catch((SequelizeConnectionError) => {
    Logger.error(
      `[mariadb] => Failed To Establish Connection: ${SequelizeConnectionError}.`
    );
  });
