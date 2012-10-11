/*
 * Module dependencies.
 */
var express = require('express');

var app = module.exports = express(),
    manifest = require('./lib/manifest')


var staticPath = __dirname + '/public'

/*
 * Configuration
 */
app.configure(function() {
    app.use(express.bodyParser());
    app.use(express.methodOverride());
    app.use(app.router);
    app.use(express.static(staticPath));
});

app.configure('development', function(){
    app.use(express.errorHandler({ dumpExceptions: true, showStack: true })); 
});

app.configure('production', function(){
    app.use(express.errorHandler());
    app.use(manifest({
      'url': '/cache.manifest',
      'root': staticPath,
      'extensions': ['js', 'css', 'jpg', 'png', 'ico', 'html']
    }))
});

// Routes
require('./routes')(app)

var port = process.env.PORT || 3000;
app.listen(port, function() {
    console.log("Express server listening on port %d in %s mode", port, app.settings.env);
});