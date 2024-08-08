let counter = 0;
document.getElementById('decre').onclick = function(){
    counter -=1;
    document.getElementById('counter').innerHTML = counter;
}
document.getElementById('res').onclick = function(){
    counter = 0;
    document.getElementById('counter').innerHTML = counter;
}
document.getElementById('incre').onclick = function() {
    counter += 1;
    document.getElementById('counter').innerHTML = counter;
  
}

  


