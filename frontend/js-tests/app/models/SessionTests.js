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
    
    });

    describe("isPresentedBy", function() {
        it("should return true if the session is presented by this speaker", function() {
            var session = new TrondheimDC.Models.Session({
                title: "TDDing is smart"
            });

            session.speakers = [{ id: 1, name: "Paulini" }, { id: 2, name: "Alex" }];

            var result = session.isPresentedBy(1);

            expect(result).toEqual(true);
        });
    });
    
});
