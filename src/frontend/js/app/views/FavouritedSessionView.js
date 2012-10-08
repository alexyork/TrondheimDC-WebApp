if (typeof TrondheimDC === "undefined" || !TrondheimDC) {
    TrondheimDC = {};
}
if (typeof TrondheimDC.Views === "undefined" || !TrondheimDC.Views) {
    TrondheimDC.Views = {};
}

TrondheimDC.Views.FavouritedSessionView = TrondheimDC.Views.SessionView.extend({

    events: _.extend( { }, TrondheimDC.Views.SessionView.prototype.events ),

    initialize: function() {
        this.model.on( 'change:favourited', this.changeFavouritedState, this )
    },

    changeFavouritedState: function( session, isFavourited ) {
        if( !isFavourited ) {
            this.remove()
        }
    }
        
});
