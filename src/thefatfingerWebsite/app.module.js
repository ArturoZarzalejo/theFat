(function () {
	"use strict";

	var cnChannels = require('./modules/usersOneDay/');
	var ffwsHome = require('./modules/home/');
	var ffwsWorks = require('./modules/works/');
	var cnCore = require('./modules/core/');
	var cnRules = require('./modules/rules/');

	var modules = [
		'ui.router',
	  'ngSanitize',
	  'ngAnimate',
	  'ngAria',
	  'ngMaterial',
	  'firebase',
	  cnCore.name,
	  cnChannels.name,
	  ffwsHome.name,
	  ffwsWorks.name,
	  cnRules.name
	];

	/**
	* @ngdoc overview
	* @name index
	*
	* @description
	*
	* # Virtual Center Config
	*
	*
	*/

	angular
	.module('virtual-center', modules)
	.config(require('./app.route.js'))
	.config(require('./app.config.js'))
	;

}());
