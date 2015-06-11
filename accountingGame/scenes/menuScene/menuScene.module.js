//

import angular from 'angular';

import menuSceneHtmlTemplate from './menuScene.html!text';

////

export default angular
  .module('accountingGame.menuScene', [])
  .directive('menuScene', menuSceneDirective)
;

function menuSceneDirective(){
  return {
    template: menuSceneHtmlTemplate
  }
}
