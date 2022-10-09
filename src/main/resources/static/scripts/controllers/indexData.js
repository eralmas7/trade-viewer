angular.module('TradableIndicesApp')
  .controller('IndexDataCtrl', function ($scope, $http) {
	  $http({
          method: 'GET',
          url: "indices/"
      }).then(function(response) {
    	  $scope.indexData = response.data;
      }, function(response) {
    	  console.error('Error requesting races');
      });
  });