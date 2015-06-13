//

import angular from 'angular';
import 'angular-animate';
import 'angular-ui-router';
import 'angular-youtube-embed';

import accountingGameHtmlTemplate from './accountingGame.html!text';

import aboutSceneModule from './scenes/aboutScene/aboutScene.module';
import endSceneModule from './scenes/endScene/endScene.module';
import inGameSceneModule from './scenes/inGameScene/inGameScene.module';
import menuSceneModule from './scenes/menuScene/menuScene.module';

////

export default angular
  .module('accountingGame', [
    aboutSceneModule.name,
    endSceneModule.name,
    inGameSceneModule.name,
    menuSceneModule.name,
    'ngAnimate',
    'ui.router',
    'youtube-embed'
  ])
  .config(accountingGameRoutesConfig)
  .controller('AccountingGame', AccountingGameController)
  .directive('accountingGame', accountingGameDirective)
  .factory('PlayerHandler', PlayerHandler)
  .factory('StateHandler', StateHandler)
;

//

// @ngInject
function accountingGameRoutesConfig($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/');
  $stateProvider
    .state('menu', {
      url: '/',
      template: '<menu-scene></menu-scene>'
    })
    .state('about', {
      url: '/about',
      template: '<about-scene></about-scene>'
    })
    .state('end', {
      url: '/end',
      template: '<end-scene></end-scene>'
    })
    .state('inGame', {
      url: '/game',
      template: '<in-game-scene></in-game-scene>'
    })
  ;
}

// @ngInject
function accountingGameDirective() {
  return {
    template: accountingGameHtmlTemplate,
    controller: 'AccountingGame as accountingGame'
  }
}

// @ngInject
function AccountingGameController($scope, $window, $timeout, PlayerHandler, StateHandler) {
  const accountingGame = this;
  accountingGame.youtubeVideo = 'HiHCroJDxSA';

  // FOLLOWING https://developers.google.com/youtube/iframe_api_reference?hl=fr#Mobile_considerations
  // <video> can't autoplay on mobile so we will wait for a user input to display th ui
  accountingGame.videoIsPlaying = false;

  ////

  const deregisterPlayerReadyEvent =
    $scope.$on('youtube.player.ready', ($event, player) => {
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
      const current = StateHandler.current;

      if (!current){
        return;
      }
      // HACK
      // FORCE TRY THE CURRENT STATE
      current.update(player.getCurrentTime(), player);

      if(current.playerState !== player.getPlayerState()){
        switch (current.playerState){
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

    const waitForVideoFirstFrameIntervalId =
      setInterval(_waitForVideoFirstFrame, 1000);
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
function PlayerHandler(StateHandler){
  return {
    get player(){ return this._player; },
    set player(player) {
      player.mute();
      player.seekTo(0);
      player.playVideo();
      this._player = player;
    },

    loop: function(){
      const currentState = StateHandler.current;


      if (currentState){
        console.info(this._player.getCurrentTime(), currentState.update.name);
        currentState.update(this._player.getCurrentTime(), this._player);
      }

      window.requestAnimationFrame(() => this.loop());
    }
  };
}

// @ngInject
function StateHandler(){
  return {
    current: null
  };
}


