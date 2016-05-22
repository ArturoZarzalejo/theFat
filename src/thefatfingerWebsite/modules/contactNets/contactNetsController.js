(function(){
	'use strict';


  /* @ngInject */
  module.exports = function ($scope, $anchorScroll){

  	// $scope.contactNetsService = $cnContactNets;
    // $rootScope.fab.trigger.action = $cnCreateContactNet.createContactNet;

  	// $cnContactNets.get().then(function () {
      // console.log(arguments[0]);
  		// $cnContactNets.contactNets = arguments[0];
      // $cnContactNets.contactNets = [];

  	// });
		$scope.scrollTo = function () {
			console.log('lalala');
			$anchorScroll(arguments[0]);
		}

  }

}());
