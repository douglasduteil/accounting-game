//

import angular from 'angular';

import menuSceneHtmlTemplate from './menuScene.html!text';

const FIRST_PING = 47;

////

export default angular
  .module('accountingGame.menuScene', [])
  .controller('MenuScene', MenuSceneController)
  .directive('menuScene', menuSceneDirective)
;

// @ngInject
function menuSceneDirective(){
  return {
    template: menuSceneHtmlTemplate,
    controller: 'MenuScene as menuScene'
  }
}

// @ngInject
function MenuSceneController(StateHandler){
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


