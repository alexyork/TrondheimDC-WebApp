if (typeof TrondheimDC === "undefined" || !TrondheimDC) {
    TrondheimDC = {};
}
if (typeof TrondheimDC.Views === "undefined" || !TrondheimDC.Views) {
    TrondheimDC.Views = {};
}

TrondheimDC.Views.TimeslotView = TrondheimDC.Views.TDCView.extend({

    tagName: 'li',
    className: 'timeslot',
    template: _.template( document.getElementById('timeslot-template').innerHTML ),
    
    initialize: function() {
    },
    
    render: function() {
        var timeslotHtml = this.template( this.model );
        this.$el.html( timeslotHtml );
        return this;
    }

});
