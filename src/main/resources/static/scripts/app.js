angular
  .module('TradableIndicesApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/trade-service/:indexId', {
    	  templateUrl: 'views/tradeData.html',
    	  controller: 'TradeDataCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });