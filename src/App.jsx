import { useState } from 'react'
import './App.css'
import Portada from './screens/Portada.jsx';
import SeccionI from './screens/SeccionI.jsx'
import SeccionII from './screens/SeccionII.jsx'
import SeccionIII from './screens/SeccionIII.jsx'
import SeccionIV from './screens/SeccionIV.jsx'
import SeccionV from './screens/SeccionV.jsx'
import Cierre from './screens/Cierre.jsx'
import Credits from './screens/Credits.jsx';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <section id="portada">
        <Portada />
      </section>

      <section id="que-son-los-cuidados">
        <SeccionI/>
      </section>

      <section id="el-tiempo-no-se-reparte-igual">
        <SeccionII/>
      </section>

      <section id="detras-del-tiempo-las-tareas">
        <SeccionIII/>
      </section>

      <section id="espectro-demografico">
        <SeccionIV />
      </section>

      <section id="personas-receptoras-del-cuidado">
        <SeccionV />
      </section>

      <section id="cierre">
        <Cierre />
      </section>  

      <section id="creditos">
        <Credits />  
      </section>    
    </>
  )
}

export default App;
