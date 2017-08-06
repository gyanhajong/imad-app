var button = document.getElementById('counter');
button.onclick = function(){
    //Make a request to a counter endpoint
    
    //Captures the request and store it in a variable
    
    //Render the variable in the correct span
    counter = counter + 1;
    var span = document.getElementById('span');
    span.innerHTML = counter.toString();
};