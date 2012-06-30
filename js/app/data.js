if (typeof TrondheimDC === "undefined" || !TrondheimDC) {
    TrondheimDC = {};
}

TrondheimDC.getAllSessions = function() {
    return [
        {
            title: "Maybe Backbone.js rocks, afterall...",
            speaker: "Alex York",
            tags: [ "backbone", "javascript", "lolcats" ]
        },
        {
            title: "See! I told you Backbone.js rocks!",
            speaker: "Andre Tangen",
            tags: [ "backbone", "javascript", "bill-murray" ]
        }
    ];
};
