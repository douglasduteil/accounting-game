//

import angular from 'angular';

import endSceneHtmlTemplate from './endScene.html!text';

////

export default angular
  .module('accountingGame.endScene', [])
  .directive('endScene', endSceneDirective)
;

function endSceneDirective(){
  return {
    template: endSceneHtmlTemplate
  }
}
