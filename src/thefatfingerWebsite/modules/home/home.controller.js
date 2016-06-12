(function(){
	'use strict';


  /* @ngInject */
  module.exports = function ($scope, $anchorScroll, $ffWorks, $location, $ffNavigate, $mdToast){


		$scope.scrollTo = scrollTo;
		$scope.selectWork = selectWork;
		$scope.$ffWorks = $ffWorks;
		$scope.$ffNavigate = $ffNavigate;
		$scope.send = send;


		function selectWork() {
			// console.log(arguments);
			console.log(arguments[0]);
			$location.path('/works/'+arguments[0].id);
		}
		function send() {
			// console.log('enviando mensaje');
			 $mdToast.show($mdToast.simple().textContent('Message send!'));
		}

		// function scrollTo() {
		// 	console.log('lalala');
		// 	$anchorScroll(arguments[0]);
		// }



  }

}());
