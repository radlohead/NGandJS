angular.module('csCenter', [])
    .service('CallService', function(){
        var count = 0;
        this.inBound = function() {};
        this.outBound = function() {
            count += 1;
        };
        this.showCount = function() {
            return count;
        }
    })
