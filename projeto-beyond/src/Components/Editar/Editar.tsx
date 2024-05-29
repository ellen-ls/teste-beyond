import { SetStateAction, useState } from "react"
import { db } from "../db.type"

type Props = {
  data: db
  voltarBotao: () => void
  onUpdateBotao: (data: db) => void
}
const Editar = (props: Props) => {
const {data, voltarBotao, onUpdateBotao} = props

const [endereco, setEndereco] = useState(data.addressName)
const [lote, setLote] = useState(data.lotesNumber)

const onEnderecoChange = (e: { target: { value: SetStateAction<string> } }) =>{
  setEndereco(e.target.value)
}

const onLoteChange = (e: { target: { value: SetStateAction<string>; }; }) =>{
  setLote(e.target.value)
}

const onSubmitBtnClick = (e: { preventDefault: () => void; }) => {
  e.preventDefault()
const updateData: db = {
  id: data.id,
  addressName: endereco,
  lotesNumber: lote

}
onUpdateBotao(updateData)
voltarBotao()

}

  return (
    
    <div>
    <h1 className="text-base font-semibold leading-7 text-gray-900">Editar endereço</h1>
    <form onSubmit={onSubmitBtnClick}>
      <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
      <label htmlFor="endereço" className="block text-sm font-medium leading-6 text-gray-900">Endereço</label>
        <input type="text" value={endereco} onChange={onEnderecoChange} className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"></input>
      </div>
      <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
      <label htmlFor="lote" className="block text-sm font-medium leading-6 text-gray-900">Numero</label>
        <input type="number" value={lote} onChange={onLoteChange} className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"></input>
      </div>
      <div>
        <button type="button" value="voltar" onClick={voltarBotao} className="w-28 border-solid border-2 border-#52525b rounded-xl">Voltar</button>
        <button type="submit" value="editar endereço" className="w-28 border-solid border-2 border-#52525b rounded-xl">Editar</button>
      </div>
    </form>
  </div>
   
  )
}

export default Editar


