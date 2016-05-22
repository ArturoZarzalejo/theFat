(function(){

"use strict";

  /* @ngInject */
  module.exports = function ($stateProvider, $urlRouterProvider){

		$stateProvider
			.state('contactnets', {
				// url: "/",
				abstract:true,
				templateUrl: "/thefatfingerWebsite/layout.html",
				// controller: "contactNetsController"
			})
			.state('contactnets.home', {
				url: "/contactnets",
				templateUrl: "/thefatfingerWebsite/modules/contactNets/contactNets.html",
				controller: "contactNetsController"
			})
			.state('contactnets.usersOneDay', {
				url: "/usersOneDay",
				templateUrl: "/thefatfingerWebsite/modules/usersOneDay/usersOneDay.html",
				controller: "usersOneDayController"
			})

		$urlRouterProvider.otherwise("/contactnets");

  }

}());
