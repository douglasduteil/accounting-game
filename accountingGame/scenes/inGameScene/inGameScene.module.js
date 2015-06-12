//

import angular from 'angular';
import _ from 'lodash';

import inGameSceneHtmlTemplate from './inGameScene.html!text';

const QUESTION_TIME_LIMIT = 1500 * 1000; // seconds
const FAIL_FRAME = {
  start: 75,
  end: 70
};

const SUCCESS_FRAME = {
  start: 64,
  end: 89
};

const BREAK_FRAMES = [
  {
    start: 64,
    isSuccessful: true,
    end: 89
  },
  {
    start: 70,
    isSuccessful: false,
    end: 71
  }
];

////

export default angular
  .module('accountingGame.inGameScene', [])
  .controller('InGame', InGameController)
  .directive('inGameScene', inGameSceneDirective)
;

// @ngInject
function inGameSceneDirective() {
  return {
    controller: 'InGame as inGame',
    template: inGameSceneHtmlTemplate
  }
}

// @ngInject
function InGameController($scope, StateHandler) {
  const inGame = this;

  inGame.calculateRemainingTime = calculateRemainingTime;
  //

  const frames = _.clone(BREAK_FRAMES);
  StateHandler.current = Ping(60);

  //

  function calculateRemainingTime(start, end){
    return Math.floor((end - start) / 1000) + 1;
  }

  function Ping(startTime) {

    let isWaitingForAwnser = false;

    return {
      update: pingUpdate
    };

    ////

    function pingUpdate(time, player) {
      const nextBreak = _.first(frames);

      //
      //if (time < startTime && player.getPlaybackRate() < 2) {
      //  player.setPlaybackRate(2);
      //}
      //
      if (time < startTime) {
        player.seekTo(startTime);
      } else if (time >= nextBreak.start) {
        player.pauseVideo();
        StateHandler.current = QAndA();
      }
    }
  }

  function QAndA() {

    const MAX_TIME = window.performance.now() + QUESTION_TIME_LIMIT;
    inGame.askQuestion = {
      question: 'YOLO ?',
      answers: [
        'Yeah',
        'F**** Yeah',
        'All Day',
        'Reponse D'
      ]
    };

    return {
      playerState: YT.PlayerState.PAUSED,
      update: answerTimerUpdate
    };

    ////

    function answerTimerUpdate(time, player) {
      const now = window.performance.now();

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

    function Fail() {

      const failingFrame = frames.pop();

      return {
        update: failUpdate
      };

      ////

      function failUpdate(time, player) {
        if (time > failingFrame.end) {
          StateHandler.current = Ping();
        }
      }

    }
  }
}

