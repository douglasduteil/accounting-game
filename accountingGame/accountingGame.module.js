//

import angular from 'angular';
import 'angular-animate';
import 'angular-ui-router';
import 'angular-youtube-embed';

import accountingGameHtmlTemplate from './accountingGame.html!text';

import aboutSceneModule from './scenes/aboutScene/aboutScene.module';
import startSceneModule from './scenes/startScene/startScene.module';

////

export default angular
  .module('accountingGame', [
    aboutSceneModule.name,
    'ngAnimate',
    startSceneModule.name,
    'ui.router',
    'youtube-embed'
  ])
  .config(accountingGameRoutesConfig)
  .controller('AccountingGame', AccountingGameController)
  .directive('accountingGame', accountingGameDirective)
;

//

// @ngInject
function accountingGameRoutesConfig($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/');
  $stateProvider
    .state('start', {
      url: '/',
      template: '<start-scene></start-scene>'
    })

    .state('about', {
      url: '/about',
      template: '<about-scene></about-scene>'
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
function AccountingGameController($scope, $window) {
  const accountingGame = this;
  accountingGame.youtubeVideo = 'HiHCroJDxSA';

  // FOLLOWING https://developers.google.com/youtube/iframe_api_reference?hl=fr#Mobile_considerations
  // <video> can't autoplay on mobile so we will wait for a user input to display th ui
  accountingGame.videoIsPlaying = false;

  accountingGame.start = start;

  ////

  const deregisterPlayerReadyEvent =
    $scope.$on('youtube.player.ready', _onPlayerReady);


  ////

  function start() {

  }

  ////


  function _onPlayerReady($event, player) {

    //window.addEventListener('blur', _onWindowBlur);
    //window.addEventListener('focus', _onWindowFocus);
window.onblur = _onWindowBlur;
window.onfocus = _onWindowFocus;

    function _onWindowBlur(){
      accountingGame.videoIsPlaying = false;
      player.pauseVideo();
      console.log('pause');
    }

    function _onWindowFocus(){
      console.log('play');
      player.playVideo();
      waitForVideoReady(player);
    }

    startExperience(player);
    waitForVideoReady(player);
  }

  function waitForVideoReady(player) {


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

function startExperience(player) {
  // Default start config
  player.mute();
  player.seekTo(0);
  player.playVideo();

  let state = IdelMode(player);

  setInterval(updateLoop, 1000);

  ////

  function updateLoop() {
    state.update(player.getCurrentTime());
  }

  function spySecond() {

  }

  function loopToIdle() {

  }
}

function IdelMode(player) {

  return {
    update: idelUpdate
  }

  ////

  function idelUpdate(time) {
    if (time > 30) {
      player.seekTo(0);
    }
  }
}
