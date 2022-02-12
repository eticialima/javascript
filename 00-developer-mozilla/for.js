// Usando for
for (var i = 0; i < 9; i++) {
    console.log(i);
    // more statements
}


// Expressões for opcionais
var i = 0;
for (; i < 9; i++) {
    console.log(i);
    // more statements
}

for (var i = 0; ; i++) {
    console.log(i);
    if (i > 3) break;
    // more statements
}

var i = 0; 
for (; ;) {
    if (i > 3) break;
    console.log(i);
    i++;
}


// Usando for sem uma declaração 
function showOffsetPos(sId) {
    var nLeft = 0, nTop = 0; 
    for (var oItNode = document.getElementById(sId); // inicialização
        oItNode; // condition
        nLeft += oItNode.offsetLeft, nTop += oItNode.offsetTop, oItNode = oItNode.offsetParent) // expressão final
       /* empty statement */; 
    console.log("Offset position of \"" + sId + "\" element:\n left: " + nLeft + "px;\n top: " + nTop + "px;");
} 
showOffsetPos("content");  



