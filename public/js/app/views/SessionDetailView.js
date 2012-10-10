if (typeof TrondheimDC === "undefined" || !TrondheimDC) {
    TrondheimDC = {};
}
if (typeof TrondheimDC.Views === "undefined" || !TrondheimDC.Views) {
    TrondheimDC.Views = {};
}

TrondheimDC.Views.SessionDetailView = TrondheimDC.Views.TDCView.extend({
    
    tagName: 'div',
    className: 'session detail',
    template: _.template( document.getElementById('session-detail-template').innerHTML ),
    
    events: {
        'click .tag': 'tagClick'
    },
    
    initialize: function() {
    },
    
    render: function() {
        var json = this.collection.toJSON();
        json.speakers = app.speakersList.getByIds( json.speakerIds ).toJSON();
        
        var speakerHtml = this.template( json );
        this.$el.html( speakerHtml );
        return this;
    },

    tagClick: function( event ) {
        var tag = event.currentTarget.innerText;

        // somewhat dirty, but works
        window.location = "#sessions"
        setTimeout(function() {
            window.app.trigger( "filter:tag", tag );
        }, 50)
    }
    
});
