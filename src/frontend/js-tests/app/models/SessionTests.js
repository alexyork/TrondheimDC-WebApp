describe("Session", function() {

    describe("containsTag", function() {
       
       it("should report that it contains a tag, if that tag exists", function() {
          var session = new TrondheimDC.Models.Session({
              title: "Backbone.js kicks @$$",
              tags: [ "backbone", "javascript" ]
          });
          
          var result = session.containsTag("backbone");
          
          expect(result).toEqual(true);
       });
       
       it("should report that it does not contain a tag, if that tag does not exist", function() {
          var session = new TrondheimDC.Models.Session({
              title: "Backbone.js kicks @$$",
              tags: [ "backbone", "javascript" ]
          });
          
          var result = session.containsTag("foobar");
          
          expect(result).toEqual(false);
       });
       
       it("should report that it contains a tag, regardless of casing", function() {
          var session = new TrondheimDC.Models.Session({
              title: "Backbone.js kicks @$$",
              tags: [ "backbone", "javascript" ]
          });
          
          var result = session.containsTag("backBONE");
          
          expect(result).toEqual(true);
       });
        
    });
    
    describe("matchesTitle", function() {
    
        it("should match search terms if it is found in the session title", function() {
            var session = new TrondheimDC.Models.Session({
                title: "Jasmine is a great test framework!"
            });
            
            var result = session.matchesTitle("great");
            
            expect(result).toEqual(true);
        });
        
        it("should not match search terms if it is not found in the session title", function() {
            var session = new TrondheimDC.Models.Session({
                title: "Jasmine is a great test framework!"
            });
            
            var result = session.matchesTitle("foobar");
            
            expect(result).toEqual(false);
        });
    
        it("should match search terms regardless of casing", function() {
            var session = new TrondheimDC.Models.Session({
                title: "Jasmine is a great test framework!"
            });
            
            var result = session.matchesTitle("grEAT");
            
            expect(result).toEqual(true);
        });
    
    });

    describe("isPresentedBy", function() {
        
        it("should return true if the session is presented by this speaker", function() {
            var session = new TrondheimDC.Models.Session({
                title: "TDDing is smart",
                speakers: [{ id: 2, name: "Alex" }]
            });

            var result = session.isPresentedBy(2);

            expect(result).toEqual(true);
        });
        
        it("should return false if the session is not presented by this speaker", function() {
            var session = new TrondheimDC.Models.Session({
                title: "TDDing is smart",
                speakers: [{ id: 2, name: "Alex" }]
            });

            var result = session.isPresentedBy(24);

            expect(result).toEqual(false);
        });
        
    });

    describe("favourites", function() {
      
        beforeEach(function() {
            localStorage.clear();
        });

        describe("favourite", function() {
          
            it("should save the session ID to an array of favourite session ID's in localStorage", function() {
                var sessionA = new TrondheimDC.Models.Session({ id: 123 });
                var sessionB = new TrondheimDC.Models.Session({ id: 124 });
                
                sessionA.favourite();
                sessionB.favourite();
                
                var favouriteIds = getFavourites();
                
                expect(favouriteIds.length).toEqual(2);
                expect(favouriteIds).toContain(123);
                expect(favouriteIds).toContain(124);
            });

            it("should not create duplicate ID in array if already favourited", function() {
                var sessionA = new TrondheimDC.Models.Session({ id: 122 });
                
                sessionA.favourite();
                sessionA.favourite();
                
                var favouriteIds = getFavourites();
                
                expect(favouriteIds.length).toEqual(1);
                expect(favouriteIds).toContain(122);
            });

        });

        describe("unfavourite", function() {
            
            it("should delete a session ID from the array stored in localStorage", function() {
                var session = new TrondheimDC.Models.Session({ id: 123 });
                session.favourite();
                
                var favouriteIds = getFavourites();
                expect(favouriteIds).toContain(123);
                
                session.unfavourite();
                
                favouriteIds = getFavourites();
                expect(favouriteIds.length).toEqual(0);
            });
        
        });
        
        function getFavourites() {
            var favouritesKey = TrondheimDC.Models.Session.localStorageFavouritesKey;
            return JSON.parse( localStorage.getItem(favouritesKey) );
        }

    });
    
});
