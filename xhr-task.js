{
window.onload = function () {
    let xhr = new XMLHttpRequest();
    console.log(xhr);
    xhr.open('get', 'https://fakestoreapi.com/products');
    xhr.send();
    xhr.onreadystatechange = function () {
        console.log("ready state :  ", xhr.readyState);
        if (xhr.readyState === 4) {
            console.log('status', xhr.status)
            if (xhr.status === 200) {
                let response = xhr.response;
                console.log('response : ', response)
                console.log('type of response : ', typeof (response));

                let datas = JSON.parse(response);
                console.log('datas : ', datas);
            }
        }
    }
}

}