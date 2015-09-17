//

import angular from 'angular';
import _ from 'lodash';

import inGameSceneHtmlTemplate from './inGameScene.html!text';

const QUESTION_TIME_LIMIT = 1500 * 1000; // seconds


import {
  ALONE_FRAMES,
  LOSING_FRAMES,
  PLAYING_FRAMES,
  VIDEO_FRAMES,
  WINNING_FRAMES
} from './FRAMES'

const QUESTIONS = [
  {
    question: 'YOLO ?',
    correctResponseIndex: 1,
    answers: [
      'Yeah',
      'F**** Yeah',
      'All Day',
      'Reponse D'
    ]
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
function InGameController($state, $scope, StateHandler) {
  const inGame = this;

  inGame.calculateRemainingTime = calculateRemainingTime;
  inGame.askQuestion = null;
  inGame.answerResponse = null;
  inGame.score = 0;
  inGame.userAnswer = userAnswer;

  //

  let frames = _.clone(VIDEO_FRAMES);
  StateHandler.current = Ping();

  //

  function calculateRemainingTime(start, end) {
    return Math.floor((end - start) / 1000) + 1;
  }

  function userAnswer(answer) {
    if (!inGame.askQuestion) {
      return;
    }

    StateHandler.current =
      inGame.askQuestion.answers.indexOf(answer) === inGame.askQuestion.correctResponseIndex ?
        Success() :
        Fail();

    inGame.askQuestion = null;
  }

  //

  // States
  // -----------------------------------

  function Ping() {

    const playingFrame = _.find(frames, {state: PLAYING_FRAMES});
    const canWinOrLose =
      _.find(frames, {state: WINNING_FRAMES}) &&
      _.find(frames, {state: LOSING_FRAMES});
    const canStillPlay = playingFrame && canWinOrLose;
    if (!canStillPlay){
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

    const MAX_TIME = window.performance.now() + QUESTION_TIME_LIMIT;
    inGame.askQuestion = _.first(QUESTIONS);

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

  }

  function Fail() {

    const failingFrame = _.find(frames, {state: LOSING_FRAMES});
    inGame.answerResponse = { valid : false };
    //inGame.score--;

    if (!failingFrame){
      throw new Error('invalid state');
    }

    frames = _.drop(frames, frames.indexOf(failingFrame) + 1);

    return {
      playerState: YT.PlayerState.PLAYING,
      update: failUpdate
    };

    ////

    function failUpdate(time, player) {

      if(this.playerState !== player.getPlayerState()){
        player.playVideo();
      }

      if (time < failingFrame.start) {
        player.seekTo(failingFrame.start);
      }else if (time > failingFrame.end) {
        inGame.answerResponse = null;
        $scope.$digest();
        StateHandler.current = Ping();
      }
    }

  }

  function Success() {
    const successfulFrame = _.find(frames, {state: WINNING_FRAMES});
    inGame.answerResponse = { valid : true };
    inGame.score++;

    if (!successfulFrame){
      throw new Error('invalid state');
    }

    frames = _.drop(frames, frames.indexOf(successfulFrame) + 1);

    return {
      playerState: YT.PlayerState.PLAYING,
      update: successUpdate
    };

    ////

    function successUpdate(time, player) {

      if(this.playerState !== player.getPlayerState()){
        player.playVideo();
      }

      if (time < successfulFrame.start) {
        player.seekTo(successfulFrame.start);
      }else if (time > successfulFrame.end) {
        inGame.answerResponse = null;
        $scope.$digest();
        StateHandler.current = Ping();
      }
    }

  }

}

