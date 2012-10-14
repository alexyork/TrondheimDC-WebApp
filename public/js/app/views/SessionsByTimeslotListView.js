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
        collection = collection.groupedByTimeslot();
        
        var sessionListHtml = this.template(this.model);
        
        this.$el.empty();
        this.$el.html(sessionListHtml);
        
        var $list = this.$el.find('ul');
        
        for (var timeslot in collection) {
            var timeslotView = new TrondheimDC.Views.TimeslotView({ model: timeslot });
            timeslotView.render();
            $list.append( timeslotView.el );
            
            var sessionsList = new TrondheimDC.Collections.SessionsList();
            var sessionsInTimeslot = collection[timeslot];
            sessionsList.reset( sessionsInTimeslot );
            
            var sessionsListView = new TrondheimDC.Views.SessionsListView({ collection: sessionsList });
            sessionsListView.render();
            $list.append( sessionsListView.el );
        }
        
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
        var matchedSessions = app.sessionsList.search(searchTerm);
        this.render( matchedSessions.groupByTimeslot() );
        this.$el.find(".searchTerm").val( searchTerm );
    },
    
    resetButtonClicked: function(e) {
        this.render();
    }
    
});