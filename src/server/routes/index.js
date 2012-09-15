var fs = require('fs');

/*
 * GET home page.
 */
exports.index = function(req, res) {
    //fs.readFile(__dirname + '/../../frontend/app.html', 'utf8', function(err, html) {
    fs.readFile('./frontend/app.html', 'utf8', function(err, html) {
        if (err) {
            return res.send(err)
        }
        return res.send(html);
    });
};