angular
  .module('appRoutes', []).config(['$routeProvider', '$locationProvider',

  function($routeProvider, $locationProvider) {
    $routeProvider
    .when('/', {
      templateUrl: 'views/site.html',
      controller : 'SiteController',
      as         : 'SiteCtrl'
    });

    $locationProvider.html5Mode({
    enabled: true,
    requireBase: false
  });
}]);
