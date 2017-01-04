console.log("test");
angular.module("SiteCtrl", [])
  .controller("SiteController", ['$scope', '$http','$injector',function($scope, $http, $injector) {
      $scope.get = function() {
        $http({
          method: 'GET',
          url: 'http://sneakpeeq-sites.s3.amazonaws.com/interviews/ce/feeds/store.js'
        }).then(function getSuccessCallback(response) {
          $scope.data = response.data;
          console.log($scope.data);
        }, function getErrorCallback(response) {
          console.log("Couldn't get any data", response);
        });
      };
    }
  ]);
