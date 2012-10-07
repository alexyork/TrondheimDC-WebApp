if (typeof TrondheimDC === 'undefined' || !TrondheimDC) {
    TrondheimDC = {};
}
if (typeof TrondheimDC.Views === 'undefined' || !TrondheimDC.Views) {
    TrondheimDC.Views = {};
}

TrondheimDC.Views.SessionsListView = Backbone.View.extend({
    
    tagName: 'div',
    className: 'sessions-list',
    template: _.template( document.getElementById('sessions-list-template').innerHTML ),
    
    render: function(collection) {
        var collection = collection || this.collection;
        var sessionListHtml = this.template(this.model);
        
        this.$el.empty();
        this.$el.html(sessionListHtml);

        collection.each(function( session ) {
            var sessionView = new TrondheimDC.Views.SessionView({ model: session });
            sessionView.render();
            this.$el.find('ul').append( sessionView.el );
        }, this);
        return this;
    }
    
});
