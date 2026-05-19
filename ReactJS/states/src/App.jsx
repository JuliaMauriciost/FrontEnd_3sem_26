import { useState } from 'react'
import './App.css'
import Contador from './components/contador/contador'
import CadFruta from './components/cadFruta/cadfruta'
import CicloDeVida from './components/ciclodevida/ciclodevida'

function App() {
  const [mostrar, setMostrar] = useState(true);


  const [nome, setNome] = useState("Google")

  function trocarTexto() {
    setNome("Facebook")
  }

  function fuiAbandonado() {
    setNome("Input foi abandonado :(");
  }

  return (

    // //   <h1>{nome} page</h1>
    // //   <button onClick={trocarTexto}>Mudar Texto</button>
    // //   <button onClick={() => {
    // //     return setNome("Amazon")
    // //   }}>Mudar texto</button>
    // //   <br />

    // // {/* evento - evento disparado: change */}
    // // {/* target - quem disparou o evento change */}
    // // {/* evento - evento disparado: change */}
    // // <input type="text"  onBlur={fuiAbandonado} onChange={(evento) => setNome(evento.target.value)}/>


    // // <Contador/>
    // // <br /><br />
    // // <p>Loren ipsum <strong>{nome}</strong> dolor sit amet</p>
    // <CadFruta/>
    // 

    <>
    <button onClick={() => {
      setMostrar(!mostrar);
    }}>Mostrar</button>
    
      {mostrar && <CicloDeVida />}


    </>
  )
}


export default App;
