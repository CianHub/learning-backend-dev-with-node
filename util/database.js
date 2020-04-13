const Sequelize = require('sequelize');

const sequelize = new Sequelize('node_course', 'root', 'Komlete8', {
  dialect: 'mysql',
  host: 'localhost'
});

module.exports = sequelize;
