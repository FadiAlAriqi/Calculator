let input = document.getElementById('input');
let result = document.getElementById('result');


function appendNumber(num) {
    input.value += num;
}

function appendOperator(operator) {
    input.value += operator;
}

function calculate() {
    try{
        result.value = eval(input.value);
    }
    catch(error){
        result.value = "Error!";
    }
}

function clearResult() {
    input.value = '';
    result.value ='';
}

function deleteResult() {
    input.value = input.value.slice(0, -1);
}
