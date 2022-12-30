function hide(element) {
    element.remove();
    onclick="hide(this)"
}
function kat(element) {
    element.remove();
}

var counterVal = 1;
function date(val) {
    document.getElementById("valor").innerHTML = val;
}

function increment() {
    date(++counterVal);
}

var btnElm = document.getElementById ('cora');
var pELm = document.getElementById('valor');
var counterVal = 0;

btnElm.onclick = function (){
    counterVal++;
    pELm.textContent = counterVal;
}

var btnElm1 = document.getElementById ('corazon');
var pELm1 = document.getElementById('aumentar');
var counterVal1 = 0;

btnElm1.onclick = function (){
    counterVal1++;
    pELm1.textContent = counterVal1;
}


var btnElm2 = document.getElementById ('coraz');
var pELm2 = document.getElementById('alzar');
var counterVal2 = 0;

btnElm2.onclick = function (){
    counterVal2++;
    pELm2.textContent = counterVal2;
}

