    import { useContext, useState } from "react"
    import { ProdutoContext } from "../../context/ProdutoContext"
    import ListaProduto from "../listaProduto/listaProduto"

    const CadastroProduto = () => {
        const { listaProdutos, setListaProdutos } = useContext(ProdutoContext)

        const [novoProduto, setNovoProduto] = useState("")
        return (
            <div>
                <h2>Página de Produtos</h2>
                <input
                    type="text"
                    value={novoProduto}
                    onChange={(e) => {
                        setNovoProduto(e.target.value)
                    }}
                />


                <button onClick={() => {
                    setListaProdutos([...listaProdutos, novoProduto])
                    setNovoProduto("")
                    alert("cadastrado com sucesso!")
                }}
                >Cadastrar</button>

                <p>Produto que sera cadastrado: {novoProduto}</p>
            </div>
        )
    }

    export default CadastroProduto
