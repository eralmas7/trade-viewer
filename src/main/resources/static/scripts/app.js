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
