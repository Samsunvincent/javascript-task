let sum = 0;
for(let i=1;i<=10;i++){
 sum = sum + i;
}
console.log("the sum of natural numbers from 1-10 : ",sum);


// print even numbers between 1 and 20
let i = 0;
for(i = 1; i <= 20; i++)
{
    if(i % 2 == 0)
    {
        console.log(' even number',i);
    }
    // else{
    //     console.log('odd number',i)
    // }
}
// pattern 1
{
    let num = '';
  
    for(i=0; i<=5; i++){
        for(j = 1; j <= i; j++){
            num = num + j;

        }
    num = num+ '\n';
    }
    console.log(num)
}
// pattern 2


//prime number
// const str= prompt('enter a number');


let num = 7;
let y = 0;
for (let i = 2; i <= num / 2; i++) {
    if (num % i == 0) {
        {
            y++;
        }
    }
}
if (y == 0) {
    console.log('it is prime number', num);
}
else {
    console.log('it is not a prime number  : ', num)
}



