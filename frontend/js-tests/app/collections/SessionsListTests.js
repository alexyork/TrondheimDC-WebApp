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

    describe("setUpSpeakers", function() {
        it("should set up a speaker model for each session", function() {
            var sessionsList = new TrondheimDC.Collections.SessionsList();
            sessionsList.reset([
                { speakerId: 1 },
                { speakerId: 2 }
            ]);

            var speakersList = new TrondheimDC.Collections.SpeakersList();
            speakersList.reset([
                { id: 1, name: "Paulini" },
                { id: 2, name: "Alex" }
            ]);

            sessionsList.setUpSpeakers(speakersList);

            expect(sessionsList.models[0].speaker.get("name")).toEqual("Paulini");
            expect(sessionsList.models[1].speaker.get("name")).toEqual("Alex");
        })
    });
    
});
