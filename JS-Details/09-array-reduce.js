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


 //Reduce o array a um unico elemento. No caso um somatorio, por exemplo:
   let totalEstoque = estoque.reduce((total, produto) => {
     return total + produto.quantidade;
 }, 0);

 console.log(`Voce tem um total de  ${totalEstoque} produtos no estoque`);


let totalPreco = estoque.reduce((total, produto) => {
    return total + produto.preco;

},0);

console.log(`Voce tem um total de ${totalEstoque} produtos no estoque`);
console.log(`O valor total do seu estoque e ${totalPreco}`);
