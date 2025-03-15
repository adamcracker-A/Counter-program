
const increasebtn = document.getElementById('increase');
const resetbtn = document.getElementById('reset');
const decreasebtn = document.getElementById('decrease');
const countlabel = document.getElementById('countlabel');

let count = 0;

increasebtn.onclick = function(){
    countlabel.textContent = ++count;
}
decreasebtn.onclick = function(){
    countlabel.textContent = --count;
}
resetbtn.onclick = function(){
    count = 0;
    countlabel.textContent = count;
}