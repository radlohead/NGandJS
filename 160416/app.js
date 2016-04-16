
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
    .service('CityService', function(){
        this.city = 'Seoul';
    })
    .controller('HomeCtrl', function($scope, CityService) {
        $scope.city = CityService.city;

        $scope.$watch('city', function(newCity){
            CityService.city = newCity;
        })

    })
    .controller('ForecastCtrl', function($scope, CityService, $resource) {
        $scope.city = CityService.city;
        $scope.weatherAPI = $resource('http://api.openweathermap.org/data/2.5/forecast/daily',{
            callback : 'JSON_CALLBACK'
        },{
            get : {
                method : 'JSONP'
            }
        });
        $scope.weatherResult = $scope.weatherAPI.get({q:$scope.city, cnt: 2});
        console.log($scope.weatherResult)
        $scope.convertToDate = function(dt) {
            return new Date(dt * 1000);
        };

        $scope.convertToCelsius = function(degK){
            return Math.round(degK - 273.15);
        };

    })
