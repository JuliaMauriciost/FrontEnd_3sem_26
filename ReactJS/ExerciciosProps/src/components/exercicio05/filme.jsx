// 05) Crie um componente chamado Filme que receba:
// titulo
// ano
// genero
// nota
// Mostre todas as informações na tela.

// Crie pelo menos 3 filmes diferentes.


import "./filme.css"
const Filme = ({titulo, ano, genero, nota}) => {
    return(
        <p>
            Filme: {titulo}<br/>
            Ano: {ano} <br />
            Genero: {genero} <br />
            Nota: {nota}
        </p>
    
    )
}

export default Filme;