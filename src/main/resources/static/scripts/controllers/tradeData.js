angular.module('TradableIndicesApp')
  .controller('TradeDataCtrl', function ($scope, $http, $routeParams) {
	  $http({
          method: 'GET',
          url: '/trade-service/trade/' + $routeParams.indexId
      }).then(function (response) {
    	  $scope.tradeData = response.data;
      }, function(response) {
    	  console.error('Error requesting participants.')
      });
  });