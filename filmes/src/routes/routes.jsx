// instalar o pacote react-router-dom
import { BrowserRouter, Link, Route, Routes } from "react-router-dom"
import CadastroFilme from "../pages/cadastroFilme/cadastroFilme"
import Login from "../pages/login/Login"
import CadastroGenero from "../pages/cadastroGenero/CadastroGenero"
import PrivateRoutes from "./PrivateRoutes"


const Rotas = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Login />} path="/" />
                <Route element={
                    <PrivateRoutes>
                        <CadastroFilme />
                    </PrivateRoutes>} path="/filmes" />
                <Route element={
                    <PrivateRoutes>
                        <CadastroGenero />
                    </PrivateRoutes>} path="/generos" />
            </Routes>
        </BrowserRouter >
    )
}

export default Rotas    