$(document).ready(function() {
    bindTalksToScreen();
});

function bindTalksToScreen() {
    var talks = TrondheimDC.Talks.getAll();
    
    TrondheimDC.Templating.render({
        template: "talksListTemplate",
        data: { talks: talks },
        results: "app"
    })
}
