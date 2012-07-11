if (typeof TrondheimDC === "undefined" || !TrondheimDC) {
    TrondheimDC = {};
}
if (typeof TrondheimDC.Views === "undefined" || !TrondheimDC.Views) {
    TrondheimDC.Views = {};
}

TrondheimDC.Views.TwitterView = Backbone.View.extend({
    
    tagName: 'li',
    className: 'tweet',
    template: _.template( document.getElementById('twitter-template').innerHTML ),
    
    events: {
    },
    
    render: function() {
        var tweetHtml = this.template(this.model);
        this.$el.html(tweetHtml);
        return this;
    }
    
});
