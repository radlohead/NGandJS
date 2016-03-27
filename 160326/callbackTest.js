function a(func) {
    console.log('3초시작');
    setTimeout(function() {
        console.log('3초되고');
        func(function(f) {
            f('하하');
        })
    }, 3000);
}

a(function(func){
    func(function(str) {
        console.log('1초뒤에');
        setTimeout(function() {
            console.log(str);
        }, 1000)
    })
});
