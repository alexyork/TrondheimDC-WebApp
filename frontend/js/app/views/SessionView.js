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
        "click .tag": "filterByTag"
    },
    
    initialize: function() {
    },
    
    render: function() {
        var json = this.model.toJSON();
        json.speaker = this.model.speaker.toString();
        var sessionHtml = this.template(json);
        this.$el.html(sessionHtml);
        return this;
    },
    
    filterByTag: function(e) {
        var tag = e.currentTarget.innerText;
        window.app.trigger("filter:tag", tag);
    },

    toggleOpen: function(ms) {
        var details = this.$el.find('.details')
        if(!details.is(':visible'))
            app.router.navigate('sessions/' + this.model.get('id'), {trigger: false})   
        details.slideToggle(ms)
    }
    
});
