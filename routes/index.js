var fs = require('fs')

/*
 * GET home page.
 */
module.exports = function( app ) {
  
  app.get('/', function( req, res ) {
    var htmlStream = fs.createReadStream( __dirname + '/../public/app.html' );

    htmlStream.on( 'error', function( err ) {
        console.log( 'error', err );
        res.send( 'internal server error', 500 );
    });
    
    htmlStream.pipe( res );
  })

}