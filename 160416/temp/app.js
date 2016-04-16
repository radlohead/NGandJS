angular.module('weatherApp', ['ngRoute', 'ngResource'])
    .config(function($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl : 'pages/home.html',
                controller : 'HomeCtrl'
            })
            .when('/forecast', {
                templateUrl: 'pages/forecast.html',
                controller : 'ForecastCtrl'
            })
            .otherwise('/')
//http://openweathermap.org/api
//
    })
    .service('CityService', function(){
        this.city = 'Seoul';
    })
    .controller('HomeCtrl', function($scope, CityService) {
        $scope.city = CityService.city;

        $scope.$watch('city', function(oldCity, newCity){
            CityService.city = newCity;
        })
    })
    .controller('ForecastCtrl', function($scope, $timeout, CityService, $resource) {
        $scope.forecastAPI = $resource('http://api.openweathermap.org/data/2.5/forecast/daily',{
            callback : 'JSON_CALLBACK'
        },{
            get : {method: 'JSONP'}
        });
        $scope.weatherResult = $scope.forecastAPI.get({q:'seoul', cnt:2});
        console.log($scope.weatherResult);
        $scope.city = CityService.city;

        $scope.convertToDate = function(dt){
            return new Date(dt * 1000);
        };
    })










