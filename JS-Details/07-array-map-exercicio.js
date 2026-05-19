const numeros = [
    50,
    200,
    250,
    800,
    992.87,
    800,
    500,
    9876,
    99,
    134
];

//Rodar o map gerando um novo array com o dobro dos nimeros do origina;
const novosNumeros = numeros.map((num) => {
    return num * 2;
});

console.log();//pula linha
console.log(`Array Modificado:`);
console.log();//pula linha

//apos, exiba os valores do array dobro no console utilizando o foreach
let textoResultado = "";
novosNumeros.forEach((num) => {
    textoResultado += `${num} | `;//acumula texto em uma struing (sem pular linha)

});

    console.log(textoResultado);//mostra o texto completo
    textoResultado = textoResultado.substring(0, textoResultado.length -3);
    console.log(textoResultado);
// 100 | 400 | 500 | 1600 | 1985.74 | 1600 | 1000 | 19752 | 198 | 268 |