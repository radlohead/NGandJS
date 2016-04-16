
angular.module('weatherApp', ['ngRoute', 'ngResource'])
    .config(function($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl : 'pages/home.html',
                controller : 'HomeCtrl'
            })
            .when('/forecast', {
                templateUrl : 'pages/forecast.html',
                controller : 'ForecastCtrl'
            })
    })
    .controller('HomeCtrl', function($scope) {

    })
    .controller('ForecastCtrl', function($scope) {

    })
