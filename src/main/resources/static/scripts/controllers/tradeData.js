angular.module('TradableIndicesApp')
  .controller('TradeDataCtrl', function ($scope, $http, $routeParams) {
	  $http({
          method: 'GET',
          url: 'trade/' + $routeParams.indexId
      }).then(function (response) {
		  $scope.indexId  =  $routeParams.indexId;
    	  $scope.tradeData = response.data;
      }, function(response) {
    	  console.error('Error requesting participants.')
      });
  });