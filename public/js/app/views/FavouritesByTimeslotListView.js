if (typeof TrondheimDC === 'undefined' || !TrondheimDC) {
    TrondheimDC = {};
}
if (typeof TrondheimDC.Views === 'undefined' || !TrondheimDC.Views) {
    TrondheimDC.Views = {};
}

TrondheimDC.Views.FavouritesByTimeslotListView = TrondheimDC.Views.SessionsByTimeslotListView.extend({
    
    template: _.template( document.getElementById('favourites-by-timeslot-list-template').innerHTML ),
    
    events: _.extend({  }, TrondheimDC.Views.SessionsByTimeslotListView.prototype.events),
    
    ListViewClass: TrondheimDC.Views.FavouritesListView,
});