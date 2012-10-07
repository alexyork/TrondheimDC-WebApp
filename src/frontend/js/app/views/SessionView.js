if (typeof TrondheimDC === "undefined" || !TrondheimDC) {
    TrondheimDC = {};
}
if (typeof TrondheimDC.Views === "undefined" || !TrondheimDC.Views) {
    TrondheimDC.Views = {};
}

TrondheimDC.Views.TimeslotView = Backbone.View.extend({

    tagName: 'li',
    className: 'timeslot',
    
    initialize: function() {
    },
    
    render: function() {
        var sessionHtml = "<span>" + this.model + "</span>";
        this.$el.html( sessionHtml );
        return this;
    }

});

TrondheimDC.Views.SessionView = Backbone.View.extend({
    
    tagName: 'li',
    className: 'session',
    template: _.template( document.getElementById('session-template').innerHTML ),
    
    events: {
        "click .title": "navigateToSession",
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

    toggleFavourite: function( event ) {
        if (event.currentTarget.checked) {
            this.model.favourite();
            window.app.trigger( "session:favourite", this.model.get("id") );
        } else {
            this.model.unfavourite();
            window.app.trigger( "session:unfavourite", this.model.get("id") );
        }
    },
    
    navigateToSession: function() {
        app.router.navigate('sessions/' + this.model.get('id'), { trigger: true });
    }
    
});
