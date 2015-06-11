//

import angular from 'angular';
import 'angular-youtube-embed';

import startSceneHtmlTemplate from './startScene.html!text';

////

export default angular
  .module('accountingGame.startScene', [])
  .directive('startScene', startSceneDirective)
;

function startSceneDirective(){
  return {
    template: startSceneHtmlTemplate
  }
}
