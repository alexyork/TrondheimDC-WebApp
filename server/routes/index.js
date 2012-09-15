var fs = require('fs');

/*
 * GET home page.
 */
exports.index = function(req, res) {
    console.log("dirname: " + __dirname);
    
    fs.readdir(__dirname + "/../", function(err, files) {
        for (var i = 0; i < files.length; i++) {
            console.log("One level up: " + files[i]);
        }
    });
    
    fs.readdir(__dirname + "/../../", function(err, files) {
        for (var i = 0; i < files.length; i++) {
            console.log("Two levels up: " + files[i]);
        }
    });
    
    fs.readFile(__dirname + '/../../frontend/app.html', 'utf8', function(err, html) {
        if (err) {
            return res.send(err)
        }
        return res.send(html);
    });
};