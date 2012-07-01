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
    
});
