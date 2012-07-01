require.config({
  baseUrl: '../',
  shim: {
    "backbone": {
      deps: ["underscore", "js/vendor/jquery"],
      exports: "Backbone"
    },
    "underscore": {
      exports: "_"
    },
  },
  paths: {
    "backbone": "js/vendor/Backbone",
    "underscore": "js/vendor/underscore",
    "jquery": "js/vendor/jquery",
    "app": "js/app"
  },
})