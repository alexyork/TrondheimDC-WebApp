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
      "click .tag": "filterByTag"
    },
    
    initialize: function() {
    },
    
    render: function() {
        var sessionHtml = this.template( this.model.toJSON() );
        this.$el.html(sessionHtml);
        return this;
    },
    
    filterByTag: function(e) {
        var tag = e.currentTarget.innerText;
        window.app.trigger("filter:tag", tag);
    }
    
});
