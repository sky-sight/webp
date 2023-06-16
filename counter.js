document.addEventListener('DOMContentLoaded',function(){

  document.querySelector('button').onclick = counter;

  setInterval(counter,1000);

 });


let count = 0;

function counter(){

count++;

document.querySelector('h1').innerHTML = count;

setInterval(count,1000);

if(count%2===0){
   
   // alert(`customer reached to : ${count}`);

}



}

