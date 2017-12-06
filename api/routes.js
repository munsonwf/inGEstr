const Incidents = require('./models/incidents.js').Incidents;
const Reports = require('./models/reports.js').Reports;
const Erps = require('./models/erp.js').Erps;
var express = require('express');
var bodyParser = require('body-parser');
var http = require('http');
var fs = require('fs');
var path = require('path');

module.exports = function(app) {

    app.use(bodyParser.urlencoded({
        extended: true
    }));
    app.use(bodyParser.json());
    app.use(express.static('public'));
    // app.use(express.static('bower_components'));

    // When user goes to localhost:3000, index.html is shown
    app.get('/', function(req, res) {
        res.sendFile(path.join(__dirname, "../public/index.html"));
    });

    app.get('/about', function(req, res) {
        res.sendFile(path.join(__dirname, "../public/about.html"));
    });

    //-----
    // incidents table endpoints
    //-----
    app.get('/incidents', function(req, res) {
        res.sendFile(path.join(__dirname, "../public/incidents.html"));
    });

    app.get('/api/incidents', function(request, response) {
        Incidents.findAll().then(incidents => {
            response.json(incidents);
        });
    });

    app.post('/api/incidents', function(request, response) {
        Incidents.create({incident_date: "yesterday"});
        response.end('Posted');
    });

    //-----
    // reports table endpoints
    //-----
    app.get('/historic_reports', function(req, res) {
        res.sendFile(path.join(__dirname, "../public/historic_reports.html"));
    });

    app.get('/api/reports', function(request, response) {
        Reports.findAll({
          order: [
            ['report_date', 'DESC']
          ]
        }).then(reports => {
                response.json(reports);
        });
    });


    app.post('/api/reports', function(request, response) {
        console.log('Post Request:\n', request.body, '\nCreating entry...');
        Reports.destroy({
            where: {
                report_date: request.body.report_date
            }
        });
        Reports.create({
            report_date: request.body.report_date,
            completion_time: request.body.completion_time,
            queries_failed: request.body.queries_failed,
            success: request.body.success,
            comments: request.body.comments
        });
        response.end('Posted');
    });

    // -----------------
    //     ERP STUFF
    // -----------------

    app.get('/erps', function(req, res) {
        res.sendFile(path.join(__dirname, "../public/erps.html"));
    });

    app.get('/api/erps', function(request, response) {
        Erps.findAll().then(erps => {
            response.json(erps);
        });
    });

    // Return most recent 14
    app.get('/api/erps/limit14', function(request, response) {
        Erps.findAll({
          order: [
            ['id', 'DESC']
          ],
          limit: 14
        }).then(erps => {
            response.json(erps);
        });
    });

    //Return most recent 140
    app.get('/api/erps/limit140', function(request, response) {
        Erps.findAll({
          order: [
            ['id', 'DESC']
          ],
          limit: 140
        }).then(erps => {
            response.json(erps);
        });
    });

    app.get('/api/erps/2', function(request, response) {
        Erps.findAll({
          order: [
            ['id', 'DESC']
          ],
          limit: 14
        }).then(erps => {
            response.json(erps);
        });
    });

    // Post.findAll({where: { id: 2 }});

    // app.post('/api/erps', function(request, response) {
    //     Erps.create({date_field: "yesterday"});
    //     response.end('Posted');
    // });

    app.post('/api/erps', function(request, response) {
        console.log('Post Request:\n', request.body, '\nCreating entry...');

        Erps.create({
            erp_name: request.body.erp_name,
            date_field: request.body.date_field,
            is_failure: request.body.is_failure
        });
        response.end('Posted');
    });


    //-----
    // Calendar endpoints
    //-----

    app.get('/calendar', function(request, response) {
        response.sendFile(path.join(__dirname, "../public/calendar.html"));
    });


}
