describe("SpeakersList", function() {
    
    describe("getById", function() {
        it("should find speaker with matching id", function() {
            var speakersList = new TrondheimDC.Collections.SpeakersList();
            speakersList.reset([
                { id: 1, name: "Paulini" }
            ]);
            
            var result = speakersList.getById(1);
            
            expect(result.get("name")).toEqual("Paulini");
        });
    });
    
    describe("getByIds", function() {
        it("should find all speakers with matching ID's", function() {
            var speakersList = new TrondheimDC.Collections.SpeakersList();
            speakersList.reset([
                { id: 1, name: "Alex" },
                { id: 2, name: "Pål" },
                { id: 3, name: "Andre" },
                { id: 4, name: "Hege" }
            ]);
            
            var result = speakersList.getByIds([ 1, 4 ]);
            
            expect(result.length).toEqual(2);
            expect(result.models[0].get("name")).toEqual("Alex");
            expect(result.models[1].get("name")).toEqual("Hege");
        });
    });
    
});
