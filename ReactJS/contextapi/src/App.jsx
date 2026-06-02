import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/home/Home'
import Perfil from './components/perfil/Perfil'
import Produto from './components/produto/produto'
import Header from './components/header/Header'
import { useState } from 'react'
import CadastroProduto from './components/cadastroProduto/cadastroProduto'
import ListaProduto from './components/listaProduto/listaProduto'

function App() {
  
  return (
   <BrowserRouter>
   <Header/>
   <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/perfil" element={<Perfil />} />
    <Route path="/produto" element={<Produto />} />
    <Route path="/cadastroproduto" element={<CadastroProduto />} />
    <Route path="/listaProduto" element={<ListaProduto />} />
   </Routes>
   </BrowserRouter>
  )
}

export default App
