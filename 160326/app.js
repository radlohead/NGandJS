angular.module('myApp', [])
    .controller('MainCtrl', function($scope) {
        $scope.name = '수호';
        
        $scope.friends = [{
            name: '수호'
        },{
            name : '다정'
        },{
            name : '의중'
        },{
            name : '진영'
        }];

        $scope.alert = function(txt) {
            alert(txt);
        };

        $scope.add = function(person){
            console.log(person);
            $scope.friends.push({name : person.name});
            person.name = '';
        };

        $scope.one = function(){
            return 100;
        };

        /*$scope.$watch('txt', function(oldValue, newValue){
            console.log('old : ', oldValue);
            console.log('new : ', newValue);
        });*/

    });
