document.addEventListener('DOMContentLoaded', ()=> {
    document.querySelector('select').onchange = function() {
       document.querySelector('#LeasePy').style.color = this.value;

    }




}); 