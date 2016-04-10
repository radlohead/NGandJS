function order() {
    return {
        eat: function(){
            return function() {
                return function() {
                    return {
                        sleep : function() {
                            return {
                                dream : [0,1,2,3,{
                                    good : {
                                        wakeup : function() {
                                            return '아! 잘먹고 잘자고 잘 일어났다';
                                        }
                                    }
                                }]
                            }
                        }
                    }
                }
            }
        }
    }
}
order().eat()()().sleep().dream[4].good.wakeup();


function $() {
    return {
        on : function() {
            
        }
    }
}

$('#btn').on('click', function( e ) {
    console.log( e );
});
