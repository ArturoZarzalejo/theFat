(function(){
	'use strict';

  /* ngInject */
	module.exports = function($rootScope, $scope, $ffWorks, $location, $stateParams, $filter){
		console.log('WorkId', $stateParams.id, $ffWorks);
		$scope.actualWork = $filter('filter')($ffWorks.works, {id : +$stateParams.id}, true)[0];
		console.log('filtro', $scope.actualWork);
  }

}());
