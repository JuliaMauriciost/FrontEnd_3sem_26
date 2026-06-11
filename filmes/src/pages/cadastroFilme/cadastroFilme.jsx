import "./cadastroFilme.css"
import Header from "../../components/header/Header"
import Footer from "../../components/footer/Footer"
import Lista from "../../components/lista/Lista"
import Cadastro from "../../components/cadastro/Cadastro"
import { useEffect, useState } from "react"
import { Alerta } from "../../components/Alerta/alerta"
import api from "../../Services/services"

const CadastroFilme = () => {
    const [listaGeneros, setListaGeneros] = useState([
    ])

    const [valor, setValor] = useState("");
    const [img, setImg] = useState("")
    const [valorImagem, setValorImagem] = useState(null);
    const [listaFilmes, setListaFilmes] = useState([]);
    const [valorSelect, setValorSelect] = useState("");
    const [editar, setEditar] = useState(false);
    const [idEditar, setIdEditar] = useState(null);

    // ciclo de vida e funções

    const cadastrarFilme = async (e) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append("Nome", valor);
    formData.append("IdGenero", valorSelect);
    formData.append("Imagem", img); // <- faltava isso

    try {
        const retornoAPI = await api.post("/Filme", formData, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        });

        if (retornoAPI.status === 201) {
            limparFormulario();
            getFilmes();
        }
    } catch (error) {
        console.log(error.response?.data);
    }
};

    const excluirFilme = async (item) => {
         const result = await Alerta({
            title: "Excluir Filme",
            text: `Tem certeza que deseja excluir o filme ${item.titulo}?`,
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "green",
            cancelButtonColor: "red",
            confirmButtonText: "Sim",
            cancelButtonText: "Não"
        })
        if (!result.isConfirmed) return false;
        console.log(item);
        try {
            const retornoAPI = await api.delete(`/Filme/${item.idFilme}`)
            if (retornoAPI.status == 204 || retornoAPI.status == 200) {

                Alerta({
                    title: "Excluir o Filme",
                    text: "Seus dados foram excluidos com sucesso!",
                    icon: "success",
                    confirmButtonText: "Ok"
                })
                getFilmes();
            }
        } catch (error) {

           Alerta({
                title: "Excluir o Filme",
                text: "Ocorreu um erro na hora de excluir o gênero",
                icon: "success",
                confirmButtonText: "Ok"

            })
        }
    }


   const editarFilme = async (e) => {
        e.preventDefault();

        try {

            const formData = new FormData();

            formData.append("Nome", valor);
            formData.append("IdGenero", valorSelect);
            formData.append("imagem", img)
            await api.put(`/Filme/${idEditar}`, formData);

            limparFormulario();
            getFilmes();

            Alerta({
                title: "Sucesso!",
                text: "Filme atualizado com sucesso!",
                icon: "success",
                confirmButtonText: "Ok",
            });

        } catch (error) {

            console.log("STATUS:", error.response?.status);
            console.log("DATA:", error.response?.data);
            console.log("ERRO COMPLETO:", error);

            Alerta({
                title: "Erro na chamada da API",
                text: "Verifique os dados e tente novamente!",
                icon: "error",
                confirmButtonText: "Ok",
            });
        }
    };


    const limparFormulario = () => {
        setValor("");
        setValorSelect("");
        setValorImagem(null);
        setEditar(false);
        setIdEditar(null);
    }

    const preEditar = (item) => {
        setValor(item.titulo);
        setValorSelect(item.idGenero);
        setIdEditar(item.idFilme);
        setEditar(true);
    }


    useEffect(()=>{
        getFilmes()
    }, [])

    const getFilmes = async () => {
        try{
            const retornoAPI = await api.get("/Filme")
            const dados = await retornoAPI.data
            setListaFilmes(dados)
        }catch (error) {
            Alerta({
                title: "Erro",
                text : "Ocorreu um erro ao retornar os dados da API",
                icon: "error"
            })
        }
    }
    useEffect( () => {
        // chamar os dados da api
        getGeneros()
    }, [])

    const getGeneros = async () => {

        try {
            const retornoAPI = await api.get("/Genero")// chama a api
            const dados = await retornoAPI.data// extrai os dados retornados
            setListaGeneros(dados)// guarda os dados no state (já exibe na lista)
            // console.log(retornoAPI.data);
            
        } catch (error) {
            Alerta({
                title: "Erro",
                text : "Ocorreu um erro ao retornar os dados da API",
                icon: "error"
            })
        }
    }
    
    return (
        <> 

        <Header />
        <main>
        <Cadastro 
            tituloCadastro="Cadastro de Filme"
            visibilidade="true"
            placeholder="filme"
            valor={valor}
            // dunção que muda o state
           cancelarEdicao={limparFormulario}
            setValor={setValor}
            funcCadastro={editar ? editarFilme : cadastrarFilme}
            btnEditar={editar}
            img={img}
            setImg={setImg}
            listaGeneros= {listaGeneros}
            valorSelect= {valorSelect}
            setValorSelect= {setValorSelect}

            />

            <Lista 
            tituloLista="Lista de Filmes"
            // visibilidade="none"
            tipoLista="filme"
            lista={listaFilmes}
            // // dunção que muda o state
            funcExcluir={excluirFilme}
            funcEditar={preEditar}

            />
        
        </main>
        <Footer />
        </>
    )
}

export default CadastroFilme