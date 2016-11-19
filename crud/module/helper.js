var fs = require('fs');

var makeid = (length) => {
    var text = "";
    var length = length || 5;
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for( var i=0; i < length; i++ ) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    }

    return text;
};

var statPath = (path) => {
  try {
      return fs.statSync(path);
  } catch (ex) {
      return false;
  }  
};

module.exports = {
    makeid: makeid,
    statPath: statPath
};
