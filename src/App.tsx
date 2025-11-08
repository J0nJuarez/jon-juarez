import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Descripcion from './componentes/descripcion'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="p-4 grid grid-cols-4 grid-rows-5 gap-4 h-dvh">
        <div className="col-span-2 row-span-3">      
          <Descripcion texto="Hola, esta es una descripcion." />
        </div>
        <div className="col-span-2 row-span-2 col-start-1 row-start-4">2</div>
        <div className="col-span-2 row-span-5 col-start-3 row-start-1">3</div>
    </div>
    
        
    </>
  )
}

export default App
