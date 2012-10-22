if (typeof TrondheimDC === 'undefined' || !TrondheimDC) {
    TrondheimDC = {};
}
if (typeof TrondheimDC.Views === 'undefined' || !TrondheimDC.Views) {
    TrondheimDC.Views = {};
}

TrondheimDC.Views.FavouritesByTimeslotListView = TrondheimDC.Views.SessionsByTimeslotListView.extend({
    
    events: _.extend({  }, TrondheimDC.Views.SessionsByTimeslotListView.prototype.events),
    
    ListViewClass: TrondheimDC.Views.FavouritesListView,
});