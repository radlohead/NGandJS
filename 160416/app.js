
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
            .when('/forecast/:cnt', {
                templateUrl : 'pages/forecast.html',
                controller : 'ForecastCtrl'
            })
    })
    .service('CityService', function(){
        this.city = 'Seoul';
    })
    .directive('searchResult', function(){
        return {
            replace : true,
            restrict : 'E',
            transclude : true,
            templateUrl:'directives/search-result.html',
            scope : {
                weatherData : '=',
                convertToDateInDirective : '&',
                dateFormat : '@'
            }
        }
    })
    .controller('HomeCtrl', function($scope, CityService) {
        $scope.city = CityService.city;

        $scope.$watch('city', function(newCity){
            CityService.city = newCity;
        })

    })
    .controller('ForecastCtrl', function($scope, CityService, $resource, $routeParams) {
        $scope.city = CityService.city;
        $scope.cnt = $routeParams.cnt || '2';
        $scope.weatherAPI = $resource('http://api.openweathermap.org/data/2.5/forecast/daily',{
            callback : 'JSON_CALLBACK'
        },{
            get : {
                method : 'JSONP'
            }
        });
        var data = {q:$scope.city, cnt: $scope.cnt};
        console.log(data);
        $scope.weatherResult = $scope.weatherAPI.get(data);

        $scope.convertToDate = function(dt) {
            return new Date(dt * 1000);
        };

        $scope.convertToCelsius = function(degK){
            return Math.round(degK - 273.15);
        };

    })
