angular.module.module('weatherApp', [])
    .controller('ForecastCtrl', function($filter, $scope, CityService, $resource, $routeParams, $filter, $http) {
        $scope.city = CityService.city;
        $scope.cnt = $routeParams.cnt || '2';
        $scope.btns = [{
            name : 'seoul'
        },{
            name : 'china'
        }, {
            name : 'tokyo'
        }];
        $scope.setCity = function(name){
            $scope.city = name;
            loadData();

        };
        $scope.weatherAPI = $resource('http://api.openweathermap.org/data/2.5/forecast/daily',{
            callback : 'JSON_CALLBACK'
        },{
            get : {
                method : 'JSONP'
            }
        });
        function loadData(){
            $scope.weatherResult = $scope.weatherAPI.get({q:$scope.city, cnt:7, APPID: '8d554a626fc5d01d77812b612a6de257'}, function(){
                drawChart($scope.weatherResult);
            })
        }
        function drawChart(weather){
            console.log(weather);
            $scope.data = [
                [23,51,23,123,54,123,54]
            ];
            $scope.labels = ['1','2','3','4','5','6','7'];

            $scope.data[0] = weather.list.map(function(v){
                return $scope.convertToCelsius(v.temp.day);
            });
            $scope.labels = weather.list.map(function(v){
                return $filter('date')(new Date(v.dt * 1000), 'yyyy-MM-dd')
            });

            /*for(var i=0;i<weather.list.length;i++){
                $scope.data[0].push($scope.convertToCelsius(weather.list[i].temp.day));
                $scope.labels.push($filter('date')(new Date(weather.list[i].dt * 1000), 'yyyy-MM-dd'))
            }*/


            $scope.series = ['A', 'B','C'];
            $scope.legend = true;
        }

        $scope.convertToDate = function(dt) {
            return new Date(dt * 1000);
        };

        $scope.convertToCelsius = function(degK){
            return Math.round(degK - 273.15);
        };

    })
