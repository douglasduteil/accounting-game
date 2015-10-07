System.registerDynamic("accountingGame/accountingGame.html!github:systemjs/plugin-text@0.0.2", [], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = "<div>\n  <div ng-class=\"accountingGame.style.bgVideoWrapper\">\n   <youtube-video\n    video-id=\"accountingGame.youtubeVideo\"\n    player=\"accountingGame.videoPlayer\"\n    player-vars=\"{\n      autohide: 1,\n      autoplay: 1,\n      showinfo: 0\n    }\"\n    player-height=\"'100%'\"\n    player-width=\"'100%'\"\n   ></youtube-video>\n  </div>\n\n  <!--\n   FOLLOWING https://developers.google.com/youtube/iframe_api_reference?hl=fr#Mobile_considerations\n   <video> can't autoplay on mobile so we will wait for a user input to display th ui\n  -->\n  <div\n   ng-class=\"accountingGame.style.bgUserSelect\"\n   ng-if=\"accountingGame.videoIsPlaying\"\n  >\n    <ui-view></ui-view>\n  </div>\n\n</div>\n";
  global.define = __define;
  return module.exports;
});

System.registerDynamic("accountingGame/scenes/aboutScene/aboutScene.html!github:systemjs/plugin-text@0.0.2", [], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = "<section ng-class=\"aboutCtrl.style.screen\">\n\n  <div ng-class=\"aboutCtrl.style.content\">\n    <h1 class=\"page-title\">About</h1>\n\n    <article>\n      Give the right answer to insure your salary.\n      <br/>\n      This game is tribute to Christophe Babarro.\n    </article>\n\n    <button ng-class=\"aboutCtrl.style.backButton\" ui-sref=\"menu\">\n      Back\n    </button>\n  </div>\n\n</section>\n";
  global.define = __define;
  return module.exports;
});

System.registerDynamic("accountingGame/scenes/endScene/endScene.html!github:systemjs/plugin-text@0.0.2", [], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = "<section ng-class=\"end.style.screen\">\n\n  <div ng-class=\"end.style.content\">\n    <h1 ng-class=\"page-title\">Ending</h1>\n\n    <article>\n      <img src=\"assets/christophe-b.jpg\" alt=\"\"/>\n\n      <p>\n        Haha that was a good game.\n      </p>\n\n      <h3 ng-class=\"end.style.score\">Score: {{:: end.score }}</h3>\n      <p>\n        But... Where is Sabrina ?\n        <br/>\n        Here is your salary BTW : 0 € <br/>\n      </p>\n\n    </article>\n\n    <button ng-class=\"end.style.backButton\" ui-sref=\"menu\">\n      Back to menu\n    </button>\n  </div>\n\n</section>\n";
  global.define = __define;
  return module.exports;
});

System.registerDynamic("accountingGame/scenes/inGameScene/inGameScene.html!github:systemjs/plugin-text@0.0.2", [], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = "<section ng-class=\"inGame.style.screen\">\n\n  <header ng-class=\"inGame.style.header\">\n    <button ng-class=\"inGame.style.backButton\"\n     ui-sref=\"menu\">\n      Back\n    </button>\n\n    <h4 ng-class=\"inGame.style.score\">\n      Score : {{ inGame.score }} €\n    </h4>\n  </header>\n\n\n  <div ng-class=\"inGame.style.timer\" ng-show=\"inGame.askQuestion\">\n    {{ inGame.askQuestion.remainingTime }}\n  </div>\n\n  <div ng-class=\"inGame.style.qaWrapper\"\n   ng-show=\"inGame.askQuestion\">\n\n    <div ng-class=\"inGame.style.qa\">\n      <h3 ng-class=\"inGame.style.question\">\n        {{ inGame.askQuestion.question }}\n      </h3>\n\n      <div ng-class=\"inGame.style.answers\">\n        <button\n         ng-class=\"inGame.style.answer\"\n         ng-click=\"inGame.userAnswer(answers)\"\n         ng-repeat=\"answers in inGame.askQuestion.answers\"\n         >\n          {{ :: answers }}\n        </button>\n      </div>\n    </div>\n  </div>\n\n  <h1\n   ng-class=\"inGame.answerResponse.valid ? inGame.style.rightResponse : inGame.style.falseResponse\"\n   ng-show=\"inGame.answerResponse\">\n      <span ng-show=\"inGame.answerResponse.valid\">\n        Right\n      </span>\n      <span ng-hide=\"inGame.answerResponse.valid\">\n        Nope\n      </span>\n  </h1>\n\n</section>\n";
  global.define = __define;
  return module.exports;
});

System.registerDynamic("accountingGame/scenes/menuScene/menuScene.html!github:systemjs/plugin-text@0.0.2", [], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = "<section ng-class=\"menuScene.style.bgWrapper\">\n\n  <div ng-class=\"menuScene.style.content\">\n\n    <header>\n      <h1 ng-class=\"menuScene.style.pageTitle\">\n        Ping <br/>\n        &nbsp;&nbsp;Pong <br/>\n        &nbsp;&nbsp;&nbsp;Accounting\n      </h1>\n      <small>\n        Christophe B. - ping you about your EMISFEIR\n      </small>\n    </header>\n\n\n    <div ng-class=\"menuScene.style.menuButtons\">\n      <button ng-class=\"menuScene.style.button\" ui-sref=\"inGame\">\n        Start\n      </button>\n      <button ng-class=\"menuScene.style.button\" ui-sref=\"about\">\n        About\n      </button>\n    </div>\n\n  </div>\n\n</section>\n";
  global.define = __define;
  return module.exports;
});

