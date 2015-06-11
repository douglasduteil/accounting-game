//

import angular from 'angular';

import inGameSceneHtmlTemplate from './inGameScene.html!text';

////

export default angular
  .module('accountingGame.inGameScene', [])
  .controller('InGame', InGameController)
  .directive('inGameScene', inGameSceneDirective)
;

// @ngInject
function inGameSceneDirective(){
  return {
    template: inGameSceneHtmlTemplate
  }
}

// @ngInject
function InGameController(){
  const inGame = this;

}
