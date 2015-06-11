System.config({
  "baseURL": "/",
  "transpiler": "babel",
  "babelOptions": {
    "optional": [
      "runtime"
    ]
  },
  "paths": {
    "*": "*.js",
    "github:*": "jspm_packages/github/*.js",
    "npm:*": "jspm_packages/npm/*.js"
  }
});

System.config({
  "map": {
    "angular": "github:angular/bower-angular@1.4.0",
    "angular-animate": "github:angular/bower-angular-animate@1.4.0",
    "angular-ui-router": "github:angular-ui/ui-router@0.2.15",
    "angular-youtube-embed": "github:brandly/angular-youtube-embed@1.0.2",
    "babel": "npm:babel-core@5.5.6",
    "babel-runtime": "npm:babel-runtime@5.5.6",
    "core-js": "npm:core-js@0.9.15",
    "ngNewRouter": "github:angular/router@0.5.3",
    "text": "github:systemjs/plugin-text@0.0.2",
    "videogular": "github:2fdevs/bower-videogular@1.2.2",
    "github:2fdevs/bower-videogular@1.2.2": {
      "angular": "github:angular/bower-angular@1.4.0",
      "angular-sanitize": "github:angular/bower-angular-sanitize@1.4.0"
    },
    "github:angular-ui/ui-router@0.2.15": {
      "angular": "github:angular/bower-angular@1.4.0"
    },
    "github:angular/bower-angular-animate@1.4.0": {
      "angular": "github:angular/bower-angular@1.4.0"
    },
    "github:angular/bower-angular-sanitize@1.4.0": {
      "angular": "github:angular/bower-angular@1.4.0"
    },
    "github:angular/router@0.5.3": {
      "angular": "github:angular/bower-angular@1.4.0"
    },
    "github:brandly/angular-youtube-embed@1.0.2": {
      "angular": "github:angular/bower-angular@1.4.0"
    },
    "github:jspm/nodelibs-process@0.1.1": {
      "process": "npm:process@0.10.1"
    },
    "npm:babel-runtime@5.5.6": {
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:core-js@0.9.15": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    }
  }
});

