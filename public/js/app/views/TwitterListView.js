if (typeof TrondheimDC === 'undefined' || !TrondheimDC) {
    TrondheimDC = {};
}
if (typeof TrondheimDC.Views === 'undefined' || !TrondheimDC.Views) {
    TrondheimDC.Views = {};
}

TrondheimDC.Views.TwitterListView = TrondheimDC.Views.TDCView.extend({
    
    tagName: 'ul',
    className: 'tweets',
    template: _.template( "" ),
    
    events: {
    },

    tweets: [],
    
    initialize: function() {
        var that = this;
        $.getJSON("http://search.twitter.com/search.json?q=%23tdconf&rpp=25&callback=?", function (data) {
            that.tweets = data.results;
            that.render();
        });
    },
    
    render: function() {
        var twitterListHtml = this.template();
        
        this.$el.empty();
        this.$el.html(twitterListHtml);
        
        var that = this;
        
        $.each(this.tweets, function(i, tweet) {
            var twitterView = new TrondheimDC.Views.TwitterView({ model: tweet });
            twitterView.render();
            that.$el.append(twitterView.el);
        });

        return this;
    }
    
});
