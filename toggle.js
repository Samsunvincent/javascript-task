let color = ["black","white"]
let text = ["white","black"]
count = 0;
textIndex = 0
let check = document.getElementById('check').onclick = function(){
    document.getElementById('txt').style.color = text[textIndex];
    document.body.style.background = color[count];
    count = (count+1) % color.length;
    textIndex = (textIndex+1) % text.length;
}