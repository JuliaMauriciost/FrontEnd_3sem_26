const estoque = [
    {
        descricao : "Camisa Polo",
        cor : "verde",
        preco : 49.99,
        perfil : "M",
        quantidade : 10,
        promocao : false
    },
    {
        descricao : "Camisa Polo",
        cor : "Preta",
        preco : 60.90,
        perfil : "F",
        quantidade : 15,
        promocao : true
    },
    {
        descricao : "Camisa Polo",
        cor : "Azul",
        preco : 59.00,
        perfil : "M",
        quantidade : 100,
        promocao : true
    },
    {
        descricao : "Camisa Polo",
        cor : "Roxa",
        preco : 49.99,
        perfil : "F",
        quantidade : 5,
        promocao : false
    },
];

// const camisaF = estoque.filter((f) => {
//     return f.perfil == "F";
// });

// console.log(camisaF);

const camisaPromocao = estoque.filter((t) => {
    return t.promocao == true;
});

console.log(camisaPromocao);
