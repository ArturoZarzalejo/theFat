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
      url: 'http://inspiration.lumiart.cz/wp-content/uploads/2014/10/054_twitter-website-in-material-design.jpg'
    },{
      id: 2,
      name: '1 DIA',
      url: 'https://camo.githubusercontent.com/499eda8efbd30966fd0326d062d5c1aa549a4dc9/687474703a2f2f7777772e6765746d646c2e696f2f6173736574732f676f6f676c652d73657276696365732e706e67'
    },{
      id: 2,
      name: 'GREENPEACE',
      url: 'http://cdn1.tnwcdn.com/wp-content/blogs.dir/1/files/2015/07/1poXfoKp7KT-wOVy4kA92aw.png'
    }];


		return scope;

  }

}());
