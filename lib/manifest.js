
// Author: Andre Tangen jornandretangen@gmail.com
// Walk files in a directory and create a app cache manifest
// Middleware for connect/express

var walk = require('walk')


module.exports = function( settings ) {
  
  function requestHandler( req, res, next ) {
    var out, lastUpdatedTime, lastUpdatedFileName, walker

    if( req.originalUrl !== settings.url ) {
      return next()
    }

    out = "CACHE MANIFEST\n"
    lastUpdatedTime = 0

    // walk all files from root
    walker = walk.walk(settings.root, { followLinks: false })
    
    // parse file instance
    walker.on("file", function( root, fileStats, nextFile ) {
      var i, ext, hasMatch, filePath

      if( settings.extensions ) {
        hasMatch = false
        for (i = settings.extensions.length - 1; i >= 0; i--) {
          ext = "." + settings.extensions[i]
          if(fileStats.name.match(ext) )
            hasMatch = true
        }
        if(!hasMatch)
          return nextFile()
      }

      filePath = root.replace(new RegExp(".*"+settings.root), "")
      filePath = filePath + "/" + fileStats.name

      if( fileStats.mtime > lastUpdatedTime ) {
        lastUpdatedFileName = fileStats.name
        lastUpdatedTime = fileStats.mtime
      }

      out = out + filePath + "\n"
      nextFile()
    })

    // when finished walking
    walker.on("end", function() {

      // Bust chache
      out = out + "#last modified: " + lastUpdatedFileName + " at " + lastUpdatedTime + "\n"

      // send last modified based on last updated file under root
      res.set({
        "Content-Type": "text/cache-manifest",
        "Last-Modified": lastUpdatedTime.toUTCString(),
        "Content-Length": out.length
      })

      res.end(out)

    })

  }

  return requestHandler

}