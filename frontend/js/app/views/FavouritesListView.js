if (typeof TrondheimDC === 'undefined' || !TrondheimDC) {
    TrondheimDC = {};
}
if (typeof TrondheimDC.Views === 'undefined' || !TrondheimDC.Views) {
    TrondheimDC.Views = {};
}

TrondheimDC.Views.FavouritesListView = Backbone.View.extend({
    
    tagName: 'div',
    className: 'sessions-list',
    template: _.template( document.getElementById('list-template').innerHTML ),
    
    sessionViews: {},

    events: {
        'click .search': 'searchButtonClicked',
        'click .reset': 'resetButtonClicked',
        'keydown .searchTerm': 'keydownSearch'
    },
    
    initialize: function() {
        window.app.on('filter:tag', this.search, this);
    },
    
    render: function(collection) {
        var collection = collection || this.collection;
        var sessionListHtml = this.template(this.model);
        
        this.$el.empty();
        this.$el.html(sessionListHtml);

        collection.each(function( session ) {
            if (session.isFavourited()) {
                var sessionView = new TrondheimDC.Views.SessionView({ model: session });
                sessionView.render();
                this.$el.find('ul').append( sessionView.el );
                this.sessionViews[ session.get('id') ] = sessionView;
            }
        }, this);
        return this;
    },
    
    searchButtonClicked: function(e) {
        e.preventDefault();
        var searchTerm = this.$el.find('.searchTerm').val();
        this.search( searchTerm );
    },

    keydownSearch: function(e) {
        if ( e.keyCode == 13 ) {
            this.search( $(".searchTerm").val() );   
        }
    },
    
    search: function(searchTerm) {
        var matchedSessions = this.collection.search( searchTerm );
        this.render( matchedSessions );
        $(".searchTerm").val( searchTerm );
    },
    
    resetButtonClicked: function(e) {
        this.render();
    },

    toggleOpenSessionBySessionId: function(sessionId, ms) {
        if( typeof this.sessionViews[sessionId] !== 'undefined' ) {
            this.sessionViews[sessionId].toggleOpen(ms)   
        }
    }
    
});
