var button = document.getElementById('counter');
button.onclick = function(){
    //Create a request
    var request = new XMLHttpRequest();
    
    
    //Captures the request and store it in a variable
    request.onreadystatechange = function(){
        if(request.readyState === XMLHttpRequest.DONE){
            if(request.status == 200){
                var counter = request.responseText;
                var span = document.getElementById('count');
                span.innerHTML = counter.toString();
            }
        }
    };
    
    
    //Captures the request
    request.open('GET','http://hazgyan.imad.hasura-app.io/counter',true);
   request.send(null);
   
};