if (typeof TrondheimDC === 'undefined' || !TrondheimDC) {
    TrondheimDC = {};
}
if (typeof TrondheimDC.Views === 'undefined' || !TrondheimDC.Views) {
    TrondheimDC.Views = {};
}

TrondheimDC.Views.FavouritesListView = TrondheimDC.Views.SessionsListView.extend({
    
    events: _.extend({  }, TrondheimDC.Views.SessionsListView.prototype.events),

    sessionViewClass: TrondheimDC.Views.FavouritedSessionView
    
});
