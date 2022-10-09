var indicesModule = angular
  .module('TradableIndicesApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ]);
  indicesModule.config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/indexData.html',
        controller: 'IndexDataCtrl'
      })
      .when('/trade/:indexId', {
    	  templateUrl: 'views/tradeData.html',
    	  controller: 'TradeDataCtrl'
      })
      .when('/constituent/:indexId', {
    	  templateUrl: 'views/constituent.html',
    	  controller: 'ConstituentsDataCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
  indicesModule.run([
  '$rootScope',
  function($rootScope) {
    // see what's going on when the route tries to change
    $rootScope.$on('$locationChangeStart', function(event, newUrl, oldUrl) {
      // both newUrl and oldUrl are strings
      console.log('Starting to leave %s to go to %s', oldUrl, newUrl);
    });
  }
]);
