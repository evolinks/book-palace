/*
 * @fileoverview - Admin model
 * @path: src/db/models/admin.model.js
 * @author: b3lf3g0r
 * @version: 1.0.0
 * @since: 2023-03-21
 * */
import { DataTypes } from 'sequelize';
import { database } from '../../libs/index.js';

export const Admin = database.sequelizeConnect().define(
  'Admin',
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  { timestamps: true }
);

(async () => {
  await Admin.sync();
})();
