const button = document.querySelector('button');
const box = document.getElementById('colorBox');

button.onclick = function changeColor(){
    if(box.style.background == 'black'){
        box.style.background = 'yellow';
    }else{
        box.style.background = 'black'
    }
    
}