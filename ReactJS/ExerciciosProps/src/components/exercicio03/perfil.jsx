// 03) Crie um componente chamado Perfil que receba:
// nome
// idade
// profissao
// O componente deve exibir os dados em formato de cartão.

import "./Perfil.css"

const Perfil = ({nome, idade, profissao}) => {
    return(
        <div>
           Usuario: {nome} <br />
           Idade:   {idade} <br />
           Profissao: {profissao} 
        </div>
    )
}

export default Perfil;