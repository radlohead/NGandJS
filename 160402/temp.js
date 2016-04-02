angular.module('myApp', [])
    .controller('MainCtrl', function($scope) {
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
    });
