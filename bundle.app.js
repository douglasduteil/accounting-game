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
  module.exports = "<section class=\"ag-about-screen\">\n\n  <div class=\"ag-about-screen__content\">\n    <h1 class=\"page-title\">About</h1>\n\n    <article>\n      Give the right answer to insure your salary.\n      <br/>\n      This game is tribute to Christophe Babarro.\n    </article>\n\n    <button class=\"ag-about-screen__back-button\" ui-sref=\"menu\">\n      Back\n    </button>\n  </div>\n\n</section>\n";
  global.define = __define;
  return module.exports;
});

System.registerDynamic("accountingGame/scenes/endScene/endScene.html!github:systemjs/plugin-text@0.0.2", [], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = "<section class=\"ag-end-screen\">\n\n  <div class=\"ag-end-screen__content\">\n    <h1 class=\"page-title\">Ending</h1>\n\n    <article>\n      <img src=\"accountingGame/assets/christophe-b.jpg\" alt=\"\"/>\n\n      <p>\n        Haha that was a good game.\n      </p>\n\n      <h3 class=\"ag-end-screen__score\">Score: {{:: end.score }}</h3>\n      <p>\n        But... Where is Sabrina ?\n        <br/>\n        Here is your salary BTW : 0 € <br/>\n      </p>\n\n    </article>\n\n    <button class=\"ag-end-screen__back-button\" ui-sref=\"menu\">\n      Back to menu\n    </button>\n  </div>\n\n</section>\n";
  global.define = __define;
  return module.exports;
});

System.registerDynamic("accountingGame/scenes/inGameScene/inGameScene.html!github:systemjs/plugin-text@0.0.2", [], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = "<section class=\"ag-in-game-screen\">\n\n  <header class=\"ag-in-game-screen__header\">\n    <button class=\"ag-in-game-screen__back-button\"\n     ui-sref=\"menu\">\n      Back\n    </button>\n\n    <h4 class=\"ag-in-game-screen__score\">\n      Score : {{ inGame.score }} €\n    </h4>\n  </header>\n\n\n  <div class=\"ag-in-game-screen__timer\" ng-show=\"inGame.askQuestion\">\n    {{ inGame.askQuestion.remainingTime }}\n  </div>\n\n  <div class=\"ag-in-game-screen__qa-wrapper\"\n   ng-show=\"inGame.askQuestion\">\n\n    <div class=\"ag-in-game-screen__qa\">\n      <h3 class=\"ag-in-game-screen__question\">\n        {{ inGame.askQuestion.question }}\n      </h3>\n\n      <div class=\"ag-in-game-screen__answers\">\n        <button\n         class=\"ag-in-game-screen__answer\"\n         ng-click=\"inGame.userAnswer(answers)\"\n         ng-repeat=\"answers in inGame.askQuestion.answers\"\n         >\n          {{ :: answers }}\n        </button>\n      </div>\n    </div>\n  </div>\n\n  <h1\n   class=\"ag-in-game-screen__response\"\n   ng-class=\"{\n     'ag-in-game-screen__response--right': inGame.answerResponse.valid,\n     'ag-in-game-screen__response--false': !inGame.answerResponse.valid\n   }\"\n   ng-show=\"inGame.answerResponse\">\n      <span ng-show=\"inGame.answerResponse.valid\">\n        Right\n      </span>\n      <span ng-hide=\"inGame.answerResponse.valid\">\n        Nope\n      </span>\n  </h1>\n\n</section>\n";
  global.define = __define;
  return module.exports;
});

System.registerDynamic("accountingGame/scenes/menuScene/menuScene.html!github:systemjs/plugin-text@0.0.2", [], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = "<section class=\"ag-menu-screen\">\n\n  <div class=\"ag-menu-screen__content\">\n\n    <header class=\"ag-menu-screen__header\">\n      <h1 class=\"ag-menu-screen__title\">\n        Ping <br/>\n        &nbsp;&nbsp;Pong <br/>\n        &nbsp;&nbsp;&nbsp;Accounting\n      </h1>\n      <small class=\"ag-menu-screen__subtitle\">Christophe B. - ping you about your EMISFEIR</small>\n    </header>\n\n\n    <div class=\"ag-menu-screen__menu-buttons\">\n      <button class=\"menu-btn\" ui-sref=\"inGame\">Start</button>\n      <button class=\"menu-btn\" ui-sref=\"about\">About</button>\n    </div>\n\n  </div>\n\n</section>\n";
  global.define = __define;
  return module.exports;
});

