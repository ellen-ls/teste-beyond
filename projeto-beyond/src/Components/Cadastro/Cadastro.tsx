/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react"
import { db, Cadastrar, PaginaEnum } from "../db.type"
import EnderecoLista from "../ListaDeEndereço/EnderecoLista"
import AddEndereco from "../ListaDeEndereço/AddEndereco"


const Cadastro = () => {

  const [cadastrarEndereco, setCadastrarEndereco] = useState(Cadastrar as db[])
  const [mostrarPagina, setMostrarPagina] = useState(PaginaEnum.lista)

  const addCadastro = () => {
    setMostrarPagina(PaginaEnum.add)
  }

  const mostrarListaPagina = () => {
    setMostrarPagina(PaginaEnum.lista)
  }

  const addCadastroEndereco = (data: db) => {
    setCadastrarEndereco([...cadastrarEndereco, data])

  }
  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <h1>Lista de endereços</h1>
      {mostrarPagina === PaginaEnum.lista && (
        <>
          <input 
          type="button" 
          value="add endereço" 
          onClick={addCadastro}></input>
          <EnderecoLista lista={cadastrarEndereco} />
        </>
      )}

      {mostrarPagina === PaginaEnum.add && 
      <AddEndereco 
      voltarBotao={mostrarListaPagina} 
      onSubmitClick={addCadastroEndereco} />}



      

    </div>



  )
}

export default Cadastro
