//

import angular from 'angular';
import _ from 'lodash';

import endSceneHtmlTemplate from './endScene.html!text';

////

export default angular
  .module('accountingGame.endScene', [])
  .controller('End', EndController)
  .directive('endScene', endSceneDirective)
;

// @ngInject
function endSceneDirective(){
  return {
    controller: 'End as end',
    template: endSceneHtmlTemplate
  }
}

// @ngInject
function EndController($state, StateHandler){
  const end = this;

  if (!_.isNumber(StateHandler.score)){
    $state.go('menu');
  }

  end.score = StateHandler.score;
  StateHandler.score = null;
}