System.register("index.scss!systemjs_plugins/scss.js", [], function (_export) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {});
    }
  };
});
System.register("accountingGame/accountingGame.scss!systemjs_plugins/scss.js", [], function (_export) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", { "bgVideoWrapper": "_accountingGame_accountingGame__bgVideoWrapper _accountingGame_commons_helpers__fill", "bgUserSelect": "_accountingGame_accountingGame__bgUserSelect _accountingGame_commons_helpers__fill" });
    }
  };
});
System.register("accountingGame/commons/helpers.scss!systemjs_plugins/scss.js", [], function (_export) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", { "fill": "_accountingGame_commons_helpers__fill", "pageTitle": "_accountingGame_commons_helpers__pageTitle", "button": "_accountingGame_commons_helpers__button", "button--active": "_accountingGame_commons_helpers__button--active" });
    }
  };
});
System.register("accountingGame/scenes/aboutScene/aboutScene.scss!systemjs_plugins/scss.js", [], function (_export) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", { "screen": "_accountingGame_scenes_aboutScene_aboutScene__screen _accountingGame_commons_helpers__fill", "content": "_accountingGame_scenes_aboutScene_aboutScene__content", "backButton": "_accountingGame_scenes_aboutScene_aboutScene__backButton _accountingGame_commons_helpers__button" });
    }
  };
});
System.register('~/scenes/aboutScene/aboutScene.module', ['npm:babel-runtime@5.8.25/core-js/object/assign', 'github:angular/bower-angular@1.4.7', 'accountingGame/commons/helpers.scss!systemjs_plugins/scss.js', 'accountingGame/scenes/aboutScene/aboutScene.scss!systemjs_plugins/scss.js', 'accountingGame/scenes/aboutScene/aboutScene.html!github:systemjs/plugin-text@0.0.2'], function (_export) {
  var _Object$assign, angular, helpersStyle, aboutSceneStyle, aboutSceneHtmlTemplate;

  function aboutSceneDirective() {
    return {
      template: aboutSceneHtmlTemplate,
      controllerAs: 'aboutCtrl',
      controller: function AboutController() {
        this.style = _Object$assign({}, helpersStyle, aboutSceneStyle);
      }
    };
  }
  return {
    setters: [function (_npmBabelRuntime5825CoreJsObjectAssign) {
      _Object$assign = _npmBabelRuntime5825CoreJsObjectAssign['default'];
    }, function (_githubAngularBowerAngular147) {
      angular = _githubAngularBowerAngular147['default'];
    }, function (_accountingGameCommonsHelpersScssSystemjs_pluginsScssJs) {
      helpersStyle = _accountingGameCommonsHelpersScssSystemjs_pluginsScssJs['default'];
    }, function (_accountingGameScenesAboutSceneAboutSceneScssSystemjs_pluginsScssJs) {
      aboutSceneStyle = _accountingGameScenesAboutSceneAboutSceneScssSystemjs_pluginsScssJs['default'];
    }, function (_accountingGameScenesAboutSceneAboutSceneHtmlGithubSystemjsPluginText002) {
      aboutSceneHtmlTemplate = _accountingGameScenesAboutSceneAboutSceneHtmlGithubSystemjsPluginText002['default'];
    }],
    execute: function () {
      //

      ////

      'use strict';

      _export('default', angular.module('accountingGame.aboutScene', []).directive('aboutScene', aboutSceneDirective));
    }
  };
});
System.register("accountingGame/scenes/endScene/endScene.scss!systemjs_plugins/scss.js", [], function (_export) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", { "screen": "_accountingGame_scenes_endScene_endScene__screen _accountingGame_commons_helpers__fill", "score": "_accountingGame_scenes_endScene_endScene__score", "backButton": "_accountingGame_scenes_endScene_endScene__backButton _accountingGame_commons_helpers__button" });
    }
  };
});
System.register('~/scenes/endScene/endScene.module', ['github:angular/bower-angular@1.4.7', 'npm:lodash@3.10.1', 'accountingGame/scenes/endScene/endScene.html!github:systemjs/plugin-text@0.0.2', 'accountingGame/scenes/endScene/endScene.scss!systemjs_plugins/scss.js'], function (_export) {
  //

  ////

  'use strict';

  var angular, _, endSceneHtmlTemplate, endSceneStyle;

  // @ngInject
  function endSceneDirective() {
    return {
      controller: 'End as end',
      template: endSceneHtmlTemplate
    };
  }

  // @ngInject
  function EndController($state, StateHandler) {
    var end = this;

    end.style = endSceneStyle;

    if (!_.isNumber(StateHandler.score)) {
      $state.go('menu');
    }

    end.score = StateHandler.score;
    StateHandler.score = null;
  }
  return {
    setters: [function (_githubAngularBowerAngular147) {
      angular = _githubAngularBowerAngular147['default'];
    }, function (_npmLodash3101) {
      _ = _npmLodash3101['default'];
    }, function (_accountingGameScenesEndSceneEndSceneHtmlGithubSystemjsPluginText002) {
      endSceneHtmlTemplate = _accountingGameScenesEndSceneEndSceneHtmlGithubSystemjsPluginText002['default'];
    }, function (_accountingGameScenesEndSceneEndSceneScssSystemjs_pluginsScssJs) {
      endSceneStyle = _accountingGameScenesEndSceneEndSceneScssSystemjs_pluginsScssJs['default'];
    }],
    execute: function () {
      _export('default', angular.module('accountingGame.endScene', []).controller('End', EndController).directive('endScene', endSceneDirective));
    }
  };
});
System.register("accountingGame/scenes/inGameScene/inGameScene.scss!systemjs_plugins/scss.js", [], function (_export) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", { "screen": "_accountingGame_scenes_inGameScene_inGameScene__screen _accountingGame_commons_helpers__fill", "header": "_accountingGame_scenes_inGameScene_inGameScene__header", "score": "_accountingGame_scenes_inGameScene_inGameScene__score", "backButton": "_accountingGame_scenes_inGameScene_inGameScene__backButton _accountingGame_commons_helpers__button", "timer": "_accountingGame_scenes_inGameScene_inGameScene__timer _accountingGame_commons_helpers__fill", "qaWrapper": "_accountingGame_scenes_inGameScene_inGameScene__qaWrapper", "qa": "_accountingGame_scenes_inGameScene_inGameScene__qa", "answers": "_accountingGame_scenes_inGameScene_inGameScene__answers", "answer": "_accountingGame_scenes_inGameScene_inGameScene__answer _accountingGame_commons_helpers__button", "response": "_accountingGame_scenes_inGameScene_inGameScene__response", "rightResponse": "_accountingGame_scenes_inGameScene_inGameScene__rightResponse _accountingGame_scenes_inGameScene_inGameScene__response", "falseResponse": "_accountingGame_scenes_inGameScene_inGameScene__falseResponse _accountingGame_scenes_inGameScene_inGameScene__response" });
    }
  };
});
System.register('~/scenes/inGameScene/FRAMES', ['npm:babel-runtime@5.8.25/core-js/symbol'], function (_export) {
  var _Symbol, ALONE_FRAMES, PLAYING_FRAMES, WINNING_FRAMES, LOSING_FRAMES, VIDEO_FRAMES;

  return {
    setters: [function (_npmBabelRuntime5825CoreJsSymbol) {
      _Symbol = _npmBabelRuntime5825CoreJsSymbol['default'];
    }],
    execute: function () {
      //

      'use strict';

      ALONE_FRAMES = _Symbol('ALONE_FRAMES');

      _export('ALONE_FRAMES', ALONE_FRAMES);

      PLAYING_FRAMES = _Symbol('PLAYING_FRAMES');

      _export('PLAYING_FRAMES', PLAYING_FRAMES);

      WINNING_FRAMES = _Symbol('WINNING_FRAMES');

      _export('WINNING_FRAMES', WINNING_FRAMES);

      LOSING_FRAMES = _Symbol('LOSING_FRAMES');

      _export('LOSING_FRAMES', LOSING_FRAMES);

      VIDEO_FRAMES = [{
        end: 5,
        state: ALONE_FRAMES,
        start: 0
      }, {
        end: 64,
        state: PLAYING_FRAMES,
        start: 47
      }, {
        end: 70,
        state: WINNING_FRAMES,
        start: 64
      }, {
        end: 76,
        state: PLAYING_FRAMES,
        start: 70
      }, {
        end: 79,
        state: LOSING_FRAMES,
        start: 76
      }, {
        end: 83,
        state: PLAYING_FRAMES,
        start: 79
      }, {
        end: 85,
        state: LOSING_FRAMES,
        start: 83
      }, {
        end: 90,
        state: PLAYING_FRAMES,
        start: 85
      }, {
        end: 93,
        state: LOSING_FRAMES,
        start: 90
      }, {
        end: 93,
        state: PLAYING_FRAMES,
        start: 97
      }, {
        end: 103,
        state: WINNING_FRAMES,
        start: 98
      }, {
        end: 113,
        state: PLAYING_FRAMES,
        start: 103
      }, {
        end: 117,
        state: WINNING_FRAMES,
        start: 112
      }, {
        end: 120,
        state: PLAYING_FRAMES,
        start: 117
      }, {
        end: 127,
        state: LOSING_FRAMES,
        start: 120
      }, {
        end: 132,
        state: PLAYING_FRAMES,
        start: 127
      }, {
        end: 135,
        state: WINNING_FRAMES,
        start: 132
      }, {
        end: 139,
        state: PLAYING_FRAMES,
        start: 135
      }, {
        end: 142,
        state: WINNING_FRAMES,
        start: 139
      }];

      _export('VIDEO_FRAMES', VIDEO_FRAMES);
    }
  };
});
System.register('~/scenes/inGameScene/inGameScene.module', ['github:angular/bower-angular@1.4.7', 'npm:lodash@3.10.1', 'accountingGame/scenes/inGameScene/inGameScene.html!github:systemjs/plugin-text@0.0.2', 'accountingGame/scenes/inGameScene/inGameScene.scss!systemjs_plugins/scss.js', '~/scenes/inGameScene/FRAMES'], function (_export) {
  //

  'use strict';

  // seconds

  var angular, _, inGameSceneHtmlTemplate, inGameSceneHStyle, ALONE_FRAMES, LOSING_FRAMES, PLAYING_FRAMES, VIDEO_FRAMES, WINNING_FRAMES, QUESTION_TIME_LIMIT, QUESTIONS;

  // @ngInject
  function inGameSceneDirective() {
    return {
      controller: 'InGame as inGame',
      template: inGameSceneHtmlTemplate
    };
  }

  // @ngInject
  function InGameController($state, $scope, StateHandler) {
    var inGame = this;

    inGame.calculateRemainingTime = calculateRemainingTime;
    inGame.askQuestion = null;
    inGame.answerResponse = null;
    inGame.score = 0;
    inGame.style = inGameSceneHStyle;
    inGame.userAnswer = userAnswer;

    //

    var frames = _.clone(VIDEO_FRAMES);
    StateHandler.current = Ping();

    //

    function calculateRemainingTime(start, end) {
      return Math.floor((end - start) / 1000) + 1;
    }

    function userAnswer(answer) {
      if (!inGame.askQuestion) {
        return;
      }

      StateHandler.current = inGame.askQuestion.answers.indexOf(answer) === inGame.askQuestion.correctResponseIndex ? Success() : Fail();

      inGame.askQuestion = null;
    }

    //

    // States
    // -----------------------------------

    function Ping() {

      var playingFrame = _.find(frames, { state: PLAYING_FRAMES });
      var canWinOrLose = _.find(frames, { state: WINNING_FRAMES }) && _.find(frames, { state: LOSING_FRAMES });
      var canStillPlay = playingFrame && canWinOrLose;
      if (!canStillPlay) {
        StateHandler.score = inGame.score;
        $state.go('end');
        return;
      }

      frames = _.drop(frames, frames.indexOf(playingFrame) + 1);

      return {
        playerState: YT.PlayerState.PLAYING,
        update: pingUpdate
      };

      ////

      function pingUpdate(time, player) {
        if (time < playingFrame.start) {
          player.seekTo(playingFrame.start);
        } else if (time >= playingFrame.end) {
          player.pauseVideo();
          StateHandler.current = QAndA();
        }
      }
    }

    function QAndA() {

      var MAX_TIME = window.performance.now() + QUESTION_TIME_LIMIT;
      inGame.askQuestion = _.first(QUESTIONS);

      return {
        playerState: YT.PlayerState.PAUSED,
        update: answerTimerUpdate
      };

      ////

      function answerTimerUpdate(time, player) {
        var now = window.performance.now();

        inGame.askQuestion.remainingTime = inGame.calculateRemainingTime(now, MAX_TIME);

        $scope.$digest();

        if (now > MAX_TIME) {
          // Time out !
          console.log('Time out ');

          inGame.askQuestion = null;
          player.playVideo();
          StateHandler.current = Fail();
        }
      }
    }

    function Fail() {

      var failingFrame = _.find(frames, { state: LOSING_FRAMES });
      inGame.answerResponse = { valid: false };
      //inGame.score--;

      if (!failingFrame) {
        throw new Error('invalid state');
      }

      frames = _.drop(frames, frames.indexOf(failingFrame) + 1);

      return {
        playerState: YT.PlayerState.PLAYING,
        update: failUpdate
      };

      ////

      function failUpdate(time, player) {

        if (this.playerState !== player.getPlayerState()) {
          player.playVideo();
        }

        if (time < failingFrame.start) {
          player.seekTo(failingFrame.start);
        } else if (time > failingFrame.end) {
          inGame.answerResponse = null;
          $scope.$digest();
          StateHandler.current = Ping();
        }
      }
    }

    function Success() {
      var successfulFrame = _.find(frames, { state: WINNING_FRAMES });
      inGame.answerResponse = { valid: true };
      inGame.score++;

      if (!successfulFrame) {
        throw new Error('invalid state');
      }

      frames = _.drop(frames, frames.indexOf(successfulFrame) + 1);

      return {
        playerState: YT.PlayerState.PLAYING,
        update: successUpdate
      };

      ////

      function successUpdate(time, player) {

        if (this.playerState !== player.getPlayerState()) {
          player.playVideo();
        }

        if (time < successfulFrame.start) {
          player.seekTo(successfulFrame.start);
        } else if (time > successfulFrame.end) {
          inGame.answerResponse = null;
          $scope.$digest();
          StateHandler.current = Ping();
        }
      }
    }
  }
  return {
    setters: [function (_githubAngularBowerAngular147) {
      angular = _githubAngularBowerAngular147['default'];
    }, function (_npmLodash3101) {
      _ = _npmLodash3101['default'];
    }, function (_accountingGameScenesInGameSceneInGameSceneHtmlGithubSystemjsPluginText002) {
      inGameSceneHtmlTemplate = _accountingGameScenesInGameSceneInGameSceneHtmlGithubSystemjsPluginText002['default'];
    }, function (_accountingGameScenesInGameSceneInGameSceneScssSystemjs_pluginsScssJs) {
      inGameSceneHStyle = _accountingGameScenesInGameSceneInGameSceneScssSystemjs_pluginsScssJs['default'];
    }, function (_scenesInGameSceneFRAMES) {
      ALONE_FRAMES = _scenesInGameSceneFRAMES.ALONE_FRAMES;
      LOSING_FRAMES = _scenesInGameSceneFRAMES.LOSING_FRAMES;
      PLAYING_FRAMES = _scenesInGameSceneFRAMES.PLAYING_FRAMES;
      VIDEO_FRAMES = _scenesInGameSceneFRAMES.VIDEO_FRAMES;
      WINNING_FRAMES = _scenesInGameSceneFRAMES.WINNING_FRAMES;
    }],
    execute: function () {
      QUESTION_TIME_LIMIT = 15 * 1000;
      QUESTIONS = [{
        question: 'YOLO ?',
        correctResponseIndex: 1,
        answers: ['Yeah', 'F**** Yeah', 'All Day', 'Reponse D']
      }];

      ////

      _export('default', angular.module('accountingGame.inGameScene', []).controller('InGame', InGameController).directive('inGameScene', inGameSceneDirective));
    }
  };
});
System.register("accountingGame/scenes/menuScene/menuScene.scss!systemjs_plugins/scss.js", [], function (_export) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", { "bgWrapper": "_accountingGame_scenes_menuScene_menuScene__bgWrapper _accountingGame_commons_helpers__fill", "content": "_accountingGame_scenes_menuScene_menuScene__content", "menuButtons": "_accountingGame_scenes_menuScene_menuScene__menuButtons" });
    }
  };
});
System.register('~/scenes/menuScene/menuScene.module', ['npm:babel-runtime@5.8.25/core-js/object/assign', 'github:angular/bower-angular@1.4.7', 'accountingGame/commons/helpers.scss!systemjs_plugins/scss.js', 'accountingGame/scenes/menuScene/menuScene.html!github:systemjs/plugin-text@0.0.2', 'accountingGame/scenes/menuScene/menuScene.scss!systemjs_plugins/scss.js'], function (_export) {
  var _Object$assign, angular, helpersStyle, menuSceneHtmlTemplate, menuSceneStyle, FIRST_PING;

  // @ngInject
  function menuSceneDirective() {
    return {
      template: menuSceneHtmlTemplate,
      controller: 'MenuScene as menuScene'
    };
  }

  // @ngInject
  function MenuSceneController(StateHandler) {
    StateHandler.current = IdelMode();
    this.style = _Object$assign({}, helpersStyle, menuSceneStyle);
  }

  function IdelMode() {

    return {
      update: idelUpdate
    };

    ////

    function idelUpdate(time, player) {
      if (time > FIRST_PING) {
        player.seekTo(0);
      }
    }
  }
  return {
    setters: [function (_npmBabelRuntime5825CoreJsObjectAssign) {
      _Object$assign = _npmBabelRuntime5825CoreJsObjectAssign['default'];
    }, function (_githubAngularBowerAngular147) {
      angular = _githubAngularBowerAngular147['default'];
    }, function (_accountingGameCommonsHelpersScssSystemjs_pluginsScssJs) {
      helpersStyle = _accountingGameCommonsHelpersScssSystemjs_pluginsScssJs['default'];
    }, function (_accountingGameScenesMenuSceneMenuSceneHtmlGithubSystemjsPluginText002) {
      menuSceneHtmlTemplate = _accountingGameScenesMenuSceneMenuSceneHtmlGithubSystemjsPluginText002['default'];
    }, function (_accountingGameScenesMenuSceneMenuSceneScssSystemjs_pluginsScssJs) {
      menuSceneStyle = _accountingGameScenesMenuSceneMenuSceneScssSystemjs_pluginsScssJs['default'];
    }],
    execute: function () {
      //

      'use strict';

      FIRST_PING = 47;

      ////

      _export('default', angular.module('accountingGame.menuScene', []).controller('MenuScene', MenuSceneController).directive('menuScene', menuSceneDirective));
    }
  };
});
System.register('~/accountingGame.module', ['npm:babel-runtime@5.8.25/core-js/object/define-properties', 'github:angular/bower-angular@1.4.7', 'github:angular/bower-angular-animate@1.4.7', 'github:angular-ui/ui-router@0.2.15', 'github:brandly/angular-youtube-embed@1.1.0', 'accountingGame/accountingGame.html!github:systemjs/plugin-text@0.0.2', 'accountingGame/accountingGame.scss!systemjs_plugins/scss.js', '~/scenes/aboutScene/aboutScene.module', '~/scenes/endScene/endScene.module', '~/scenes/inGameScene/inGameScene.module', '~/scenes/menuScene/menuScene.module'], function (_export) {
  var _Object$defineProperties, angular, accountingGameHtmlTemplate, accountingGameStyle, aboutSceneModule, endSceneModule, inGameSceneModule, menuSceneModule;

  //

  // @ngInject
  function accountingGameRoutesConfig($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
    $stateProvider.state('menu', {
      url: '/',
      template: '<menu-scene></menu-scene>'
    }).state('about', {
      url: '/about',
      template: '<about-scene></about-scene>'
    }).state('end', {
      url: '/end',
      template: '<end-scene></end-scene>'
    }).state('inGame', {
      url: '/game',
      template: '<in-game-scene></in-game-scene>'
    });
  }

  // @ngInject
  function accountingGameDirective() {
    return {
      template: accountingGameHtmlTemplate,
      controller: 'AccountingGame as accountingGame'
    };
  }

  // @ngInject
  function AccountingGameController($scope, $window, $timeout, PlayerHandler, StateHandler) {
    var accountingGame = this;
    accountingGame.style = accountingGameStyle;
    accountingGame.youtubeVideo = 'HiHCroJDxSA';

    // FOLLOWING https://developers.google.com/youtube/iframe_api_reference?hl=fr#Mobile_considerations
    // <video> can't autoplay on mobile so we will wait for a user input to display th ui
    accountingGame.videoIsPlaying = false;

    ////

    var deregisterPlayerReadyEvent = $scope.$on('youtube.player.ready', function ($event, player) {
      $timeout(_onPlayerReady.bind(null, player));
    });

    ////

    function _onPlayerReady(player) {

      $window.onblur = _onWindowBlur;
      $window.onfocus = _onWindowFocus;

      function _onWindowBlur() {
        //accountingGame.videoIsPlaying = false;
        player.pauseVideo();
      }

      function _onWindowFocus() {
        var current = StateHandler.current;

        if (!current) {
          return;
        }
        // HACK
        // FORCE TRY THE CURRENT STATE
        current.update(player.getCurrentTime(), player);

        if (current.playerState !== player.getPlayerState()) {
          switch (current.playerState) {
            case YT.PlayerState.PAUSED:
              player.pauseVideo();
              break;

            default:
              player.playVideo();
              break;
          }
        }

        _waitForVideoReady(player);
      }

      PlayerHandler.player = player;
      PlayerHandler.loop();

      _waitForVideoReady(player);
    }

    function _waitForVideoReady(player) {
      var waitForVideoFirstFrameIntervalId = setInterval(_waitForVideoFirstFrame, 1000);
      deregisterPlayerReadyEvent();

      ////

      function _waitForVideoFirstFrame() {
        accountingGame.videoIsPlaying = player.getCurrentTime() > 1;
        if (accountingGame.videoIsPlaying) {
          clearInterval(waitForVideoFirstFrameIntervalId);
          $scope.$evalAsync();
        }
      }
    }
  }

  // @ngInject
  function PlayerHandler(StateHandler) {
    return _Object$defineProperties({

      loop: function loop() {
        var _this = this;

        var currentState = StateHandler.current;

        if (currentState) {
          //console.info(this._player.getCurrentTime(), currentState.update.name);
          currentState.update(this._player.getCurrentTime(), this._player);
        }

        window.requestAnimationFrame(function () {
          return _this.loop();
        });
      }
    }, {
      player: {
        get: function get() {
          return this._player;
        },
        set: function set(player) {
          player.mute();
          player.seekTo(0);
          player.playVideo();
          this._player = player;
        },
        configurable: true,
        enumerable: true
      }
    });
  }

  // @ngInject
  function StateHandler() {
    return {
      current: null
    };
  }
  return {
    setters: [function (_npmBabelRuntime5825CoreJsObjectDefineProperties) {
      _Object$defineProperties = _npmBabelRuntime5825CoreJsObjectDefineProperties['default'];
    }, function (_githubAngularBowerAngular147) {
      angular = _githubAngularBowerAngular147['default'];
    }, function (_githubAngularBowerAngularAnimate147) {}, function (_githubAngularUiUiRouter0215) {}, function (_githubBrandlyAngularYoutubeEmbed110) {}, function (_accountingGameAccountingGameHtmlGithubSystemjsPluginText002) {
      accountingGameHtmlTemplate = _accountingGameAccountingGameHtmlGithubSystemjsPluginText002['default'];
    }, function (_accountingGameAccountingGameScssSystemjs_pluginsScssJs) {
      accountingGameStyle = _accountingGameAccountingGameScssSystemjs_pluginsScssJs['default'];
    }, function (_scenesAboutSceneAboutSceneModule) {
      aboutSceneModule = _scenesAboutSceneAboutSceneModule['default'];
    }, function (_scenesEndSceneEndSceneModule) {
      endSceneModule = _scenesEndSceneEndSceneModule['default'];
    }, function (_scenesInGameSceneInGameSceneModule) {
      inGameSceneModule = _scenesInGameSceneInGameSceneModule['default'];
    }, function (_scenesMenuSceneMenuSceneModule) {
      menuSceneModule = _scenesMenuSceneMenuSceneModule['default'];
    }],
    execute: function () {
      //

      ////

      'use strict';

      _export('default', angular.module('accountingGame', [aboutSceneModule.name, endSceneModule.name, inGameSceneModule.name, menuSceneModule.name, 'ngAnimate', 'ui.router', 'youtube-embed']).config(accountingGameRoutesConfig).controller('AccountingGame', AccountingGameController).directive('accountingGame', accountingGameDirective).factory('PlayerHandler', PlayerHandler).factory('StateHandler', StateHandler));
    }
  };
});
System.register('accountingGame.js', ['~/accountingGame.module'], function (_export) {
  //

  'use strict';

  return {
    setters: [function (_accountingGameModule) {
      var _exportObj = {};

      for (var _key in _accountingGameModule) {
        if (_key !== 'default') _exportObj[_key] = _accountingGameModule[_key];
      }

      _exportObj['default'] = _accountingGameModule['default'];

      _export(_exportObj);
    }],
    execute: function () {}
  };
});
System.register('index.js', ['index.scss!systemjs_plugins/scss.js', 'accountingGame.js'], function (_export) {
  //

  'use strict';

  var crtiticalStyle, accountingGameModule;
  return {
    setters: [function (_indexScssSystemjs_pluginsScssJs) {
      crtiticalStyle = _indexScssSystemjs_pluginsScssJs['default'];
    }, function (_accountingGameJs) {
      accountingGameModule = _accountingGameJs['default'];
    }],
    execute: function () {

      angular.bootstrap(document, [accountingGameModule.name]);
    }
  };
});

