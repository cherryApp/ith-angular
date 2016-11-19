// https://github.com/opendatajson/football.json
var helper = require('../module/helper');
var express = require('express');
var router = express.Router();
var path = require('path');
var config = require('../module/config');

/* GET home page. */
router.get('/', (req, res, next) => {
    let filePath = path.join(
        config.vars.dirname,
        'db/soccer.json'
    );
    res.sendFile(filePath);
});

module.exports = router;
