const Sequelize = require('sequelize');

// Database connection string
const sequelize = new Sequelize('postgres://postgres:postgres@localhost:5433/mos_incidents');

// MOS QA-1
// postgresql://usapomizzcgurlwn:6iqlq8fl35flsht21rozqv1pt@localhost:7996/qa-1

module.exports.database = sequelize;
