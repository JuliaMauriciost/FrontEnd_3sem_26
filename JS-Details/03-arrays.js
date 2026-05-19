let frutasVermelhas = new Array();
let frutasCitricas = ["Limão", "Abacaxi", "Maracuja", "Morango"];

// frutasCitricas[0] = "Morango";
frutasVermelhas.push("Morango");
frutasVermelhas.push("Maçã");
frutasVermelhas.push("Framboesa");
frutasVermelhas.push("Cereja");
frutasVermelhas.push("Tomate");

console.log(frutasVermelhas);
console.log(frutasCitricas);

let frutaRemovida = frutasVermelhas.pop();//remover o ultimo item da lista/array

console.log(frutaRemovida);
console.log(frutasVermelhas);
console.log(frutasCitricas);
