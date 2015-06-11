//

import angular from 'angular';

import aboutSceneHtmlTemplate from './aboutScene.html!text';

////

export default angular
  .module('accountingGame.aboutScene', [])
  .directive('aboutScene', aboutSceneDirective)
;

function aboutSceneDirective(){
  return {
    template: aboutSceneHtmlTemplate
  }
}
