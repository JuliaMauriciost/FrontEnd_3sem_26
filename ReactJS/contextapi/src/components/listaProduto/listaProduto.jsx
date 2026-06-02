import { useContext } from "react"
import { ProdutoContext } from "../../context/ProdutoContext"

const ListaProduto = () => {
    const { listaProdutos} = useContext(ProdutoContext)
    return(
        <>
        <h2>Listagem de Produtos</h2>
        {listaProdutos.map((item, index) => (
                <p key={index}>{item}</p>
            ))}
        </>
    )
}

export default ListaProduto