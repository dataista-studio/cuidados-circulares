import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Portada from './screens/Portada.jsx';
import SeccionV from './screens/SeccionV.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <section id="center">
        <Portada />
      </section>

      <section id="espectro-demografico">
        <SeccionV />
      </section>
    </>
  )
}

export default App
