let textinput =  document.getElementById('submit').onclick = function(){
    let input = document.getElementById('input').value;
    console.log(input);
    let regexprfordate =/^\d{1,2}-\d{1-2}-\d{4}/i;
    result = regexprfordate.test(input);
    if(result === true){
        console.log(result);

    }
    else{
        console.log("enter a valid date")
    }
}

