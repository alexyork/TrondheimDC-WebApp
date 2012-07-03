if (typeof TrondheimDC === "undefined" || !TrondheimDC) {
    TrondheimDC = {};
}
if (typeof TrondheimDC.Data === "undefined" || !TrondheimDC.Data) {
    TrondheimDC.Data = {};
}

TrondheimDC.Data.sessions = [
    {   
        id: 1,
        title: "Maybe Backbone.js rocks, afterall...",
        speakerId: 1,
        tags: [ "backbone", "javascript", "lolcats" ]
    },
    {
        id: 2,
        title: "See! I told you Backbone.js rocks!",
        speakerId: 2,
        tags: [ "backbone", "javascript", "bill-murray" ]
    },
    {
        id: 3,
        title: "The art of changing your mind",
        speakerId: 1,
        tags: [ "no-backbone", "mindset", "lol" ]
    },
];

TrondheimDC.Data.speakers = [
    {
        id: 1,
        name: "Alex York",
        description: "One happy little Englishman."
    },
    {
        id: 2,
        name: "Andre Tangen",
        description: "Bill Murray..?"
    }
];

TrondheimDC.Data.attachSpeakerNamesToSessions = function() {
    // Attach minimal speaker info to each session
    for (var i = 0; i < TrondheimDC.Data.sessions.length; i++) {
        var session = TrondheimDC.Data.sessions[i];
        var speaker = app.speakersList.getById(session.speakerId);
        session.speaker = { id: speaker.get('id'), name: speaker.get('name') };
    }    
}
