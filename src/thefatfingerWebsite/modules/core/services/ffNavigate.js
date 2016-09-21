(function () {

	'use strict';

	/* @ngInject */
  module.exports = function ($anchorScroll, $location, $timeout) {

  	var scope = this;
  	scope.scrollTo = scrollTo;

    return scope;

  	function scrollTo () {
			var args = arguments;
			if ($location.path() != '/home') {
				console.log($location.path());
				$location.path('home');
				$timeout(function () {
					$anchorScroll(args[0]);
				})
			}else {
				$anchorScroll(args[0]);
			}
  	}

		function random(){
			return Math.floor(Math.random() * arguments[1]) + arguments[0];
		}

  }

}())
