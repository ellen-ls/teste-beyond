import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Lista from "./Components/Lista/Lista.tsx";




function App() {
 
  return (
<div>
  <BrowserRouter>
  <Routes>
    <Route path={'/'} element={<Lista/>}></Route>
    

    
  </Routes>
  </BrowserRouter>
</div>
  )
}

export default App
