let submit = document.getElementById('submit').onclick = function(){
    let type = document.getElementById('type').value;
    let input = document.getElementById('input').value;
    let output = document.getElementById('output').value;
    if (input === "centimeter" && output ==="meter"){  
        type = type/100;
        console.log(type)
       
    }
    if(input === "centimeter" && output ==="inch"){
        type = type/2.54;
        console.log(type)
    }
    if (input === "meter" && output === "centimeter"){
        type = type*100;
        console.log(type);
    }
    if(input === "meter" && output === "inch"){
        type = type*39.37;
        console.log(type);

    }
    if(input === "inch" && output ==="centimeter"){
        type = type*2.54;
        console.log(type);

    }
    if(input === "inch" && output === "meter"){
        type =type/39.37;
        console.log(type);
    }
    let convertedvalue = document.getElementById('converted-value-display');
    convertedvalue.innerHTML = type;
    
     
}
