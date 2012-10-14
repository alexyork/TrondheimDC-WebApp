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
        
        it("should find sessions with matching tags, and be case-insensitive", function() {
            var sessionsList = new TrondheimDC.Collections.SessionsList();
            sessionsList.reset([
                { title: "ASP.NET ModelViewController is awesome", tags: [ "MVC", ".NET" ] },
                { title: "JavaScript is awesome", tags: [ "javascript" ] }
            ]);
            
            var searchResults = sessionsList.search("mvc");
            
            expect(searchResults.length).toEqual(1);
            expect(searchResults.models[0].get("title")).toEqual("ASP.NET ModelViewController is awesome");
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

            var sessA = new TrondheimDC.Models.Session({ id: 101 });
            var sessB = new TrondheimDC.Models.Session({ id: 102 });
            var sessC = new TrondheimDC.Models.Session({ id: 103 });

            sessionsList.reset([ sessA, sessB, sessC ]);

            sessB.favourite();
            sessC.favourite();

            var favourited = sessionsList.getFavourited();
            expect(favourited.length).toEqual(2);

            var favouritedIds = favourited.map(function( favourite ) { 
                return favourite.get('id');
            });

            expect(favouritedIds).toNotContain(101);
            expect(favouritedIds).toContain(102);
            expect(favouritedIds).toContain(103);
        })
        
    })
    
    describe("getById", function() {
    
        it("should return the correct session based on the session ID", function() {
            var sessionsList = new TrondheimDC.Collections.SessionsList();

            var sessionA = new TrondheimDC.Models.Session({ id: 123, title: "Foo" });
            var sessionB = new TrondheimDC.Models.Session({ id: 666, title: "Bar" });

            sessionsList.reset([ sessionA, sessionB ]);
            
            var session = sessionsList.getById(666);
            
            expect(session.get('id')).toEqual(666);
            expect(session.get('title')).toEqual("Bar");
        });
    
    });
    
    describe("groupByTimeslot", function() {
    
        it("should return sessions grouped by timeslot", function() {
            var sessionsList = new TrondheimDC.Collections.SessionsList();

            sessionsList.reset([
                new TrondheimDC.Models.Session({ id: 1, title: "Session 1", starts: new Date(2012, 09, 29, 09, 00, 00), ends: new Date(2012, 09, 29, 09, 50, 00) }),
                new TrondheimDC.Models.Session({ id: 2, title: "Session 2", starts: new Date(2012, 09, 29, 10, 00, 00), ends: new Date(2012, 09, 29, 10, 20, 00) }),
                new TrondheimDC.Models.Session({ id: 3, title: "Session 3", starts: new Date(2012, 09, 29, 10, 30, 00), ends: new Date(2012, 09, 29, 10, 50, 00) }),
                new TrondheimDC.Models.Session({ id: 4, title: "Session 4", starts: new Date(2012, 09, 29, 11, 00, 00), ends: new Date(2012, 09, 29, 11, 50, 00) })
            ]);
            
            var groupedSessions = sessionsList.groupedByTimeslot();
            
            expect( groupedSessions["09:00 - 10:00"].length ).toEqual(1);
            expect( groupedSessions["10:00 - 11:00"].length ).toEqual(2);
            expect( groupedSessions["11:00 - 12:00"].length ).toEqual(1);
        });
    
    });
    
});
