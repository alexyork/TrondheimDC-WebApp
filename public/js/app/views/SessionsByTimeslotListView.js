if (typeof TrondheimDC === 'undefined' || !TrondheimDC) {
    TrondheimDC = {};
}
if (typeof TrondheimDC.Views === 'undefined' || !TrondheimDC.Views) {
    TrondheimDC.Views = {};
}

TrondheimDC.Views.SessionsByTimeslotListView = TrondheimDC.Views.TDCView.extend({
    
    tagName: 'div',
    className: 'timeslots-list',
    template: _.template( document.getElementById('list-template').innerHTML ),

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
        var groupedTimeslots = collection.groupedByTimeslot( TrondheimDC.Data.timeslots );
        var sessionListHtml = this.template(this.model);
        
        this.$el.empty();
        this.$el.html(sessionListHtml);
        
        var $list = this.$el.find('ul');
        
        _.each(groupedTimeslots, function(sessionGroup) {
            var timeslotView = new TrondheimDC.Views.TimeslotView({ model: sessionGroup });
            timeslotView.render();
            
            var sessionsList = new TrondheimDC.Collections.SessionsList();
            sessionsList.reset( sessionGroup.sessions );
            
            var sessionsListView = new TrondheimDC.Views.SessionsListView({ collection: sessionsList });
            sessionsListView.render();
            
            timeslotView.$el.append( sessionsListView.el );
            $list.append( timeslotView.el );
        });
       
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
        // TODO: is there a better way than accessing "app.sessionsList" from here?
        var matchedSessions = app.sessionsList.search( searchTerm );
        this.render( matchedSessions );
        this.$el.find(".searchTerm").val( searchTerm );
    },
    
    resetButtonClicked: function(e) {
        this.render();
    }
    
});