/*
 * @fileoverview - Shelf model
 * @path: src/db/models/shelf.model.js
 * @author: b3lf3g0r
 * @version: 1.0.0
 * @since: 2023-03-21
 * */
import { DataTypes } from 'sequelize';
import { database } from '../../libs/index.js';

const Shelf = database.sequelizeConnect().define(
  'Shelf',
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    bookId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    shelfId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    floor: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  { timestamps: true }
);

(async () => {
  await Shelf.sync();
})();
