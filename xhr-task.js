

window.onload = function () {
    let xhr = new XMLHttpRequest();
    console.log(xhr);
    xhr.open('get', 'https://fakestoreapi.com/products');
    xhr.send();
    
    xhr.onreadystatechange = function () {
        console.log("ready state :  ", xhr.readyState);
        if (xhr.readyState === 4) {
            console.log('status', xhr.status);
            if (xhr.status === 200) {
                let response = xhr.response;
                console.log('response : ', response);
                console.log('type of response : ', typeof (response));

                let datas = JSON.parse(response);
                console.log('datas : ', datas);

                let title = document.getElementsByClassName('title');
                let image = document.getElementsByClassName('image');
                let description = document.getElementsByClassName('description');
                let image1 = document.getElementsByClassName('image1')
                // let title1 =document.getElementsByClassName('title1')
                let description1 = document.getElementsByClassName('description1');
                let price =  document.getElementsByClassName('price');

                //    title
                for (let i = 0; i < title.length && i < datas.length; i++) {
                    title[i].innerHTML = (datas[i].title);
                }
                for (let i = 0; i < image.length && i < datas.length; i++) {
                    image[i].src = (datas[i].image);
                }
                for (let i = 0; i < description.length && i < datas.length; i++) {
                    description[i].innerHTML = (datas[i].description).slice(0,100)+"...";
                }

                // box section
                for (let i =1; i<image1.length && i<datas.length-1; i++){
                    image1[i].src = (datas[i].image)
                }
                
                // for(let i = 0; i<description1.length && i<datas.length; i++){
                //     description1[i].innerHTML = datas[i].description.slice(0,96);
                // }
                for(let i = 0; i<price.length && i<datas.length; i++){
                    price[i].innerHTML = `$${datas[i].price}`;
                }
            }
        }
    }
}
