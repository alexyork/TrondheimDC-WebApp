if (typeof TrondheimDC === "undefined" || !TrondheimDC) {
    TrondheimDC = {};
}
if (typeof TrondheimDC.Routers === "undefined" || !TrondheimDC.Routers) {
    TrondheimDC.Routers = {};
}

TrondheimDC.Routers.AppRouter = Backbone.Router.extend({
    
    initialize: function(options) {
        options.delegateView ? this.setupDelegateView( options.delegateView ) : void 0
    },

    setupDelegateView: function(view) {
        view.$el.delegate('a', 'click.router', _.bind(this.clickListener, this));
    },

    sameOrigin: function(location, test) {
        var port, origin;
        port = location.port && location.port != '80' ? ':' + location.port : '';
        origin = location.protocol + '//' + location.hostname + port;
        return test.match( origin ) ? true : false;
    },

    clickListener: function(event) {
        var url, path;
        url = event.currentTarget.href;
        if ( !this.sameOrigin(window.location, url) ) {
            return null;
        }
        
        event.preventDefault();
        path = event.currentTarget.pathname + event.currentTarget.search;
        this.navigate(path, { trigger: true });
    }
    
});
