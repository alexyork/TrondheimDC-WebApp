if (typeof TrondheimDC === 'undefined' || !TrondheimDC) {
    TrondheimDC = {};
}
if (typeof TrondheimDC.Views === 'undefined' || !TrondheimDC.Views) {
    TrondheimDC.Views = {};
}

TrondheimDC.Views.SpeakersListView = Backbone.View.extend({
    
    tagName: 'div',
    className: 'speakers-list',
    template: _.template( document.getElementById('list-template').innerHTML ),
    
    speakerViews: {},

    events: {
        'click .search': 'searchButtonClicked',
        'click .reset': 'resetButtonClicked',
        'keydown .searchTerm': 'keydownSearch'
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
            this.speakerViews[speaker.get('id')] = speakerView;
        }, this);
        return this;
    },
    
    searchButtonClicked: function(e) {
        e.preventDefault();
        var searchTerm = this.$el.find('.searchTerm').val();
        this.search(searchTerm);
    },

    keydownSearch: function(e) {
        if (e.keyCode == 13)
            this.search($(".searchTerm").val());
    },
    
    search: function(searchTerm) {
        /*var matchedSessions = this.collection.search(searchTerm);
        this.render(matchedSessions);
        $(".searchTerm").val(searchTerm);*/
    },
    
    resetButtonClicked: function(e) {
        this.render();
    }
    
});
