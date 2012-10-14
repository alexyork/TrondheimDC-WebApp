// Workaround for Android devices that can't handle JSON.parse(null)
JSON.originalParse = JSON.parse;

JSON.parse = function(text) {
    if (text) {
        return JSON.originalParse(text);
    } else {
        return null;
    }
}