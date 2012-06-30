var SessionView = Backbone.View.extend({
    
    tagName: 'li',
    className: 'session',
    
    events: {
      "click .tag": "filterByTag"
    },
    
    template: _.template( document.getElementById('session-template').innerHTML ),
    
    initialize: function() {
    },
    
    render: function() {
        var sessionHtml = this.template( this.model.toJSON() );
        this.$el.html(sessionHtml);
        return this;
    },
    
    filterByTag: function(e) {
    }
    
});
