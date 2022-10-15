angular.module('TradableIndicesApp')
  .controller('ConstituentsDataCtrl', function ($scope, $http, $routeParams) {
	  $http({
          method: 'GET',
          url: 'constituent/' + $routeParams.indexId
      }).then(function (response) {
	      $scope.indexId  =  $routeParams.indexId;
    	  $scope.constiutentData = response.data;
      }, function(response) {
    	  console.error('Error requesting participants.')
      });
  });