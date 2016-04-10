angular.module('myApp', ['ngRoute'])
    .config(function($routeProvider){
        $routeProvider
            .when('/', {
                templateUrl: 'pages/first.html',
                controller: 'FirstCtrl'
            })
            .when('/second', {
                templateUrl: 'pages/second.html',
                controller: 'SecondCtrl'
            })
            .when('/second/:num', {
                templateUrl: 'pages/second.html',
                controller: 'SecondCtrl'
            })
    })
    .directive('searchResult', function(){
        return {
            replace: true,
            restrict: 'E', //E: element A: Attribute, C: Class, M: Comment
            templateUrl: 'directives/search-result.html',
            /*scope: {
                personName : '@',
                personAddress : '@'
            }*/
            scope:{
                personObject : '='
            }
        }
    })
    .controller('FirstCtrl', function($scope) {
        $scope.name = '첫번째 컨트롤러!!@@@';
        $scope.person = {
            name : '김수호',
            address : '서울시 구로구 신도림동'
        };
    })
    .controller('SecondCtrl', function($scope, $routeParams) {
        $scope.num = $routeParams.num || 1;
    })
