;(function() {
  var CLICK = false

  if( navigator.userAgent.toLowerCase().indexOf( 'iphone' ) === -1 ) {
    CLICK = true
  }


  $.event.special.tap = {
    setup: function() {
      var self = this,
          $this = $( self )
          
      function triggerCustomEvent( obj, eventType, event ) {
        var originalType = event.type;
        event.type = eventType;
        $.event.handle.call( obj, event );
        event.type = originalType;
      }

      var startPos, currentPos, moved
      

      if( CLICK ) {
        $this.bind( "click", function( event ) {
          triggerCustomEvent( self, "tap", event )
        })        
        return
      }

      $this.bind( "touchstart.tap", function( event ) {
        
        var origTarget = event.target
        
        if ( event.which && event.which !== 1 ) {
          return false;
        }

        startPos = {}
        startPos.x = event.originalEvent.touches[0].clientX
        startPos.y = event.originalEvent.touches[0].clientY

        moved = false

        $this.bind( "touchmove.tap", function( event ) {
          currentPos = {}
          currentPos.x = event.originalEvent.touches[0].clientX
          currentPos.y = event.originalEvent.touches[0].clientY
          if( startPos.x - currentPos.x < -2 || startPos.x - currentPos.x > 2 ) {
            moved = true
          } else if( startPos.y - currentPos.y < -2 || startPos.y - currentPos.y > 2 ) {
            moved = true
          } else {
            moved = false
          }
        })
      
        $this.one( "touchend.tap", function( event ) {
          event.preventDefault()
          $this.unbind("touchmove.tap")
          if( !moved ) {
            if ( origTarget === event.target ) {
              triggerCustomEvent( self, "tap", event )
            }
          }
        })

      });

    }
  }
  
})();
