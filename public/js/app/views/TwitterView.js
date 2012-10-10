if (typeof TrondheimDC === "undefined" || !TrondheimDC) {
    TrondheimDC = {};
}
if (typeof TrondheimDC.Views === "undefined" || !TrondheimDC.Views) {
    TrondheimDC.Views = {};
}

TrondheimDC.Views.TwitterView = TrondheimDC.Views.TDCView.extend({
    
    tagName: 'li',
    className: 'tweet',
    template: _.template( document.getElementById('twitter-template').innerHTML ),
    
    events: {
    },
    
    render: function() {
        this.addLinks();
        var tweetHtml = this.template(this.model);
        this.$el.html(tweetHtml);
        return this;
    },

    addLinks: function() {
        //TODO: Test these regexes
        var text = this.model.text;
        //replace links
        var regex = /(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/gi;
        var replacement = '<a href="$1" rel="nofollow" title="$1">$1</a>';
        text = text.replace(regex, replacement);
        //replace handles
        regex = /@([a-zA-Z0-9_]*)/gi;
        replacement = '<a href="http://twitter.com/$1" title="$1 profile on Twitter" rel="nofollow">@$1</a>';
        text = text.replace(regex, replacement);
        //replace hashtags
        regex = /\#([a-zA-Z0-9_]*)/gi;
        replacement = '<a href="http://search.twitter.com/search?q=%23$1" title="search for $1 on Twitter" rel="nofollow">\#$1</a>';
        text = text.replace(regex, replacement);

        this.model.text = text;
    }
    
});
