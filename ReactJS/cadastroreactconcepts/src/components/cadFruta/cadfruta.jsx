import { useState } from "react";
import "./cadfruta.css"
function CadFruta() {
    // states, funcoes e variaveis

    // state do formulario
    const [fruta, setFruta] = useState("")
    const [quantidade, setQuantidade] = useState("")
    const [arrFrutas, setArrFrutas] = useState([
        { id: 1, nome: "Limão", quantidade: setQuantidade },
        { id: 2, nome: "Morango", quantidade: 20 }
    ])//cria um state array vazio


    function Cadastrar(e) {
        e.preventDefault();
        // alert("Função Cadastrar OK!")

        setArrFrutas([...arrFrutas, { id: Date.now(), nome: fruta, quantidade: quantidade }])
    }

    return (
        <section className="sessao-cadastro">
            <form action="" method="post" onSubmit={Cadastrar}>
                <fieldset className="cadastro">
                    <label htmlFor="fruta" className="cadastro__rotulo">Digite o nome da Fruta</label>

                    <input
                        type="text"
                        id="fruta"
                        className="cadastro__entrada"
                        placeholder="Digite o nome da fruta"
                        onChange={(e) => { setFruta(e.target.value); }}
                    />
                    {/* label htmlFor="Numero" className="cadastro__rotulo">Digite a quantidade da Fruta</label> */}

                    <input
                        type="text"
                        id="Numero"
                        className="cadastro__entrada"
                        placeholder="Digite a quantidade da Fruta"
                        onChange={(e) => { setQuantidade(parseInt(e.target.value)); }}
                    />

                    <button className="cadastro__btn-cadastrar" 
                    // onClick={() => {
                    //     alert(Date.now());
                    //     return setArrFrutas([...arrFrutas, { id: Date.now(), nome: fruta, quantidade: quantidade }])
                    // }}
                    >Cadastrar</button>
                    <br />

                    <label htmlFor="">{fruta}</label>
                </fieldset>
            </form>

            <ul className="listagem">
                {arrFrutas.map((f) => {
                    return (
                        <li key={f.id}>
                            Fruta: {f.nome} | Quantidade: {f.quantidade}
                        </li>)
                })}
            </ul>
        </section>

    )

}

export default CadFruta;