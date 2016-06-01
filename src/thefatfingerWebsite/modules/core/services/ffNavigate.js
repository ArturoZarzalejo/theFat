(function () {

	'use strict';

	/* @ngInject */
  module.exports = function ($anchorScroll) {

  	var scope = this;
  	scope.scrollTo = scrollTo;

    return scope;

  	function scrollTo () {
      $anchorScroll(arguments[0]);
  	}

		function random(){
			return Math.floor(Math.random() * arguments[1]) + arguments[0];
		}

  }

}())
