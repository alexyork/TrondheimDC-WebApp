if (typeof TrondheimDC === 'undefined' || !TrondheimDC) {
    TrondheimDC = {};
}
if (typeof TrondheimDC.Views === 'undefined' || !TrondheimDC.Views) {
    TrondheimDC.Views = {};
}

TrondheimDC.Views.TDCView = Backbone.View.extend({

    events: {
        "click #search": "showSearch"
    },
    
    trackEvent: function(category, action, label, value) {
        window.app.trigger('ga:trackEvent', {
            category: category,
            action: action,
            label: label,
            value: value
        })
    },

    showSearch: function() {
        if ($(".searchbar").is(":visible"))
            $(".searchbar").slideUp();
        else
            $(".searchbar").slideDown();
    }

});
