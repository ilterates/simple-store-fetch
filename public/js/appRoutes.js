angular
  .module('appRoutes', []).config(['$routeProvider', '$locationProvider',

  function($routeProvider, $locationProvider) {
    $routeProvider
    .when('/', {
      templateUrl: 'views/page.html',
      controller : 'SiteController',
      as         : 'SiteCtrl'
    }).otherwise({redirectTo: '/'});

    $locationProvider.html5Mode({
    enabled: true,
    requireBase: false
  });
}]);
