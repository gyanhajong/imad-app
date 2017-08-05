console.log('Loaded!');

var element = document.getElementById('te');

element.innerHTML = 'This is the new content';

//Move the Image

var img = document.getElementById('madi');

img.onclick = function(){
    img.style.marginLeft = '100px';
};