/*
 * @fileoverview - Return model
 * @path: src/db/models/return.model.js
 * @author: b3lf3g0r
 * @version: 1.0.0
 * @since: 2023-03-21
 * */
import { DataTypes } from 'sequelize';
import { database } from '../../libs/index.js';

export const Return = database.sequelizeConnect().define(
  'Return',
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
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    returnDate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    returnedDate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    fine: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  { timestamps: true }
);

(async () => {
  await Return.sync();
})();
