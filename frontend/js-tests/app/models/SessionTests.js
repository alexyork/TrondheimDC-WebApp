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
    
});