System.register("index.css!systemjs_plugins/css.js", [], function (_export) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {});
    }
  };
});
System.register("accountingGame/accountingGame.css!systemjs_plugins/css.js", [], function (_export) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", { "bgVideoWrapper": "_accountingGame_accountingGame__bgVideoWrapper _accountingGame_helpers__fill" });
    }
  };
});
System.register('~/scenes/aboutScene/aboutScene.module', ['github:angular/bower-angular@1.4.6', 'accountingGame/scenes/aboutScene/aboutScene.html!github:systemjs/plugin-text@0.0.2'], function (_export) {
  //

  ////

  'use strict';

  var angular, aboutSceneHtmlTemplate;

  function aboutSceneDirective() {
    return {
      template: aboutSceneHtmlTemplate
    };
  }
  return {
    setters: [function (_githubAngularBowerAngular146) {
      angular = _githubAngularBowerAngular146['default'];
    }, function (_accountingGameScenesAboutSceneAboutSceneHtmlGithubSystemjsPluginText002) {
      aboutSceneHtmlTemplate = _accountingGameScenesAboutSceneAboutSceneHtmlGithubSystemjsPluginText002['default'];
    }],
    execute: function () {
      _export('default', angular.module('accountingGame.aboutScene', []).directive('aboutScene', aboutSceneDirective));
    }
  };
});
System.register('~/scenes/endScene/endScene.module', ['github:angular/bower-angular@1.4.6', 'npm:lodash@3.10.1', 'accountingGame/scenes/endScene/endScene.html!github:systemjs/plugin-text@0.0.2'], function (_export) {
  //

  ////

  'use strict';

  var angular, _, endSceneHtmlTemplate;

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

    if (!_.isNumber(StateHandler.score)) {
      $state.go('menu');
    }

    end.score = StateHandler.score;
    StateHandler.score = null;
  }
  return {
    setters: [function (_githubAngularBowerAngular146) {
      angular = _githubAngularBowerAngular146['default'];
    }, function (_npmLodash3101) {
      _ = _npmLodash3101['default'];
    }, function (_accountingGameScenesEndSceneEndSceneHtmlGithubSystemjsPluginText002) {
      endSceneHtmlTemplate = _accountingGameScenesEndSceneEndSceneHtmlGithubSystemjsPluginText002['default'];
    }],
    execute: function () {
      _export('default', angular.module('accountingGame.endScene', []).controller('End', EndController).directive('endScene', endSceneDirective));
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
System.register('~/scenes/inGameScene/inGameScene.module', ['github:angular/bower-angular@1.4.6', 'npm:lodash@3.10.1', 'accountingGame/scenes/inGameScene/inGameScene.html!github:systemjs/plugin-text@0.0.2', '~/scenes/inGameScene/FRAMES'], function (_export) {
  //

  'use strict';

  // seconds

  var angular, _, inGameSceneHtmlTemplate, ALONE_FRAMES, LOSING_FRAMES, PLAYING_FRAMES, VIDEO_FRAMES, WINNING_FRAMES, QUESTION_TIME_LIMIT, QUESTIONS;

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
    setters: [function (_githubAngularBowerAngular146) {
      angular = _githubAngularBowerAngular146['default'];
    }, function (_npmLodash3101) {
      _ = _npmLodash3101['default'];
    }, function (_accountingGameScenesInGameSceneInGameSceneHtmlGithubSystemjsPluginText002) {
      inGameSceneHtmlTemplate = _accountingGameScenesInGameSceneInGameSceneHtmlGithubSystemjsPluginText002['default'];
    }, function (_scenesInGameSceneFRAMES) {
      ALONE_FRAMES = _scenesInGameSceneFRAMES.ALONE_FRAMES;
      LOSING_FRAMES = _scenesInGameSceneFRAMES.LOSING_FRAMES;
      PLAYING_FRAMES = _scenesInGameSceneFRAMES.PLAYING_FRAMES;
      VIDEO_FRAMES = _scenesInGameSceneFRAMES.VIDEO_FRAMES;
      WINNING_FRAMES = _scenesInGameSceneFRAMES.WINNING_FRAMES;
    }],
    execute: function () {
      QUESTION_TIME_LIMIT = 1500 * 1000;
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
System.register('~/scenes/menuScene/menuScene.module', ['github:angular/bower-angular@1.4.6', 'accountingGame/scenes/menuScene/menuScene.html!github:systemjs/plugin-text@0.0.2'], function (_export) {
  //

  'use strict';

  var angular, menuSceneHtmlTemplate, FIRST_PING;

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
    setters: [function (_githubAngularBowerAngular146) {
      angular = _githubAngularBowerAngular146['default'];
    }, function (_accountingGameScenesMenuSceneMenuSceneHtmlGithubSystemjsPluginText002) {
      menuSceneHtmlTemplate = _accountingGameScenesMenuSceneMenuSceneHtmlGithubSystemjsPluginText002['default'];
    }],
    execute: function () {
      FIRST_PING = 47;

      ////

      _export('default', angular.module('accountingGame.menuScene', []).controller('MenuScene', MenuSceneController).directive('menuScene', menuSceneDirective));
    }
  };
});
System.register('~/accountingGame.module', ['npm:babel-runtime@5.8.25/core-js/object/define-properties', 'github:angular/bower-angular@1.4.6', 'github:angular/bower-angular-animate@1.4.6', 'github:angular-ui/ui-router@0.2.15', 'github:brandly/angular-youtube-embed@1.1.0', 'accountingGame/accountingGame.html!github:systemjs/plugin-text@0.0.2', 'accountingGame/accountingGame.css!systemjs_plugins/css.js', '~/scenes/aboutScene/aboutScene.module', '~/scenes/endScene/endScene.module', '~/scenes/inGameScene/inGameScene.module', '~/scenes/menuScene/menuScene.module'], function (_export) {
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
      // HACK(douglasduteil): no viedo plz
      return;
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
        var currentState = StateHandler.current;

        if (currentState) {
          console.info(this._player.getCurrentTime(), currentState.update.name);
          currentState.update(this._player.getCurrentTime(), this._player);
        }

        // HACK(douglasduteil): no viedo plz
        //window.requestAnimationFrame(() => this.loop());
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
    }, function (_githubAngularBowerAngular146) {
      angular = _githubAngularBowerAngular146['default'];
    }, function (_githubAngularBowerAngularAnimate146) {}, function (_githubAngularUiUiRouter0215) {}, function (_githubBrandlyAngularYoutubeEmbed110) {}, function (_accountingGameAccountingGameHtmlGithubSystemjsPluginText002) {
      accountingGameHtmlTemplate = _accountingGameAccountingGameHtmlGithubSystemjsPluginText002['default'];
    }, function (_accountingGameAccountingGameCssSystemjs_pluginsCssJs) {
      accountingGameStyle = _accountingGameAccountingGameCssSystemjs_pluginsCssJs['default'];
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
System.register('index.js', ['index.css!systemjs_plugins/css.js', 'accountingGame.js'], function (_export) {
  //

  'use strict';

  var crtiticalStyle, accountingGameModule;
  return {
    setters: [function (_indexCssSystemjs_pluginsCssJs) {
      crtiticalStyle = _indexCssSystemjs_pluginsCssJs['default'];
    }, function (_accountingGameJs) {
      accountingGameModule = _accountingGameJs['default'];
    }],
    execute: function () {

      angular.bootstrap(document, [accountingGameModule.name]);
    }
  };
});

// Fake file definitions
System.register('index.css!systemjs_plugins/css.js', [], function() { return { setters: [], execute: function() {}}});
System.register('accountingGame/accountingGame.css!systemjs_plugins/css.js', [], function() { return { setters: [], execute: function() {}}});
// Inject all the css
(function(c){if (typeof document == 'undefined') return; var d=document,a='appendChild',i='styleSheet',s=d.createElement('style');s.type='text/css';d.getElementsByTagName('head')[0][a](s);s[i]?s[i].cssText=c:s[a](d.createTextNode(c));})
('/* Helpers */\n\n._accountingGame_helpers__fill {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n}\n\n/**/\n\n._accountingGame_accountingGame__bgVideoWrapper {\n  z-index: -99;\n  overflow: hidden;\n}\n\n/* Normalizer */\n\n* {\n  /* "box-sizing" not autoprefixed */\n  box-sizing: border-box;\n}\n\nhtml {\n  /* "font-smoothing" not autoprefixed */\n  -webkit-font-smoothing: antialiased;\n  /* "tap-highlight-color:" not autoprefixed */\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n  -webkit-text-size-adjust: 100%;\n      -ms-text-size-adjust: 100%;\n          text-size-adjust: 100%;\n}\n\nbody {\n  margin: 0;\n  background: #111;\n  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;\n  color: #f1f1f1;\n}\n\n.wf-active > body {\n  font-family: "Fugaz One", "Helvetica Neue", Helvetica, Arial, sans-serif;\n}\n\nbutton {\n  background: none;\n  border: 0;\n  padding: 0;\n  color: inherit;\n  display: block;\n  text-align: center;\n  text-decoration: none;\n}\n\nh1, h2, h3, h4, h5, h6 {\n  line-height: 1.1;\n}\n\n\naccounting-game {\n  display: block;\n}\n');
//# sourceMappingURL=bundle.app.js.map