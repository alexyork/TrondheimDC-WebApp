if (typeof TrondheimDC === "undefined" || !TrondheimDC) {
    TrondheimDC = {};
}
if (typeof TrondheimDC.Views === "undefined" || !TrondheimDC.Views) {
    TrondheimDC.Views = {};
}

TrondheimDC.Views.AppView = TrondheimDC.Views.TDCView.extend({
    
    el: $("body"),

    events: {
    },

    setSelectedTab: function( name ) {
        this.$el.find( 'header nav ul li.selected' ).removeClass( 'selected' );
        this.$el.find( 'header nav ul li a[href="' + name + '"]' ).parents( 'li' ).addClass( 'selected' );
    },

    setContentView: function( name, view ) {
        if (this.contentView) {
            this.contentView.unbind();
            this.contentView.remove();
        }
        if (view) {
            this.setSelectedTab( name );
            this.contentView = view;
            this.$el.find("#app-content").html( $(this.contentView.el) );
        }
    }
    
});
