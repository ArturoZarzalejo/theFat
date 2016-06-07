(function(){

"use strict";

  /* @ngInject */
  module.exports = function ($stateProvider, $urlRouterProvider){

		$stateProvider
			.state('ffws', {
				// url: "/",
				abstract:true,
				templateUrl: "/layout.html",
				// controller: "contactNetsController"
			})
			.state('ffws.home', {
				url: "/home",
				templateUrl: "/modules/home/home.html",
				controller: "homeController"
			})
      .state('ffws.works', {
				url: "/works/:id",
				templateUrl: "/modules/works/works.html",
				controller: "worksController"
			})
			.state('ffws.usersOneDay', {
				url: "/usersOneDay",
				templateUrl: "/modules/usersOneDay/usersOneDay.html",
				controller: "usersOneDayController"
			})

		$urlRouterProvider.otherwise("/home");

  }

}());
