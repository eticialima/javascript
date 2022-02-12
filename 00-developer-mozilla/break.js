function testaBreak(x) {
    var i = 0;

    while (i < 6) {
        if (i == 3) {
            break;
        }
        i += 1;
    }
    return i * x;
}
  
console.log(testaBreak)