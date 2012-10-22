if (typeof TrondheimDC === 'undefined' || !TrondheimDC) {
    TrondheimDC = {};
}
if (typeof TrondheimDC.Views === 'undefined' || !TrondheimDC.Views) {
    TrondheimDC.Views = {};
}

TrondheimDC.Views.SessionsByTimeslotListView = TrondheimDC.Views.TDCView.extend({
    
    tagName: 'div',
    className: 'timeslots-list',
    template: _.template( document.getElementById('sessions-by-timeslot-list-template').innerHTML ),

    events: {
        'click .search': 'searchButtonClicked',
        'click .reset': 'resetButtonClicked',
        'keydown .searchTerm': 'keydownSearch',
        'click .toggleSearch': 'toggleSearchSection'
    },
    
    ListViewClass: TrondheimDC.Views.SessionsListView,

    initialize: function() {
        window.app.on('filter:tag', this.search, this);
    },
    
    render: function(collection, showSearchArea) {
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
            
            var sessionsListView = new this.ListViewClass({ collection: sessionsList });
            sessionsListView.render();
            
            timeslotView.$el.append( sessionsListView.el );
            $list.append( timeslotView.el );
        }, this);
        
        if (showSearchArea) {
            this.$el.find(".inner").css("display", "block");
        } else {
            this.$el.find(".inner").css("display", "none");
        }
        this.setSearchHeaderText(showSearchArea);
       
        return this;
    },
    
    searchButtonClicked: function(e) {
        e.preventDefault();
        e.stopPropagation();
        
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
        var showSearchArea = true;
        this.render( matchedSessions, showSearchArea );
        this.$el.find(".searchTerm").val( searchTerm );
    },
    
    resetButtonClicked: function(e) {
        e.preventDefault();
        e.stopPropagation();
        
        var showSearchArea = true;
        this.render(null, showSearchArea);
    },
    
    toggleSearchSection: function(e) {
        e.preventDefault();
        e.stopPropagation();
        
        var $searchArea = this.$el.find(".inner");
        var searchAreaIsVisible = $searchArea.is(":visible");
        
        if (searchAreaIsVisible) {
            $searchArea.slideUp(50);
        } else {
            $searchArea.slideDown(50);
        }
        
        this.setSearchHeaderText(!searchAreaIsVisible);
    },
    
    setSearchHeaderText: function(searchAreaIsVisible) {
        this.$el.find(".header h3 a").text(
            searchAreaIsVisible
                ? "Sjul søk område"
                : "Trykk for å søk etter foredrag");
    }
    
});