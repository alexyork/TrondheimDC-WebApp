if (typeof TrondheimDC === "undefined" || !TrondheimDC) {
    TrondheimDC = {};
}
if (typeof TrondheimDC.Views === "undefined" || !TrondheimDC.Views) {
    TrondheimDC.Views = {};
}

TrondheimDC.Views.AppView = Backbone.View.extend({
    
    el: $("body"),

    setContentView: function(view) {
        if(this.contentView) {
            this.contentView.unbind();
            this.contentView.remove();
        }
        if(view) {
            this.contentView = view;
            this.$el.find("#app-content").html( $(this.contentView.el) );
        }
    }
    
});
