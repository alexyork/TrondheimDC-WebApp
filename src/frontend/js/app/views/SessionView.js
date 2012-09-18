if (typeof TrondheimDC === "undefined" || !TrondheimDC) {
    TrondheimDC = {};
}
if (typeof TrondheimDC.Views === "undefined" || !TrondheimDC.Views) {
    TrondheimDC.Views = {};
}

TrondheimDC.Views.SessionView = Backbone.View.extend({
    
    tagName: 'li',
    className: 'session',
    template: _.template( document.getElementById('session-template').innerHTML ),
    
    events: {
        "click .title": "toggleOpen",
        "click .tag": "filterByTag",
        "click .favourite": "toggleFavourite"
    },
    
    initialize: function() {
    },
    
    render: function() {
        var json = this.model.toJSON();
        var sessionHtml = this.template( json );
        this.$el.html( sessionHtml );
        return this;
    },
    
    filterByTag: function( event ) {
        var tag = event.currentTarget.innerText;
        window.app.trigger( "filter:tag", tag );
    },

    toggleOpen: function( ms ) {
        var details = this.$el.find( '.details' );
        if ( !details.is(':visible') );
            app.router.navigate( 'sessions/' + this.model.get('id'), {trigger: false} );   
        details.slideToggle( ms );
    },

    toggleFavourite: function( event ) {
        if (event.currentTarget.checked) {
            this.model.favourite();
        } else {
            this.model.unfavourite();
        }
    }
    
});
