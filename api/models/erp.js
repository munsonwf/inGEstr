//---------------
//  Database Table: Erp
//---------------

const Sequelize = require('sequelize');
var database = require('../../config/database').database;

// Defines the table model
const Erps = database.define('erps', {
    erp_name: Sequelize.TEXT,
    date_field: Sequelize.TEXT,
    is_failure: Sequelize.BOOLEAN
}, {
    timestamps: false // Sequelize auto-generates timestamps, we don't want these
});

// const Program = sequelize.define('erps', {
//   erp_name: {
//     type: Sequelize.STRING
//   },
//   date_field: {
//     type: Sequelize.STRING
//   },
//   is_failure: {
//     type: Sequelize.BOOLEAN
//   }
// });

module.exports.Erps = Erps; // Export that variable boiii
