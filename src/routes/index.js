var fs = require('fs');

/*
 * GET home page.
 */
exports.index = function( req, res ) {

    var htmlStream = fs.createReadStream( __dirname + '/../frontend/app.html' )

    htmlStream.on( 'error', function( err ) {
      console.log( 'error', err )
      res.send( 'internal server error', 500 )
    })
    
    htmlStream.pipe( res )

}