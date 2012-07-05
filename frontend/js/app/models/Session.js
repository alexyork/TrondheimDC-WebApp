if (typeof TrondheimDC === "undefined" || !TrondheimDC) {
    TrondheimDC = {};
}
if (typeof TrondheimDC.Models === "undefined" || !TrondheimDC.Models) {
    TrondheimDC.Models = {};
}

TrondheimDC.Models.Session = Backbone.Model.extend({

    initialize: function() {
        if(this.isFavourited())
            this.set('favourited', true)
        else
            this.set('favourited', false)
    },

    matchesTitle: function(searchTerm) {
        return this.get("title").toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
    },

    matchesSpeaker: function(searchTerm) {
    	return this.speaker.get("name").toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
    },

    isPresentedBy: function(speakerId) {
        var speakers = this.get("speakers");
        for (var i = 0; i < speakers.length; i++) {
            if (speakers[i].id == speakerId)
                return true;
        }
        return false;
    },
    
    containsTag: function(tag) {
        var tags = this.get("tags");
        var matchFound = false;
        _.each(tags, function(t) {
            if (tag.toLowerCase().indexOf(t) > -1) {
                matchFound = true;
            }
        })
        return matchFound;
    },

    isFavourited: function() {
        var currentFavourites
        currentFavourites = JSON.parse( localStorage.getItem(TrondheimDC.Models.Session.localStorageFavouritesKey) )
        if(!currentFavourites || !currentFavourites.length)
            return false
        return ( currentFavourites.indexOf(this.get('id')) !== -1 )
    },

    favourite: function() {
        var currentFavourites
        try {
            currentFavourites = JSON.parse( localStorage.getItem(TrondheimDC.Models.Session.localStorageFavouritesKey) )
            if(!currentFavourites)
                currentFavourites = []
            if(!this.isFavourited())
                currentFavourites.push(this.get('id'))
            localStorage.setItem( TrondheimDC.Models.Session.localStorageFavouritesKey, JSON.stringify(currentFavourites) )
            this.set('favourited', true)
        } catch (e) {
            this.trigger('error', e)
        }
    },

    unfavourite: function() {
        var currentFavourites, idIndex
        try {
            currentFavourites = JSON.parse( localStorage.getItem(TrondheimDC.Models.Session.localStorageFavouritesKey) )
            if(currentFavourites) {
                idIndex = currentFavourites.indexOf(this.get('id'))
                if(idIndex !== -1)
                    currentFavourites.splice(idIndex, 1)
                localStorage.setItem( TrondheimDC.Models.Session.localStorageFavouritesKey, JSON.stringify(currentFavourites) )
                this.set('favourited', false)
            }   
        } catch(e) {
            this.trigger('error', e)
        }
    }
    
},
{
    //Statics
    localStorageFavouritesKey: "favouriteSessions"
});
