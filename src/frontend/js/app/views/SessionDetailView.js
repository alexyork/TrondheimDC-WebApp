if (typeof TrondheimDC === "undefined" || !TrondheimDC) {
    TrondheimDC = {};
}
if (typeof TrondheimDC.Views === "undefined" || !TrondheimDC.Views) {
    TrondheimDC.Views = {};
}

TrondheimDC.Views.SessionDetailView = Backbone.View.extend({
    
    tagName: 'div',
    className: 'session',
    template: _.template( document.getElementById('session-detail-template').innerHTML ),
    
    events: {
    },
    
    initialize: function() {
    },
    
    render: function() {
        var json = this.collection.toJSON();
        
        var speakers = [];
        _.each(json.speakerIds, function(speakerId, index) {
            var speaker = app.speakersList.getById(speakerId).toJSON();
            speakers.push(speaker);
        });
        json.speakers = speakers;
        console.log(json.speakers);
        
        var speakerHtml = this.template(json);
        this.$el.html(speakerHtml);
        return this;
    }
    
});
