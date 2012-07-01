if (typeof TrondheimDC === 'undefined' || !TrondheimDC) {
    TrondheimDC = {};
}
if (typeof TrondheimDC.Views === 'undefined' || !TrondheimDC.Views) {
    TrondheimDC.Views = {};
}

TrondheimDC.Views.SessionsListView = Backbone.View.extend({
    
    tagName: 'div',
    className: 'sessions-list',
    template: _.template( document.getElementById('sessions-list-template').innerHTML ),
    
    events: {
        'click .search': 'searchButtonClicked'
    },
    
    initialize: function() {
        window.app.on('filter:tag', this.search, this);
    },
    
    render: function(collection) {
        var collection = collection || this.collection;
        var sessionListHtml = this.template(this.model);
        
        this.$el.empty();
        this.$el.html(sessionListHtml);

        collection.each(function(session) {
            var sessionView = new TrondheimDC.Views.SessionView({ model: session });
            sessionView.render();
            this.$el.find('ul').append(sessionView.el);
        }, this);
        return this;
    },
    
    searchButtonClicked: function(e) {
        e.preventDefault();
        var searchTerm = this.$el.find('.searchTerm').val();
        this.search(searchTerm);
    },
    
    search: function(searchTerm) {
        var matchedSessions = this.collection.search(searchTerm);
        this.render(matchedSessions);
    }
    
});
