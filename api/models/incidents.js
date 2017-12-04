//---------------
//  Database Table: Incidents
//---------------

const Sequelize = require('sequelize');
var database = require('../../config/database').database;

// Defines the table model
const Incidents = database.define('incidents', {
    incident_date: Sequelize.TEXT,
    ticket: Sequelize.STRING(11),
    short_description: Sequelize.TEXT,
    long_description: Sequelize.TEXT,
    rca: Sequelize.TEXT,
    erp: Sequelize.STRING(8),
    type: Sequelize.TEXT
}, {
    timestamps: false // Sequelize auto-generates timestamps, we don't want these
});

module.exports.Incidents = Incidents; // Export that variable boiii
