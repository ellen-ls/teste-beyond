
import { useEffect, useState } from "react"
import { db, PaginaEnum } from "../db.type"
import EnderecoLista from "./EnderecoLista"
import AddEndereco from "../Cadastro/AddEndereco"
import Editar from "../Editar/Editar"


const Cadastro = () => {

  const [cadastrarEndereco, setCadastrarEndereco] = useState([] as db[])
  const [mostrarPagina, setMostrarPagina] = useState(PaginaEnum.lista)
  const [editarPagina, setEditarPagina] = useState({} as db)

  useEffect(()=>{
    const listaEndereco = window.localStorage.getItem('endereço')
    if(listaEndereco){
      setCadastrarEndereco(JSON.parse(listaEndereco))
    }
  },[])
  
  const addCadastro = () => {
    setMostrarPagina(PaginaEnum.add)
  }

  const mostrarListaPagina = () => {
    setMostrarPagina(PaginaEnum.lista)
  }

  const _setCadastrarEndereco = (lista:db[]) => {
    setCadastrarEndereco(lista)
    window.localStorage.setItem("endereço", JSON.stringify(lista))
  }

  const addCadastroEndereco = (data: db) => {
    _setCadastrarEndereco([...cadastrarEndereco, data])

  }

  const deletarEndereco = (data: db) => {

    const indexToDeletar = cadastrarEndereco.indexOf(data)
    const tempLista = [...cadastrarEndereco]

    tempLista.splice(indexToDeletar, 1)
    setCadastrarEndereco(tempLista)

  }

  const editarEndereco = (data: db) =>{
    setMostrarPagina(PaginaEnum.edit)
    setEditarPagina(data)
  }

  const editarData = (data: db) => {
    const filtrarData = cadastrarEndereco.filter(x => x.id === data.id)[0]
    const indexOfRecord = cadastrarEndereco.indexOf(filtrarData)
    const tempData = [...cadastrarEndereco]
    tempData[indexOfRecord] = data
    _setCadastrarEndereco(tempData)
  }


  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 bg-gradient-to-r from-sky-500 to-indigo-500)]">
      <div className="bg-img-plano bg-cover bg-no-repeat" />
       {mostrarPagina === PaginaEnum.lista && (
        <>
        <div>
          <button
          className="w-28 border-solid border-2 border-#52525b rounded-xl"
            type="button"
            value="Cadastrar"
            onClick={addCadastro}
          >Cadastrar</button>
          <EnderecoLista
            lista={cadastrarEndereco}
            onDelete={deletarEndereco}
            onEdit={editarEndereco}
          />
          </div>
        </>
      )}

      {mostrarPagina === PaginaEnum.add && (
        <AddEndereco
          voltarBotao={mostrarListaPagina}
          onSubmitClick={addCadastroEndereco}
        />
      )}

      {mostrarPagina === PaginaEnum.edit && <Editar data={editarPagina} voltarBotao={mostrarListaPagina} onUpdateBotao={editarData}/>}
    </div>
  )
}

export default Cadastro