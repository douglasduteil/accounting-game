System.config({
  defaultJSExtensions: true,
  transpiler: "babel",
  babelOptions: {
    "optional": [
      "runtime",
      "optimisation.modules.system"
    ],
    "stage": 0
  },
  paths: {
    "github:*": "jspm_packages/github/*",
    "npm:*": "jspm_packages/npm/*",
    "~/*": "accountingGame/*.js"
  },
  bundles: {
    "bundle.app.js": [
      "index.js",
      "accountingGame.js",
      "~/accountingGame.module",
      "~/scenes/endScene/endScene.module",
      "~/scenes/aboutScene/aboutScene.module",
      "~/scenes/inGameScene/inGameScene.module",
      "~/scenes/menuScene/menuScene.module",
      "~/scenes/inGameScene/FRAMES",
      "accountingGame/accountingGame.html!github:systemjs/plugin-text@0.0.2",
      "accountingGame/scenes/aboutScene/aboutScene.html!github:systemjs/plugin-text@0.0.2",
      "accountingGame/scenes/endScene/endScene.html!github:systemjs/plugin-text@0.0.2",
      "accountingGame/scenes/inGameScene/inGameScene.html!github:systemjs/plugin-text@0.0.2",
      "accountingGame/scenes/menuScene/menuScene.html!github:systemjs/plugin-text@0.0.2",
      "accountingGame/commons/helpers.scss!systemjs_plugins/scss.js",
      "index.scss!systemjs_plugins/scss.js",
      "accountingGame/scenes/endScene/endScene.scss!systemjs_plugins/scss.js",
      "accountingGame/scenes/aboutScene/aboutScene.scss!systemjs_plugins/scss.js",
      "accountingGame/scenes/menuScene/menuScene.scss!systemjs_plugins/scss.js",
      "accountingGame/scenes/inGameScene/inGameScene.scss!systemjs_plugins/scss.js",
      "accountingGame/accountingGame.scss!systemjs_plugins/scss.js"
    ],
    "bundle.vendor.js": [
      "npm:babel-runtime@5.8.25/core-js/object/assign",
      "github:angular/bower-angular@1.4.7",
      "npm:core-js@0.9.18/library/fn/object/assign",
      "github:angular/bower-angular@1.4.7/angular",
      "npm:core-js@0.9.18/library/modules/es6.object.assign",
      "npm:core-js@0.9.18/library/modules/$",
      "npm:core-js@0.9.18/library/modules/$.def",
      "npm:core-js@0.9.18/library/modules/$.assign",
      "npm:core-js@0.9.18/library/modules/$.fw",
      "npm:core-js@0.9.18/library/modules/$.enum-keys",
      "npm:lodash@3.10.1",
      "npm:lodash@3.10.1/index",
      "npm:babel-runtime@5.8.25/core-js/symbol",
      "github:jspm/nodelibs-process@0.1.1",
      "npm:core-js@0.9.18/library/fn/symbol",
      "github:jspm/nodelibs-process@0.1.1/index",
      "npm:core-js@0.9.18/library/fn/symbol/index",
      "npm:process@0.10.1",
      "npm:core-js@0.9.18/library/modules/es6.symbol",
      "npm:process@0.10.1/browser",
      "npm:core-js@0.9.18/library/modules/$.cof",
      "npm:core-js@0.9.18/library/modules/$.uid",
      "npm:core-js@0.9.18/library/modules/$.shared",
      "npm:core-js@0.9.18/library/modules/$.redef",
      "npm:core-js@0.9.18/library/modules/$.keyof",
      "npm:core-js@0.9.18/library/modules/$.assert",
      "npm:core-js@0.9.18/library/modules/$.get-names",
      "npm:core-js@0.9.18/library/modules/$.wks",
      "github:angular/bower-angular-animate@1.4.7",
      "github:brandly/angular-youtube-embed@1.1.0",
      "npm:babel-runtime@5.8.25/core-js/object/define-properties",
      "github:angular-ui/ui-router@0.2.15",
      "github:angular/bower-angular-animate@1.4.7/angular-animate",
      "github:brandly/angular-youtube-embed@1.1.0/src/angular-youtube-embed",
      "npm:core-js@0.9.18/library/fn/object/define-properties",
      "github:angular-ui/ui-router@0.2.15/angular-ui-router"
    ]
  },

  map: {
    "angular": "github:angular/bower-angular@1.4.7",
    "angular-animate": "github:angular/bower-angular-animate@1.4.7",
    "angular-ui-router": "github:angular-ui/ui-router@0.2.15",
    "angular-youtube-embed": "github:brandly/angular-youtube-embed@1.1.0",
    "babel": "npm:babel-core@5.8.25",
    "babel-runtime": "npm:babel-runtime@5.8.25",
    "core-js": "npm:core-js@0.9.18",
    "css": "systemjs_plugins/scss",
    "jspm-loader-css": "npm:jspm-loader-css@dev",
    "lodash": "npm:lodash@3.10.1",
    "postcss-calc": "npm:postcss-calc@4.1.0",
    "postcss-css-variables": "npm:postcss-css-variables@0.4.0",
    "postcss-inline-comment": "npm:postcss-inline-comment@1.0.5",
    "postcss-nested": "npm:postcss-nested@0.3.2",
    "scss": "systemjs_plugins/scss",
    "text": "github:systemjs/plugin-text@0.0.2",
    "videogular": "github:2fdevs/bower-videogular@1.2.8",
    "github:2fdevs/bower-videogular@1.2.8": {
      "angular": "github:angular/bower-angular@1.4.7",
      "angular-sanitize": "github:angular/bower-angular-sanitize@1.4.7"
    },
    "github:angular-ui/ui-router@0.2.15": {
      "angular": "github:angular/bower-angular@1.4.7"
    },
    "github:angular/bower-angular-animate@1.4.7": {
      "angular": "github:angular/bower-angular@1.4.7"
    },
    "github:angular/bower-angular-sanitize@1.4.7": {
      "angular": "github:angular/bower-angular@1.4.7"
    },
    "github:brandly/angular-youtube-embed@1.1.0": {
      "angular": "github:angular/bower-angular@1.4.7"
    },
    "github:jspm/nodelibs-assert@0.1.0": {
      "assert": "npm:assert@1.3.0"
    },
    "github:jspm/nodelibs-buffer@0.1.0": {
      "buffer": "npm:buffer@3.5.0"
    },
    "github:jspm/nodelibs-path@0.1.0": {
      "path-browserify": "npm:path-browserify@0.0.0"
    },
    "github:jspm/nodelibs-process@0.1.1": {
      "process": "npm:process@0.10.1"
    },
    "github:jspm/nodelibs-util@0.1.0": {
      "util": "npm:util@0.10.3"
    },
    "npm:amdefine@1.0.0": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "module": "github:jspm/nodelibs-module@0.1.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:assert@1.3.0": {
      "util": "npm:util@0.10.3"
    },
    "npm:babel-runtime@5.8.25": {
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:buffer@3.5.0": {
      "base64-js": "npm:base64-js@0.0.8",
      "ieee754": "npm:ieee754@1.1.6",
      "is-array": "npm:is-array@1.0.1"
    },
    "npm:core-js@0.9.18": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:css-modules-loader-core@0.0.12": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "postcss": "npm:postcss@4.1.16",
      "postcss-modules-extract-imports": "npm:postcss-modules-extract-imports@0.0.5",
      "postcss-modules-local-by-default": "npm:postcss-modules-local-by-default@0.0.9",
      "postcss-modules-scope": "npm:postcss-modules-scope@0.0.8"
    },
    "npm:css-selector-tokenizer@0.4.1": {
      "fastparse": "npm:fastparse@1.1.1"
    },
    "npm:css-selector-tokenizer@0.5.4": {
      "cssesc": "npm:cssesc@0.1.0",
      "fastparse": "npm:fastparse@1.1.1"
    },
    "npm:debounce@1.0.0": {
      "date-now": "npm:date-now@1.0.1"
    },
    "npm:es6-promise@2.3.0": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:fastparse@1.1.1": {
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:inherits@2.0.1": {
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:js-base64@2.1.9": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0"
    },
    "npm:jspm-loader-css@dev": {
      "css-modules-loader-core": "npm:css-modules-loader-core@0.0.12",
      "debounce": "npm:debounce@1.0.0",
      "path": "npm:path@0.12.7",
      "toposort": "npm:toposort@0.2.12"
    },
    "npm:lodash@3.10.1": {
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:path-browserify@0.0.0": {
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:path@0.12.7": {
      "process": "npm:process@0.11.2",
      "util": "npm:util@0.10.3"
    },
    "npm:postcss-calc@4.1.0": {
      "postcss": "npm:postcss@4.1.16",
      "postcss-message-helpers": "npm:postcss-message-helpers@2.0.0",
      "reduce-css-calc": "npm:reduce-css-calc@1.2.0"
    },
    "npm:postcss-css-variables@0.4.0": {
      "escape-string-regexp": "npm:escape-string-regexp@1.0.3",
      "extend": "npm:extend@2.0.1",
      "postcss": "npm:postcss@4.1.16"
    },
    "npm:postcss-inline-comment@1.0.5": {
      "postcss": "npm:postcss@4.1.16"
    },
    "npm:postcss-modules-extract-imports@0.0.5": {
      "postcss": "npm:postcss@4.1.16",
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:postcss-modules-local-by-default@0.0.9": {
      "css-selector-tokenizer": "npm:css-selector-tokenizer@0.4.1",
      "postcss": "npm:postcss@4.1.16"
    },
    "npm:postcss-modules-scope@0.0.8": {
      "css-selector-tokenizer": "npm:css-selector-tokenizer@0.5.4",
      "postcss": "npm:postcss@4.1.16",
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:postcss-nested@0.3.2": {
      "postcss": "npm:postcss@4.1.16",
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:postcss@4.1.16": {
      "es6-promise": "npm:es6-promise@2.3.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "js-base64": "npm:js-base64@2.1.9",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "source-map": "npm:source-map@0.4.4",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:process@0.11.2": {
      "assert": "github:jspm/nodelibs-assert@0.1.0"
    },
    "npm:reduce-css-calc@1.2.0": {
      "balanced-match": "npm:balanced-match@0.1.0",
      "reduce-function-call": "npm:reduce-function-call@1.0.1"
    },
    "npm:reduce-function-call@1.0.1": {
      "balanced-match": "npm:balanced-match@0.1.0"
    },
    "npm:source-map@0.4.4": {
      "amdefine": "npm:amdefine@1.0.0",
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:toposort@0.2.12": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:util@0.10.3": {
      "inherits": "npm:inherits@2.0.1",
      "process": "github:jspm/nodelibs-process@0.1.1"
    }
  }
});
