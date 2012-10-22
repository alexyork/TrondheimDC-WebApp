if (typeof TrondheimDC === "undefined" || !TrondheimDC) {
    TrondheimDC = {};
}
if (typeof TrondheimDC.Views === "undefined" || !TrondheimDC.Views) {
    TrondheimDC.Views = {};
}

TrondheimDC.Views.SessionView = TrondheimDC.Views.TDCView.extend({
    
    tagName: 'li',
    className: 'session',
    template: _.template( document.getElementById('session-template').innerHTML ),
    
    events: {
        "click .title": "navigateToSession",
        "click .tag": "filterByTag",
        "click input.favourite": "toggleFavourite"
    },
    
    initialize: function() {
    },
    
    render: function() {
        var json = this.model.toJSON();
        
        // TODO: move this code down to the Session model object.
        // For now I am just shoving it here to make it work, quickly.
        var duration = moment(json.ends).diff(json.starts, "minutes");
        json.duration = duration;
        if (duration === 15) {
            var cssClass = this.$el.attr("class");
            this.$el.attr("class", cssClass + " lightningTalk")
        }
        
        var sessionHtml = this.template( json );
        this.$el.html( sessionHtml );
        return this;
    },
    
    filterByTag: function( event ) {
        var tag = event.currentTarget.innerText;
        app.router.navigate("sessions", {trigger:true});
        window.app.trigger( "filter:tag", tag );
    },

    toggleFavourite: function( event ) {
        if (event.currentTarget.checked) {
            this.model.favourite();
            this.trackEvent("Session", "Favorite", "SessionID-" + this.model.get("id"), 1);

        } else {
            this.model.unfavourite();
            this.trackEvent("Session", "Favorite", "SessionID-" + this.model.get("id"), -1);
        }
    },
    
    navigateToSession: function() {
        app.router.navigate('sessions/' + this.model.get('id'), { trigger: true });
    }
    
});
