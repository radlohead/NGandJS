angular.module('myApp', ['csCenter','chart.js'])
    .value('SERVER_URL', 'http://www.daum.net')
    .controller('RootCtrl', function($scope){
        //$scope.name = '루트컨트롤러!! 바디다!!!';

    })
    .controller('MainCtrl', function($scope, CallService) {
        $scope.name = '메인컨트롤러';

        var bookmarks = localStorage.getItem('bookmarks');
        var parsedBookmarks = JSON.parse(bookmarks);
        $scope.bookmarks = parsedBookmarks || [];
        $scope.add = function(a) {
            if(!a || !a.txt) return;

            $scope.bookmarks.push({href: a.txt});
            localStorage.setItem(
                'bookmarks',
                JSON.stringify($scope.bookmarks)
            );
            a.txt = '';
        };
        $scope.delete = function(idx) {
            $scope.bookmarks.splice(idx, 1);
            localStorage.setItem(
                'bookmarks',
                JSON.stringify($scope.bookmarks)
            );
        };
    })
    .controller('SecondCtrl', function($scope, $log, SERVER_URL, CallService) {
        $scope.server = SERVER_URL;
        $scope.sw = false;
        $scope.toggle = function() {
            $scope.sw = !$scope.sw;
        }

    })
    .controller('ChartCtrl', function($scope){
        $scope.data = [
            [123,234,345,111,11,97,43],
            [112,444,123,166,421,522,11],
            [44,11,345,22,11,111,43]
        ];
        $scope.dd = [44,11,345,22,11,111,43];
        $scope.legend = true;
        $scope.series = ['A', 'B','C'];
        $scope.labels = ['월','화','수','목','금','토','일'];
    })










