import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Cadastro from "./Components/Lista/Lista.tsx";
import Editar from './Components/Editar/Editar.tsx';

function App() {
 
  return (
<div className='bg-black'>
  <BrowserRouter>
  <Routes>
    <Route path={'/'} element={<Cadastro/>}></Route>

    <Route path="/edit" element={<Editar/>}></Route>
  </Routes>
  </BrowserRouter>
</div>
  )
}

export default App
