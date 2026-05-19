// 09 ) Crie um componente chamado Jogo que receba:
// nome
// plataforma
// preco
// imagem
// Exiba todas as informações em formato de card.

import "./jogo.css"

const Jogo = ({nome, plataforma, preco, foto}) => {
    return(
         <p>
            Nome: {nome}<br/>
            Platafoma: {plataforma} <br />
            Preco: {preco.toFixed(2)} <br />
            Foto: <img src={foto} />
        </p>
    )
}

export default Jogo;