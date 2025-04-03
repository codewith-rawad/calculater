const keys = [
    'item1', 'item2', 'item3', 'item4', 'item5', 'item6', 'item7', 'item8', 'item9', 'item0', 
    'itemdot', 'itemadd', 'itemmult', 'itemmins', 'itemdiv', 'itemreset', 'itemdelete', 'itemequal', 'screen'
];

const elements = {};
keys.forEach(key => {
    elements[key] = document.querySelector('.' + key);
});

const screen = elements['screen'];

let currentValue = "";
let previousValue = "";
let operator = "";

const numberKeys = ['item1', 'item2', 'item3', 'item4', 'item5', 'item6', 'item7', 'item8', 'item9', 'item0', 'itemdot'];
numberKeys.forEach(key => {
    elements[key].addEventListener('click', function () {
        currentValue += this.innerHTML;
        screen.innerHTML = currentValue;
    });
});


const operations = {
    'itemadd': '+',
    'itemmult': '*',
    'itemmins': '-',
    'itemdiv': '/'
};

Object.keys(operations).forEach(key => {
    elements[key].addEventListener('click', function () {
        if (currentValue !== "") {
            previousValue = currentValue;
            currentValue = "";
            operator = operations[key];
            screen.innerHTML = previousValue + " " + operator;
        }
    });
});

elements['itemequal'].addEventListener('click', function () {
    if (previousValue !== "" && currentValue !== "") {
        let result;
        switch (operator) {
            case '+':
                result = parseFloat(previousValue) + parseFloat(currentValue);
                break;
            case '-':
                result = parseFloat(previousValue) - parseFloat(currentValue);
                break;
            case '*':
                result = parseFloat(previousValue) * parseFloat(currentValue);
                break;
            case '/':
                result = parseFloat(previousValue) / parseFloat(currentValue);
                break;
            default:
                result = "Error";
        }
        screen.innerHTML = result;
        currentValue = result.toString();
        previousValue = "";
        operator = "";
    }
});


elements['itemreset'].addEventListener('click', function () {
    currentValue = "";
    previousValue = "";
    operator = "";












    screen.innerHTML = "";
});


elements['itemdelete'].addEventListener('click', function () {
    currentValue = currentValue.slice(0, -1);
    screen.innerHTML = currentValue;






    
});
