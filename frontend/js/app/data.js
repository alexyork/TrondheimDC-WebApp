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
        speakerIds: [1],
        tags: [ "backbone", "javascript", "lolcats" ]
    },
    {
        id: 2,
        title: "See! I told you Backbone.js rocks!",
        speakerIds: [2],
        tags: [ "backbone", "javascript", "bill-murray" ]
    },
    {
        id: 3,
        title: "The art of changing your mind",
        speakerIds: [1, 2],
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
