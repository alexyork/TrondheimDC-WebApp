describe("Session", function() {
    
    var times = {
        "10:00:00" : new Date(2012, 01, 09, 10, 00, 00),
        "10:45:00" : new Date(2012, 01, 09, 10, 45, 00),
        "10:15:00" : new Date(2012, 01, 09, 10, 15, 00),
        "11:00:00" : new Date(2012, 01, 09, 11, 00, 00),
        "13:00:00" : new Date(2012, 01, 09, 13, 00, 00),
        "13:45:00" : new Date(2012, 01, 09, 13, 45, 00),
    }

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
            localStorage.clear()
        })

        describe("favourite", function() {
          
          it("should save the session id to and array of favourite session ids in localStorage  on key TrondheimDC.Models.Session.localStorageFavouritesKey", function() {
              var sessionA = new TrondheimDC.Models.Session({ id: 123 })
              var sessionB = new TrondheimDC.Models.Session({ id: 124 })

              sessionA.favourite()
              sessionB.favourite()

              var favouriteIds = JSON.parse(localStorage.getItem(TrondheimDC.Models.Session.localStorageFavouritesKey))

              expect(favouriteIds.length).toEqual(2)
              expect(favouriteIds).toContain(123)
              expect(favouriteIds).toContain(124)
          })

          it("should not create duplicate id in array if allready favourtied", function() {
              var sessionA = new TrondheimDC.Models.Session({ id: 122 })

              sessionA.favourite()
              sessionA.favourite()

              var favouriteIds = JSON.parse(localStorage.getItem(TrondheimDC.Models.Session.localStorageFavouritesKey))

              expect(favouriteIds.length).toEqual(1)
              expect(favouriteIds).toContain(122)
          })

      })

      describe("unfavourite", function() {

          var sessionA
          var sessionB

          beforeEach(function() {
              localStorage.clear()

              sessionA = new TrondheimDC.Models.Session({ id: 123 })
              sessionB = new TrondheimDC.Models.Session({ id: 124 })
              
              sessionA.favourite()
              sessionB.favourite()
              
              var favouriteIds = JSON.parse(localStorage.getItem(TrondheimDC.Models.Session.localStorageFavouritesKey))
              expect(favouriteIds.length).toEqual(2)
              expect(favouriteIds).toContain(123)
              expect(favouriteIds).toContain(124)
          })

          it("should delete the sessions id from the array stored in localStorage on key TrondheimDC.Models.Session.localStorageFavouritesKey", function() {
              
              sessionA.unfavourite()

              var favouriteIds = JSON.parse(localStorage.getItem(TrondheimDC.Models.Session.localStorageFavouritesKey))
              expect(favouriteIds.length).toEqual(1)
              expect(favouriteIds).toNotContain(123)
              expect(favouriteIds).toContain(124)

              sessionB.unfavourite()

              var favouriteIds = JSON.parse(localStorage.getItem(TrondheimDC.Models.Session.localStorageFavouritesKey))
              expect(favouriteIds.length).toEqual(0)

          })

      })

    })

    describe("timeslotConflictingWith", function() {
        
        it("should return true if the session parameter has a start time within the timeslot of another favourited session", function() {

            var favouritedSession = new TrondheimDC.Models.Session({
                starts: times["10:00:00"],
                ends: times["10:45:00"]
            })
            var conflictingSession = new TrondheimDC.Models.Session({
                starts: times["10:15:00"],
                ends: times["11:00:00"]
            })
            var passing = new TrondheimDC.Models.Session({
                starts: times["13:00:00"],
                ends: times["13:45:00"]
            })

            expect(
                favouritedSession.timeslotConflictsWith(conflictingSession)
            ).toEqual(true)
            expect(
                favouritedSession.timeslotConflictsWith(passing)
            ).toEqual(false)

        })

        it("should return true if the session parameter has a end time within the timeslot of another favourited session", function() {

            var favouritedSession = new TrondheimDC.Models.Session({
                starts: times["10:15:00"],
                ends: times["11:00:00"]
            })
            var conflictingSession = new TrondheimDC.Models.Session({
                starts: times["10:00:00"],
                ends: times["10:45:00"]
            })
            var passing = new TrondheimDC.Models.Session({
                starts: times["13:00:00"],
                ends: times["13:45:00"]
            })

            expect(
                favouritedSession.timeslotConflictsWith(conflictingSession)
            ).toEqual(true)
            expect(
                favouritedSession.timeslotConflictsWith(passing)
            ).toEqual(false)

        })

    })
    
});
