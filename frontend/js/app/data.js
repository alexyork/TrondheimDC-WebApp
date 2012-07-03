if (typeof TrondheimDC === "undefined" || !TrondheimDC) {
    TrondheimDC = {};
}

TrondheimDC.getAllSessions = function() {
    return [
        {
            title: "Maybe Backbone.js rocks, afterall...",
            speakerId: 1,
            tags: [ "backbone", "javascript", "lolcats" ]
        },
        {
            title: "See! I told you Backbone.js rocks!",
            speakerId: 2,
            tags: [ "backbone", "javascript", "bill-murray" ]
        },
        {
            title: "The art of changing your mind",
            speakerId: 1,
            tags: [ "no-backbone", "mindset", "lol" ]
        },
    ];
};

TrondheimDC.getAllSpeakers = function() {
    return [
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
    ]
};