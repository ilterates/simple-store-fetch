angular.module('SiteService', []).factory('Site', ['$http', function($http){
  return {
    get : function() {
      return $http.get('/');
    }
  };
}]);
