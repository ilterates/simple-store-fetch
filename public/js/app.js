var app = angular.module('fetch', ['ngRoute', 'appRoutes', 'SiteCtrl', 'SiteService']);
console.log("app.js");

app.filter('Dollars', function () {
    return function (price) {
        return (price / 100).toFixed(2);
    };
});
