(function(){
	"use strict";

	 /**
   * @ngdoc service
   * @name $ffWorks
   * @module core
   *
   * @description
   * Provides the works for the application
   *
   * @param {object} works
   *
   */

  /* @ngInject */
  module.exports = function ($q, $http){

		var scope = this;

		scope.works = [{
      id: 1,
      name: 'ESPARTBCN',
      url: 'assets/images/espartbcn.jpg'
    },{
      id: 2,
      name: '1 DIA',
      url: 'assets/images/oneday.jpg'
    },{
      id: 2,
      name: 'GREENPEACE',
      url: 'assets/images/greenpeace.jpg'
    }];


		return scope;

  }

}());
