//Utilizado para filtrar um elemento dentro de um array. Retorna apenas o encintro, veja:
const numeros = [5, 10, 14, 50, 10, 900, 100, 10];

const numeroEncontrado = numeros.filter((n) => {
    return n == 10;
});

const nomes = [
    "Walyson", 
    "Davi", 
    "Edu", 
    "Laura", 
    "Livia", 
    "Amy", 
    "Paulo", 
    "James",
    "Nathan", 
    "Marcos", 
    "Felipe", 
    "Gabriel", 
    "Gabriele", 
    "Fontes",
];

pessoasLetraN = nomes.filter((nome) => {

    const primeiraLetra = nome.substring(0, 1);
    return primeiraLetra == "N" || primeiraLetra == "L";
});

 console.log(pessoasLetraN);