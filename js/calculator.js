window.addEventListener("load", init, false);

let $ = function(id) {
    return window.document.getElementById(id);
}

function enter (i) {
    $('result').value = $('result').value + i;
}

function calculate() {
    $('result').value = eval($('result').value);
}

function init() {
    const calculator = document.getElementById('calculator');
    calculator.addEventListener('click', (event) => {
        let enteredChar = event.target.value;
        if (enteredChar === '=') {
            calculate();
        }
        else {
        enter(enteredChar);
        // break;
        }
    })
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
