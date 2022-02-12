// Iterando sobre iteráveis assíncronos
var asyncIterable = {
    [Symbol.asyncIterator]() {
        return {
            i: 0,
            next() {
                if (this.i < 3) {
                    return Promise.resolve({ value: this.i++, done: false });
                }

                return Promise.resolve({ done: true });
            }
        };
    }
};

(async function () {
    for await (let num of asyncIterable) {
        console.log(num);
    }
})();

// 0
// 1
// 2


// Iterando sobre generators assíncronos
async function* asyncGenerator() {
    var i = 0;
    while (i < 3) {
        yield i++;
    }
}

(async function () {
    for await (let num of asyncGenerator()) {
        console.log(num);
    }
})();
// 0
// 1
// 2