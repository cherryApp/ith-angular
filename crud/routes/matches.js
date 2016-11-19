// https://github.com/opendatajson/football.json
var helper = require('../module/helper');
var express = require('express');
var router = express.Router();
var path = require('path');
var fs = require('fs');
var config = require('../module/config');

var basePath = path.join(
    config.vars.dirname,
    'db/soccer.json'
);

// Create new file from template.
var createFileFromTemplate = (path, templatePath, callback) => {
    fs.readFile(templatePath, 'utf8', (err, tempData) => {
        fs.writeFile(path, tempData, 'utf8', (err, fileData) => {
            callback(tempData);
        });
    });
};

// Read file and get matches.
var getJsonFile = (filePath, callback) => {
    if (helper.statPath(filePath)) { 
        fs.readFile(filePath, 'utf8', (err, data) => {
            callback(JSON.parse(data));            
        });
    } else {
        createFileFromTemplate(filePath, basePath, (tempData) => {
            callback(JSON.parse(tempData));
        });
    }
};

/* GET home page. */
router.get('/', (req, res, next) => {
    var filePath = basePath.replace('soccer', 'soccer_'+req.cookies.ith);
    getJsonFile(filePath, (jsonObject) => {
        res.setHeader('Content-Type', 'application/json');
        res.send(JSON.stringify(jsonObject.matches, null, 4));
    });
});

// Update.
router.post('/:id', (req, res, next) => {
    var filePath = basePath.replace('soccer', 'soccer_'+req.cookies.ith);
    getJsonFile(filePath, (jsonObject) => {
        jsonObject.matches[req.params.id] = req.body;
        fs.writeFile(filePath, JSON.stringify(jsonObject), 'utf8', (err, data) => {
            res.send(JSON.stringify({success: true}, null, 4));
        });
    });
});

// Delete.
router.delete('/:id', (req, res, next) => {
    var filePath = basePath.replace('soccer', 'soccer_'+req.cookies.ith);
    getJsonFile(filePath, (jsonObject) => {
        jsonObject.matches.splice(req.params.id, 1);
        fs.writeFile(filePath, JSON.stringify(jsonObject), 'utf8', (err, data) => {
            res.send(JSON.stringify({success: true}, null, 4));
        });
    });
});

module.exports = router;