// Fake file definitions
System.register('index.scss!systemjs_plugins/scss.js', [], function() { return { setters: [], execute: function() {}}});
System.register('accountingGame/accountingGame.scss!systemjs_plugins/scss.js', [], function() { return { setters: [], execute: function() {}}});
System.register('accountingGame/commons/helpers.scss!systemjs_plugins/scss.js', [], function() { return { setters: [], execute: function() {}}});
System.register('accountingGame/scenes/aboutScene/aboutScene.scss!systemjs_plugins/scss.js', [], function() { return { setters: [], execute: function() {}}});
System.register('accountingGame/scenes/endScene/endScene.scss!systemjs_plugins/scss.js', [], function() { return { setters: [], execute: function() {}}});
System.register('accountingGame/scenes/inGameScene/inGameScene.scss!systemjs_plugins/scss.js', [], function() { return { setters: [], execute: function() {}}});
System.register('accountingGame/scenes/menuScene/menuScene.scss!systemjs_plugins/scss.js', [], function() { return { setters: [], execute: function() {}}});
// Inject all the css
(function(c){if (typeof document == 'undefined') return; var d=document,a='appendChild',i='styleSheet',s=d.createElement('style');s.type='text/css';d.getElementsByTagName('head')[0][a](s);s[i]?s[i].cssText=c:s[a](d.createTextNode(c));})
('/* Helpers */\n\n._accountingGame_commons_helpers__fill {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n}\n\n._accountingGame_commons_helpers__pageTitle {\n  font-weight: 900;\n  font-style: italic;\n  font-size: 2rem;\n\n  padding: 1rem;\n  border-bottom: 1px solid white;\n}\n\n._accountingGame_commons_helpers__button {\n  font-family: "Fugaz One", "Helvetica Neue", Helvetica, Arial, sans-serif;\n  font-size: 1em;\n\n  padding: 1em 2em;\n  border: 1px solid white;\n  text-transform: uppercase;\n\n  background: rgba(17, 17, 17, 0.6);\n}\n\n._accountingGame_commons_helpers__button:active, ._accountingGame_commons_helpers__button:hover, ._accountingGame_commons_helpers__button--active {\n  background: white;\n  color: black;\n  font-weight: 900;\n}\n\n._accountingGame_commons_helpers__button:focus {\n  font-weight: 900;\n}\n\n/* Menu Scene */\n\n._accountingGame_scenes_menuScene_menuScene__bgWrapper {\n\n  z-index: 1;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: column;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-pack: center;\n  -webkit-justify-content: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n\n  background: rgba(17, 17, 17, 0.6);\n}\n\n._accountingGame_scenes_menuScene_menuScene__content {\n    display: -webkit-box;\n    display: -webkit-flex;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n    -webkit-flex-direction: column;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    -webkit-box-pack: justify;\n    -webkit-justify-content: space-between;\n        -ms-flex-pack: justify;\n            justify-content: space-between;\n\n    -webkit-box-flex: 1;\n\n    -webkit-flex: 1;\n\n        -ms-flex: 1;\n\n            flex: 1;\n\n    max-height: 25rem;\n}\n\n._accountingGame_scenes_menuScene_menuScene__menuButtons {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: column;\n      -ms-flex-direction: column;\n          flex-direction: column;\n}\n\n._accountingGame_scenes_menuScene_menuScene__menuButtons + ._accountingGame_scenes_menuScene_menuScene__menuButtons {\n\n  margin-top: 1rem;\n}\n\n/* In Game Scene*/\n\n._accountingGame_scenes_inGameScene_inGameScene__screen {\n\n  display: -webkit-box;\n\n  display: -webkit-flex;\n\n  display: -ms-flexbox;\n\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: column;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-pack: justify;\n  -webkit-justify-content: space-between;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  z-index: 1;\n\n  margin: 1rem;\n}\n\n._accountingGame_scenes_inGameScene_inGameScene__header {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n}\n\n._accountingGame_scenes_inGameScene_inGameScene__score {\n  margin-left: 3rem;\n  font-weight: normal;\n}\n\n._accountingGame_scenes_inGameScene_inGameScene__backButton {\n  -webkit-align-self: flex-start;\n      -ms-flex-item-align: start;\n          align-self: flex-start;\n}\n\n._accountingGame_scenes_inGameScene_inGameScene__timer {\n\n  left: auto;\n\n  border: 2px solid white;\n  border-radius: 19px;\n  color: white;\n  color: #ca352f;\n  min-width: 2em;\n  padding: 4px 3px 0 3px;\n  text-align: center;\n  background: #fff;\n  border: 2px solid #666;\n  text-align: center;\n  font-weight: 900;\n  overflow: hidden;\n  height: 2.6rem;\n  font-size: 1.5rem;\n}\n\n._accountingGame_scenes_inGameScene_inGameScene__qaWrapper {\n  background: black;\n  margin: -1rem;\n  padding: 2rem;\n}\n\n._accountingGame_scenes_inGameScene_inGameScene__qa {\n  max-width: 40rem;\n  margin: auto;\n}\n\n._accountingGame_scenes_inGameScene_inGameScene__answers {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n  -webkit-justify-content: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-flex-wrap: wrap;\n      -ms-flex-wrap: wrap;\n          flex-wrap: wrap;\n  -webkit-align-content: flex-end;\n      -ms-flex-line-pack: end;\n          align-content: flex-end;\n}\n\n._accountingGame_scenes_inGameScene_inGameScene__answer {\n  -webkit-box-flex: 1;\n  -webkit-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  -webkit-flex-basis: 50%;\n      -ms-flex-preferred-size: 50%;\n          flex-basis: 50%;\n}\n\n@media (max-width: 480px) {\n\n  ._accountingGame_scenes_inGameScene_inGameScene__answer {\n    -webkit-flex-basis: 100%;\n        -ms-flex-preferred-size: 100%;\n            flex-basis: 100%;\n  }\n}\n\n._accountingGame_scenes_inGameScene_inGameScene__response {\n  text-align: center;\n  background: rgba(17, 17, 17, 0.6);\n  padding: 1rem;\n\n}\n\n._accountingGame_scenes_inGameScene_inGameScene__rightResponse {\n  color: hsl(98, 62%, 49%);\n}\n\n._accountingGame_scenes_inGameScene_inGameScene__falseResponse{\n  color: #ca352f;\n}\n\n/* About Scene */\n\n._accountingGame_scenes_aboutScene_aboutScene__screen {\n\n  display: -webkit-box;\n\n  display: -webkit-flex;\n\n  display: -ms-flexbox;\n\n  display: flex;\n  z-index: 1;\n}\n\n._accountingGame_scenes_aboutScene_aboutScene__screen:after, ._accountingGame_scenes_aboutScene_aboutScene__screen:before {\n\n  position: absolute;\n\n  top: 0;\n\n  bottom: 0;\n\n  left: 0;\n\n  right: 0;\n\n  z-index: -1;\n\n  content: \'\';\n}\n\n._accountingGame_scenes_aboutScene_aboutScene__screen:after {\n\n  left: 50%;\n\n  background: rgba(202, 53, 47, 0.6);\n}\n\n._accountingGame_scenes_aboutScene_aboutScene__screen:before {\n\n  right: 50%;\n\n  background: rgba(26, 118, 193, 0.6);\n}\n\n._accountingGame_scenes_aboutScene_aboutScene__content {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: column;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-pack: justify;\n  -webkit-justify-content: space-between;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-flex: 1;\n  -webkit-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  padding: 2rem;\n  margin: 2rem;\n  border: 1px #f1f1f1 solid;\n}\n\n._accountingGame_scenes_aboutScene_aboutScene__backButton {\n  color: inherit;\n  -webkit-align-self: flex-end;\n      -ms-flex-item-align: end;\n          align-self: flex-end;\n  font-size: .8rem;\n}\n\n/* End Scene */\n\n._accountingGame_scenes_endScene_endScene__screen {\n\n  z-index: 1;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: column;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-pack: center;\n  -webkit-justify-content: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n\n  background: rgba(17, 17, 17, 0.6);\n}\n\n._accountingGame_scenes_endScene_endScene__score {\n  color: #ca352f;\n  font-weight: 300;\n  text-align: center;\n}\n\n._accountingGame_scenes_endScene_endScene__backButton {\n  -webkit-align-self: flex-start;\n      -ms-flex-item-align: start;\n          align-self: flex-start;\n}\n\n/**/\n\n._accountingGame_accountingGame__bgVideoWrapper {\n  z-index: -99;\n  overflow: hidden;\n}\n\n._accountingGame_accountingGame__bgUserSelect {\n  z-index: 0;\n  background: transparent;\n}\n\n/* Normalizer */\n\n* {\n  /* "box-sizing" not autoprefixed */\n  box-sizing: border-box;\n}\n\nhtml {\n  /* "font-smoothing" not autoprefixed */\n  -webkit-font-smoothing: antialiased;\n  /* "tap-highlight-color:" not autoprefixed */\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n  -webkit-text-size-adjust: 100%;\n      -ms-text-size-adjust: 100%;\n          text-size-adjust: 100%;\n}\n\nbody {\n  margin: 0;\n  background: #111;\n  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;\n  color: #f1f1f1;\n}\n\n.wf-active > body {\n  font-family: "Fugaz One", "Helvetica Neue", Helvetica, Arial, sans-serif;\n}\n\nbutton {\n  background: none;\n  border: 0;\n  padding: 0;\n  color: inherit;\n  display: block;\n  text-align: center;\n  text-decoration: none;\n}\n\nh1, h2, h3, h4, h5, h6 {\n  line-height: 1.1;\n}\n\naccounting-game {\n  display: block;\n}\n');
//# sourceMappingURL=bundle.app.js.map