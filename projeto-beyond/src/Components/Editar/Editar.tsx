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
      <h1 className="text-base font-semibold leading-7 text-gray-900">Editar Endereço Marte</h1>
      <form onSubmit={onSubmitBtnClick}>
        <div >
        <label htmlFor="endereço" className="block text-sm font-medium leading-6 text-gray-900">Endereço</label>
          <input type="text" value={endereco} onChange={onEnderecoChange} className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset"></input>
        </div>
        <div >
        <label htmlFor="lote" className="block text-sm font-medium leading-6 text-gray-900">Numero</label>
          <input type="number" value={lote} onChange={onLoteChange} className="block w-full rounded-md border-0 py-1.5  text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset"></input>
        </div>
        <div>
          
          <button type="submit" value="editar endereço" className="w-28 m-5 bg-orange-500 hover:bg-orange-600 rounded-xl">Editar</button>
        </div>
      </form>
    </div>
   
  )
}

export default Editar


