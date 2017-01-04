console.log("SiteCtrl.js");
angular.module("SiteCtrl", [])
  .controller("SiteController", ['$scope', '$http','$injector',function($scope, $http, $injector) {
      $scope.get = function() {
        console.log("get function initiated");
        $http({
          method: 'GET',
          url: 'http://sneakpeeq-sites.s3.amazonaws.com/interviews/ce/feeds/store.js'
        }).then(function getSuccessCallback(response) {
          $scope.data = response.data.products;
          //$scope.products = response.data.products;
          //console.log($scope.products);
          var pricesCent = [];
          var pricesDollar = [];
          for (var i = 0; i !== 6; i++) {
            pricesCent.push(response.data.products[i].msrpInCents);
            pricesDollar.push((pricesCent[i]/100).toFixed(2));
            console.log(pricesDollar +"$");
          }
          //console.log(response.data.products);
        }, function getErrorCallback(response) {
          console.log("Couldn't get any data", response);
        });
      };
    }
  ]);
