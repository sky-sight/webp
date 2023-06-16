document.addEventListener('DOMContentLoaded', function() {

    document.querySelector('#submit').disabled = true;

    document.querySelector('#todo').onkeyup = () => {

        if (document.querySelector('#todo').value.length > 0) 
        
        {
            document.querySelector('#submit').disabled = false;
        } else
        
        {
            document.querySelector('#submit').disabled = true;
        }
    }

    document.querySelector('form').onsubmit = () => {
       // event.preventDefault(); // Prevent form submission and page refresh

        const todo = document.querySelector('#todo').value;
        console.log(todo);

        const li = document.createElement('li');
        li.innerHTML = todo;

        document.querySelector('#tasks').appendChild(li);

        document.querySelector('#todo').value = '';

        return false;
    }
});