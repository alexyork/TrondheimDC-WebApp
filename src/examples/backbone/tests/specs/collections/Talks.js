define("tests/specs/collections/Talks",[
  "app/collections/Talks",
  "tests/data/talks"
],
function( Talks, fakedata ) {
  
  describe("app/collections/Talks", function() {

    describe("Talks.prototype.search", function() {

      it("should return all the talks where either talk.speaker, talk.title or one of talk.tags matches the search value", function() {
        //Arange
        var talks, returned
        talks = new Talks()
        talks.reset( fakedata )

        //Act
        returned = talks.search( "York" )
        //Assert
        expect( returned.size() ).to.equal( 2 )
        returned.each(function( talk ) {
          expect( talk.get("speaker") ).to.equal( "Alex York" )
        })

        //Act
        returned = talks.search( "js" )
        //Assert
        expect( returned.size() ).to.equal( 3 )
        returned.each(function( talk ) {
          expect( talk.get("tags").indexOf("js") ).not.to.equal( -1 )
        })

        //Act
        returned = talks.search( "Importance of meet" )
        //Assert
        expect( returned.size() ).to.equal( 1 )
        expect( returned.models[0].get("title") ).to.equal("Importance of meetups")
      })

    })

  })

})