function ajax(path) {
    return new Promise(function(resolve, reject){
        var xhr = new XMLHttpRequest();
        xhr.open('get', path, true);
        xhr.send();
        xhr.onreadystatechange = function(){
            if(xhr.status === 404){
                reject(Error('페이지없음'))
            }
            if(xhr.status === 200 && xhr.readyState === 4){
                resolve(xhr.responseText);
            }
        }
    });
}

//실행코드
ajax('package.json').then(function(result){
    console.log(result);
}, function(err){
    console.error(err);
});
