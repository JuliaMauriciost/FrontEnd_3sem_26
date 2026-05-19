const hobbies = [
    "Correr",
    "Nadar",
    "Jogar Bola",
    "Viajar",
    "Lutar",
    "Conversar Muito",
    "Ler Livro",
    "Malhar na Academia",
    "Maratonar Séries",
    "Dormir",
    "Jogar Basquete"
];

//utilizado para interar arrays e retornar um novo array, compondo um novo resultado para cada indice do array antigo, veja:

 const novosHobbies = hobbies.map((hob) => {
    return `<p>${hob}</p>`;
});

console.log(novosHobbies);