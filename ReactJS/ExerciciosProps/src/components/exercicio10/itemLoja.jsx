// 10 ) Crie um componente chamado ItemLoja que receba:
// nome
// preco
// categoria
// estoque
// Regras:
// Se o estoque for maior que 0, mostrar: Produto disponível
// Caso contrário: Produto indisponível

import "./ItemLoja.css"

const ItemLoja = ({nome, categoria, preco, estoque}) => {
    return(
         <p>
            Nome: {nome} <br/>
            Categoria: {categoria} <br />
            Preco: {preco.toFixed(2)} <br />
            Estoque: {estoque > 0 ? "Produto disponível - " + estoque : "Produto indisponível"}
        </p>
    );
}

export default ItemLoja;