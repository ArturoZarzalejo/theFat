(function(){
	'use strict';

  /* @ngInject */
	module.exports = function ($scope, $cnContactNets, $cnChannels, $filter, $mdDialog) {

  	$scope.usersOneDay = [
			{
				name: 'Antonio García',
				mail: 'agarcia@fatfinger.com',
				description: 'Emprendedor de nacimiento =)'
			},
			{
				name: 'Fer Algomás!',
				mail: 'falgomas@fatfinger.com',
				description: 'Creativo obsesivo =)'
			},
			{
				name: 'Arturo Zarzalejo',
				mail: 'azarzalejo@fatfinger.com',
				description: 'Sexy programador =)'
			}
		]

  }

}());
