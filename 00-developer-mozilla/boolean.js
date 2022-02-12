var x = new Boolean(false);
if (x) {
    // esse código é executado
}

var x = false;
if (x) {
    // esse código não é executado
}


var x = Boolean(expression);     // preferido

var myFalse = new Boolean(false);   // valor inicial false
var g = new Boolean(myFalse);       // valor inicial true

var myString = new String('Hello'); // objeto String
var s = new Boolean(myString);      // valor inicial true

