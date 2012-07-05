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
        tags: [ "backbone", "javascript", "lolcats" ],
        starts: new Date(2012, 09, 01, 10, 00, 00),
        ends: new Date(2012, 09, 01, 10, 45, 00)
    },
    {
        id: 2,
        title: "See! I told you Backbone.js rocks!",
        speakerIds: [2],
        tags: [ "backbone", "javascript", "bill-murray" ],
        starts: new Date(2012, 09, 01, 10, 15, 00),
        ends: new Date(2012, 09, 01, 11, 00, 00)
    },
    {
        id: 3,
        title: "The art of changing your mind",
        speakerIds: [1, 2],
        tags: [ "no-backbone", "mindset", "lol" ],
        starts: new Date(2012, 09, 01, 12, 00, 00),
        ends: new Date(2012, 09, 01, 12, 45, 00)
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
