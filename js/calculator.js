// window.addEventListener("load", init, false);

let body = document.querySelector('body');
let buttons = document.querySelectorAll('input');
buttons.addEventListener('click', (target) => {
    alert(target.currentTarget.tagName);
})
// seven.addEventListener('click', enter); 
// body.addEventListener('click', (target) => {
//     alert(target.currentTarget.tagName);
// })


let $ = function(id) {
    return window.document.getElementById(id);
}

function enter (i) {
    $('result').value = $('result').value + i.target.value;
}

function calculate() {
    $('result').value = eval($('result').value);
}

function init() {
    // $('seven').addEventListener('click', enter);
    // $('eight').addEventListener('click', enter);
    // $('nine').addEventListener('click', enter);
    // $('divide').addEventListener('click', enter);
    // $('four').addEventListener('click', enter);
    // $('five').addEventListener('click', enter);
    // $('six').addEventListener('click', enter);
    // $('multiply').addEventListener('click', enter);
    // $('one').addEventListener('click', enter);
    // $('two').addEventListener('click', enter);
    // $('three').addEventListener('click', enter);
    // $('subtract').addEventListener('click', enter);
    // $('zero').addEventListener('click', enter);
    // $('period').addEventListener('click', enter);
    // $('add').addEventListener('click', enter);
    // $('equal').addEventListener('click', calculate);
}



