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
    
    describe("matchesSpeaker", function() {

      it("should be ignorant of whitespace", function() {
        var session = new TrondheimDC.Models.Session({
          speakers: [{
            name: "Alex York"
          }]
        })

        expect(session.matchesSpeaker("Alex   York")).toEqual(true)
        expect(session.matchesSpeaker("AlexYork  ")).toEqual(true)
        expect(session.matchesSpeaker("  Alex  York")).toEqual(true)

      })

      it("should match on one or none parts of the name on name regardless of case", function() {
        var session = new TrondheimDC.Models.Session({
          speakers: [{
            name: "Andre Tangen"
          }]
        })

        expect(session.matchesSpeaker("Andre Tangen")).toEqual(true)
        expect(session.matchesSpeaker("andre tangen")).toEqual(true)
        expect(session.matchesSpeaker("andre tangen")).toEqual(true)
        expect(session.matchesSpeaker("andRe")).toEqual(true)
        expect(session.matchesSpeaker("tangeN")).toEqual(true)

      })

    })

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

    describe("matchesTrack", function() {

      it("should match the track regardless of spacing between between 'track' and id", function() {
          var session = new TrondheimDC.Models.Session({
            track: 1
          })

          expect(session.matchesTrack("track1")).toEqual(true)
          expect(session.matchesTrack("track 1")).toEqual(true)
          expect(session.matchesTrack("track     1")).toEqual(true)

      })

      it("should match on track:id and track:  id", function() {
        var session = new TrondheimDC.Models.Session({
          track: 2
        })

        expect(session.matchesTrack("track:2")).toEqual(true)
        expect(session.matchesTrack("track: 2")).toEqual(true)
      })

      it("should match the track regardless of casing", function() {
        var session = new TrondheimDC.Models.Session({
          track: 3
        })

        expect(session.matchesTrack("track 3")).toEqual(true)
        expect(session.matchesTrack("TraCk 3")).toEqual(true)
        expect(session.matchesTrack("TRACK 3")).toEqual(true)

      })

      it("should not match if the term contains track but uncorect id, and not on correct id but not containing keyword track", function() {
        var session = new TrondheimDC.Models.Session({
          track: 4
        })

        expect(session.matchesTrack("track 3")).toEqual(false)
        expect(session.matchesTrack("trackss 4")).toEqual(false)

      })

    })

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

            it("Should trigger the 'change:favourited' event with parameter true of false coresponsing to state", function( done ) {
              var sessionA = new TrondheimDC.Models.Session({})

              var states = []

              sessionA.on('change:favourited', function(model, state) {
                states.push(state)
              })

              sessionA.favourite()
              sessionA.unfavourite()
              sessionA.favourite()

              expect(states[ 0 ]).toEqual( true )
              expect(states[ 1 ]).toEqual( false )
              expect(states[ 2 ]).toEqual( true  )

            })

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
