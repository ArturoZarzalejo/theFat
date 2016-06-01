(function(){
	'use strict';


  /* @ngInject */
  module.exports = function ($scope, $anchorScroll, $ffWorks, $location, $ffNavigate){


		$scope.scrollTo = scrollTo;
		$scope.selectWork = selectWork;
		$scope.$ffWorks = $ffWorks;
		$scope.$ffNavigate = $ffNavigate;


		function selectWork() {
			// console.log(arguments);
			console.log(arguments[0]);
			$location.path('/works/'+arguments[0].id);
		}

		// function scrollTo() {
		// 	console.log('lalala');
		// 	$anchorScroll(arguments[0]);
		// }



  }

}());
