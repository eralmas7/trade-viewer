angular.module('TradableIndicesApp')
  .controller('MainCtrl', function ($scope, $http) {
	  $http({
          method: 'GET',
          url: '/index-service'
      }).then(function(response) {
    	  $scope.tradeData = response.data;
      }, function(response) {
    	  console.error('Error requesting races');
      });
  });