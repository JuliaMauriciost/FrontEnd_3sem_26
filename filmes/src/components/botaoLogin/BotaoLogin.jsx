import "../botao/Botao.css"

const BotaoLogin = (props) => {
    return (
        <button
            className="botao"
            type={props.btnEditar ? "button" : "submit"}
            onClick={(e) => {
                e.preventDefault();
                if (props.setEditar) {
                    props.cancelarEdicao();
                    return false;
                }

                if (props.onClick) {
                    props.onClick(e);
                }
            }}
        > {props.nomeDoBotao}</button>
    )
}

export default BotaoLogin;