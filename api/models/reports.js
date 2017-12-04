//---------------
//  Database Table: Reports
//---------------

const Sequelize = require('sequelize');
var database = require('../../config/database').database;

// Defines the table modelq
const Reports = database.define('reports', {
    report_date: Sequelize.TEXT,
    completion_time: Sequelize.TEXT,
    queries_failed: Sequelize.INTEGER,
    success: Sequelize.BOOLEAN,
    comments: Sequelize.TEXT
}, {
    timestamps: false // Sequelize auto-generates timestamps, we don't want these
});

module.exports.Reports = Reports; // Export that variable boiii
