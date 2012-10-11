if (typeof TrondheimDC === "undefined" || !TrondheimDC) {
    TrondheimDC = {};
}
if (typeof TrondheimDC.Models === "undefined" || !TrondheimDC.Models) {
    TrondheimDC.Models = {};
}

TrondheimDC.Models.Session = Backbone.Model.extend({

    matchesTitle: function(searchTerm) {
        return this.get("title").toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
    },

    matchesSpeaker: function(searchTerm) {
        var speakers = this.get("speakers");
        if(!speakers) return false

        function clean(s) {
            if(!s) return null
            return s.replace(/\s*/g, "").toLowerCase()
        }

        for ( var i = 0; i < speakers.length; i++ ) {
            var cleanedSpeakerName = clean(speakers[i].name)
            if(!cleanedSpeakerName) return false
            if( cleanedSpeakerName.match(clean(searchTerm)) ) {
                return true
            }
        }
        return false;
    },

    isPresentedBy: function(speakerId) {
        var speakers = this.get("speakers");
        if(!speakers) return false
        for (var i = 0; i < speakers.length; i++) {
            if (speakers[i].id == speakerId) {
                return true;
            }
        }
        return false;
    },
    
    matchesTrack: function(searchTerm) {
        var match = searchTerm.match(/track[\s|\:]*([1-9]*)/i)
        if( match && match.length && this.get("track") == match[1] )
            return true
        return false;
    },

    containsTag: function(tagToSearchFor) {
        var tags = this.get("tags");
        var matchFound = false;
        _.each(tags, function(tag) {
            if (tagToSearchFor.toLowerCase() === tag.toLowerCase()) {
                matchFound = true;
            }
        });
        return matchFound;
    },

    timeslotConflictsWith: function(session) {
        if ((session.get('starts') >= this.get('starts') && session.get('starts') <= this.get('ends')) ||
            (session.get('ends') >= this.get('starts') && session.get('ends') <= this.get('ends'))) {
            return true;
        } else {
            return false;
        }
    },

    isFavourited: function() {
        var currentFavourites = JSON.parse( localStorage.getItem(TrondheimDC.Models.Session.localStorageFavouritesKey) );
        if (!currentFavourites || !currentFavourites.length) {
            return false;
        }
        return ( currentFavourites.indexOf(this.get('id')) !== -1 );
    },

    favourite: function() {
        var currentFavourites;
        try {
            currentFavourites = JSON.parse( localStorage.getItem(TrondheimDC.Models.Session.localStorageFavouritesKey) );
            if (!currentFavourites) {
                currentFavourites = [];
            }
            if (this.isFavourited()) { 
                return null;
            }
            currentFavourites.push(this.get('id'));
            localStorage.setItem( TrondheimDC.Models.Session.localStorageFavouritesKey, JSON.stringify(currentFavourites) );
            
            this.trigger('change:favourited', this, true);
            window.app.trigger('change:favourited', this, true);
        } catch (e) {
            this.trigger('error', e);
        }
    },

    unfavourite: function() {
        var currentFavourites, idIndex;
        try {
            currentFavourites = JSON.parse( localStorage.getItem(TrondheimDC.Models.Session.localStorageFavouritesKey) );
            if (currentFavourites) {
                idIndex = currentFavourites.indexOf(this.get('id'));
                if (idIndex !== -1) {
                    currentFavourites.splice(idIndex, 1);
                }
                localStorage.setItem( TrondheimDC.Models.Session.localStorageFavouritesKey, JSON.stringify(currentFavourites) );
                
                this.trigger('change:favourited', this, false);
                window.app.trigger('change:favourited', this, false);
            }   
        } catch(e) {
            this.trigger('error', e);
        }
    },

    toJSON: function() {
        var json = this.attributes;
        json.favourited = this.isFavourited();
        return json;
    }
    
},
{
    // Statics
    localStorageFavouritesKey: "favouriteSessions"
});
