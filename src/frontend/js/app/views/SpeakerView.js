if (typeof TrondheimDC === "undefined" || !TrondheimDC) {
    TrondheimDC = {};
}
if (typeof TrondheimDC.Views === "undefined" || !TrondheimDC.Views) {
    TrondheimDC.Views = {};
}

TrondheimDC.Views.SpeakerView = Backbone.View.extend({
    
    tagName: 'li',
    className: 'speaker',
    template: _.template( document.getElementById('speaker-template').innerHTML ),
    
    events: {
        "click": "navigateToSpeaker"
    },
    
    initialize: function() {
    },
    
    render: function() {
        var json = this.model.toJSON();
        //json.speaker = this.model.speaker.toString();
        var speakerHtml = this.template(json);
        this.$el.html(speakerHtml);
        return this;
    },

    navigateToSpeaker: function(ms) {
        console.log(ms);
        app.router.navigate('speakers/' + this.model.get('id'), { trigger: true });
    }
    
});
