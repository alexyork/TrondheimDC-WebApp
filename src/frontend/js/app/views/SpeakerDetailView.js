if (typeof TrondheimDC === "undefined" || !TrondheimDC) {
    TrondheimDC = {};
}
if (typeof TrondheimDC.Views === "undefined" || !TrondheimDC.Views) {
    TrondheimDC.Views = {};
}

TrondheimDC.Views.SpeakerDetailView = Backbone.View.extend({
    
    tagName: 'div',
    className: 'speaker',
    template: _.template( document.getElementById('speaker-detail-template').innerHTML ),
    
    events: {
    },
    
    initialize: function() {
    },
    
    render: function() {
        var json = this.collection.toJSON();
        json.sessions = app.sessionsList.getBySpeakerId(this.collection.get("id")).toJSON();
        var speakerHtml = this.template(json);
        this.$el.html(speakerHtml);
        return this;
    }
    
});
