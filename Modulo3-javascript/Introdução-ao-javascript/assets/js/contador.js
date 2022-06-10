var currentNumberWrapper = document.getElementById('currentNumber');
var currentNumber = 0;
var cor = document.getElementById('currentNumber');

function increment() {
    if (currentNumber < 10){ 
        currentNumber++;
        currentNumberWrapper.innerHTML = currentNumber;
    }
}

function decrement() {
    if (currentNumber > -10){
        currentNumber--;
        currentNumberWrapper.innerHTML = currentNumber;
    }
}


