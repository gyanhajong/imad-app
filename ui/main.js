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

var nameInput = document.getElementById('name');
var name = nameInput.value;
var submit = document.getElementById('submit_btn');
submit.onclick = function(){
    var request = new XMLHttpRequest();
    //Captures the request and store it in a variable
    request.onreadystatechange = function(){
        if(request.readyState === XMLHttpRequest.DONE){
            if(request.status == 200){
                var names = request.responseText;
                names = JSON.parse(names);
                var list = '';
                for(var i = 0; i < names.length; ++i){
                    list = '<li>'+names[i]+'</li>';
                }
            }
            var ul = document.getElementById('namelist');
            ul.innerHTML = list;
        }
    }
    request.open('GET','http://hazgyan.imad.hasura-app.io/submit-name?name='+name,true);
    request.send(null);
};