function resolverDepoisDe2Segundos(x) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(x);
        }, 2000);
    });
}

async function adicionar1(x) {
    var a = resolverDepoisDe2Segundos(20);
    var b = resolverDepoisDe2Segundos(30);
    return x + await a + await b;
}

adicionar1(10).then(v => {
    console.log(v);  // exibe 60 depois de 2 segundos.
});

async function adicionar2(x) {
    var a = await resolverDepoisDe2Segundos(20);
    var b = await resolverDepoisDe2Segundos(30);
    return x + a + b;
}

adicionar2(10).then(v => {
    console.log(v);  // exibe 60 depois de 4 segundos.
});



// Reescrevendo uma cadeia de Promise com uma função async
function pegarDadosProcessados(url) {
    return baixarDados(url) // retorna uma Promise
        .catch(e => {
            return baixarDadosReservas(url) // retorna uma Promise
        })
        .then(v => {
            return processarDadosNoWorker(v); // retorna uma Promise
        });
}


// ou 
async function pegarDadosProcessados(url) {
    let v;
    try {
        v = await baixarDados(url);
    } catch (e) {
        v = await baixarDadosReservas(url);
    }
    return processarDadosNoWorker(v);
}
