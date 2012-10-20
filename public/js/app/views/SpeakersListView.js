if (typeof TrondheimDC === 'undefined' || !TrondheimDC) {
    TrondheimDC = {};
}
if (typeof TrondheimDC.Views === 'undefined' || !TrondheimDC.Views) {
    TrondheimDC.Views = {};
}

TrondheimDC.Views.SpeakersListView = TrondheimDC.Views.TDCView.extend({
    
    tagName: 'div',
    className: 'speakers-list',
    template: _.template( document.getElementById('speakers-list-template').innerHTML ),
    
    events: {
    },
    
    initialize: function() {
        window.app.on('filter:tag', this.search, this);
    },
    
    render: function(collection) {
        var collection = collection || this.collection;
        var speakerListHtml = this.template(this.model);
        
        this.$el.empty();
        this.$el.html(speakerListHtml);

        collection.each(function(speaker) {
            var speakerView = new TrondheimDC.Views.SpeakerView({ model: speaker });
            speakerView.render();
            this.$el.find('ul').append(speakerView.el);
        }, this);
        return this;
    }
    
});
