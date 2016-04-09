angular.module('myApp', ['ngRoute'])
    .config(function($routeProvider){
        $routeProvider
            .when('/', {
                template: '<div>첫번째 페이지!!!!</div>'
            })
            .when('/second', {
                template: '<div>두번째 페이지23123123</div>'
            })
    })
    .controller('FirstCtrl', function($scope, $location) {
        $scope.name = '첫번째 컨트롤러!!@@@';
        console.log($location.path());
    })
