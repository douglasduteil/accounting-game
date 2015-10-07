//

import angular from 'angular';

import helpersStyle from '~/commons/helpers.scss!';

import aboutSceneStyle from './aboutScene.scss!';
import aboutSceneHtmlTemplate from './aboutScene.html!text';

////

export default angular
  .module('accountingGame.aboutScene', [])
  .directive('aboutScene', aboutSceneDirective)
;

function aboutSceneDirective(){
  return {
    template: aboutSceneHtmlTemplate,
    controllerAs: 'aboutCtrl',
    controller: function AboutController() {
      this.style = Object.assign({}, helpersStyle, aboutSceneStyle);
    }
  }
}
