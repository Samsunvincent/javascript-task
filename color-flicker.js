
let color = ['green','red','blue','light-blue','dark-blue']
let colorIndex = 0;
let bttn = document.getElementById('bttn').onclick = function(){
    console.log('button clicked')
    document.body.style.background = color[colorIndex];
    colorIndex = (colorIndex + 1) % color.length;
}

