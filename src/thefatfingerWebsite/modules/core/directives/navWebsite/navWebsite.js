(function() {
	'use strict';

  /* @ngInject */
  module.exports = function ($location, $ffNavigate) {

  	var directive = {
        restrict: 'EA',
        scope : {},
        link: link,
        templateUrl: '/thefatfingerWebsite/modules/core/directives/navWebsite/navWebsite.html',
      	controller: controller
    };

    return directive;

    function link(scope, element, attr, ctrl) {
      console.log('navWebsite', scope);
			scope.$ffNavigate = $ffNavigate;
    }

    /* @ngInject */
    function controller ($scope) {

    }

  }


}());
