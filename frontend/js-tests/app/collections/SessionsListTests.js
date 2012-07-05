describe("SessionsList", function() {
    
    describe("search", function() {
        
        it("should find sessions with matching tags", function() {
            var sessionsList = new TrondheimDC.Collections.SessionsList();
            sessionsList.reset([
                { title: "Jasmine is awesome", tags: [ "tdd", "unit-testing" ] },
                { title: "JavaScript is awesome", tags: [ "javascript" ] }
            ]);
            
            var searchResults = sessionsList.search("tdd");
            
            expect(searchResults.length).toEqual(1);
            expect(searchResults.models[0].get("title")).toEqual("Jasmine is awesome");
        });
        
        it("should find sessions with matching titles", function() {
            var sessionsList = new TrondheimDC.Collections.SessionsList();
            sessionsList.reset([
                { title: "Jasmine is awesome", tags: [ "tdd", "unit-testing" ] },
                { title: "JavaScript is awesome", tags: [ "javascript" ] }
            ]);
            
            var searchResults = sessionsList.search("Jasmine");
            
            expect(searchResults.length).toEqual(1);
            expect(searchResults.models[0].get("title")).toEqual("Jasmine is awesome");
        });
    });

    describe("getBySpeakerId", function() {
        
        it("should return the correct speaker based on the speaker id", function() {
            var sessionsList = new TrondheimDC.Collections.SessionsList();
            sessionsList.reset([
                { title: "TDDing is smart", speakers: [{ id: 37, name: "Pauline" }] },
                { title: "Backbone kicks ass", speakers: [{ id: 43, name: "Alex" }, { id: 84, name: "Andre" }] }
            ]);

            var searchResults = sessionsList.getBySpeakerId(37);

            expect(searchResults.length).toEqual(1);
            expect(searchResults.models[0].get("speakers")[0].name).toEqual("Pauline");
        });
        
    })

    describe("getFavourited", function() {
        
        it("should return all sessions where sessions id is contained by array stored on key TrondheimDC.Models.Session.localStorageFavouritesKey in localStorage", function() {
            var sessionsList = new TrondheimDC.Collections.SessionsList();

            var sessA = new TrondheimDC.Models.Session({ id: 101 })
            var sessB = new TrondheimDC.Models.Session({ id: 102 })
            var sessC = new TrondheimDC.Models.Session({ id: 103 })

            sessionsList.reset([ sessA, sessB, sessC ])

            sessB.favourite()
            sessC.favourite()

            var favourited = sessionsList.getFavourited()
            expect(favourited.length).toEqual(2)

            var favouritedIds = favourited.map(function( favourite ) { 
                return favourite.get('id')
            })

            expect(favouritedIds).toNotContain(101)
            expect(favouritedIds).toContain(102)
            expect(favouritedIds).toContain(103)
        })
        

    })
    
});
