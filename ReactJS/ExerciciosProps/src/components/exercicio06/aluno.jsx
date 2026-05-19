// 06) Crie um componente chamado Aluno que receba:
// nome
// curso
// imagem
// Exiba:
// A imagem do aluno
// O nome
// O curso

import "./aluno.css"

const Aluno = ({nome, curso, foto}) => {
    return(
        <p>
            Aluno: {nome}<br/>
            Curso: {curso} <br />
            Identificacao: <img src={foto} />
        </p>
    )
}

export default Aluno;