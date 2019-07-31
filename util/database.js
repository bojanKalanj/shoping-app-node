const Sequelize = require('sequelize');

const sequelize = new Sequelize(
  'node-complete',
  'root',
  'tajnapricljivogcrva',
  {
    dialect: 'mysql',
    host: 'localhost'
  }
);

module.exports = sequelize;
