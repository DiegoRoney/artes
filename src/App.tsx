import { useState } from "react"
import Mensagem from "./Mensagem"

function App() {
const [contador, setContador] = useState(0)

  return (
    <div>
      <h1>Olá, React!</h1>
     <Mensagem />

    <h1> Contador: {contador}</h1>

    <button onClick={() => setContador}>
      Aumentar
    </button>

    </div>
  )
}

export default App
