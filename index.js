
{
    let dt = new Date()

    let date = dt.getDate();
    let month = dt.getMonth() + 1;
    let year = dt.getFullYear();



    let time = document.getElementById('time')
    time.innerHTML = (` ${date}/${month}/${year}`)


    let submit = document.getElementById('submit').onclick = function () {

        let type = document.getElementById('input-type').value;
        console.log('type', type);
        console.log(typeof(type))
        let typearr = type.split(`-`);
        console.log(typearr);
        if(typearr == 0){
            agedisplay.innerHTML = "null"
        }
        else{
            let age = '';
            let agedisplay = document.getElementById('age-display')
            age = year - typearr[0];
            agedisplay.innerHTML = (age)
            console.log('age :', age)

        }
        
     



    }
}
