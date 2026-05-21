// instalar o pacote react-router-dom
import { BrowserRouter, Link, Route, Routes } from "react-router-dom"
import CadastroFilme from "../pages/cadastroFilme/cadastroFilme"
import Login from "../pages/login/login"
import CadastroGenero from "../pages/cadastroGenero/CadastroGenero"


const Rotas = () => {
    return(
    <BrowserRouter>
    <Routes>
        <Route element={<Login/>} path="/"></Route>
        <Route element={<CadastroFilme/>} path="/filmes"></Route>
        <Route element={<CadastroGenero/>} path="/generos"></Route>
    </Routes>
    </BrowserRouter>
        
    )
}

export default Rotas