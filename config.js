System.config({
  defaultJSExtensions: true,
  transpiler: "babel",
  babelOptions: {
    "stage": 0,
    "optional": [
      "runtime",
      "optimisation.modules.system"
    ]
  },
  paths: {
    "*": "*.js",
    "~/*": "accountingGame/*.js",
    "github:*": "jspm_packages/github/*",
    "npm:*": "jspm_packages/npm/*"
  },

  map: {
    "angular": "github:angular/bower-angular@1.4.5",
    "angular-animate": "github:angular/bower-angular-animate@1.4.5",
    "angular-ui-router": "github:angular-ui/ui-router@0.2.15",
    "angular-youtube-embed": "github:brandly/angular-youtube-embed@1.1.0",
    "babel": "npm:babel-core@5.8.23",
    "babel-runtime": "npm:babel-runtime@5.8.20",
    "core-js": "npm:core-js@0.9.18",
    "lodash": "npm:lodash@3.10.1",
    "text": "github:systemjs/plugin-text@0.0.2",
    "videogular": "github:2fdevs/bower-videogular@1.2.6",
    "github:2fdevs/bower-videogular@1.2.6": {
      "angular": "github:angular/bower-angular@1.4.5",
      "angular-sanitize": "github:angular/bower-angular-sanitize@1.4.5"
    },
    "github:angular-ui/ui-router@0.2.15": {
      "angular": "github:angular/bower-angular@1.4.5"
    },
    "github:angular/bower-angular-animate@1.4.5": {
      "angular": "github:angular/bower-angular@1.4.5"
    },
    "github:angular/bower-angular-sanitize@1.4.5": {
      "angular": "github:angular/bower-angular@1.4.5"
    },
    "github:brandly/angular-youtube-embed@1.1.0": {
      "angular": "github:angular/bower-angular@1.4.5"
    },
    "github:jspm/nodelibs-process@0.1.1": {
      "process": "npm:process@0.10.1"
    },
    "npm:babel-runtime@5.8.20": {
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:core-js@0.9.18": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:lodash@3.10.1": {
      "process": "github:jspm/nodelibs-process@0.1.1"
    }
  }
});
