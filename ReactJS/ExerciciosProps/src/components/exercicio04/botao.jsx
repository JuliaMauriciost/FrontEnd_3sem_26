// 04) Crie um componente chamado Botao que receba:
// texto
// cor
// O botão deve:
// Mostrar o texto recebido
// Alterar a cor de fundo conforme a prop cor

import "./botao.css"

const Botao = ({ texto, cor }) => {
    return (
        <button style={{ backgroundColor: cor }}>
            {texto} <br />
        </button>
    );
}

export default Botao;