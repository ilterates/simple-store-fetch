angular.module("SiteCtrl", [])
  .controller("SiteController", [
    '$scope', '$http', function($scope, $http) {
      $scope.get = function() {
        $http({
          method: 'GET',
          url: 'http://sneakpeeq-sites.s3.amazonaws.com/interviews/ce/feeds/store.js'
        }).then(function getSuccessCallback(response) {
          $scope.data = response.data;
          console.log(response.data);
        }, function getErrorCallback(response) {
          console.log("Couldn't get any data", response);
        });
      };
    }
  ]);
