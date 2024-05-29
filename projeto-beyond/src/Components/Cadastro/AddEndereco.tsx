import { SetStateAction, useState } from "react"
import { db } from "../db.type";


type Props = {
  voltarBotao:() => void;
  onSubmitClick:(data:db) => void
  
}

function AddEndereco(props: Props) {
  const [endereco, setEndereco] = useState('')
  const [lote, setLote] = useState('')

  const {voltarBotao, onSubmitClick} = props

  const onEnderecoChange = (e: { target: { value: SetStateAction<string> } }) =>{
    setEndereco(e.target.value)
  }

  const onLoteChange = (e: { target: { value: SetStateAction<string>; }; }) =>{
    const newValue = e.target.value as string

    if (/^\d{0,4}$/.test(newValue)) {
      setLote(newValue);
    } 
  }

  const onSubmitBtnClick = (e: { preventDefault: () => void; }) => {
    e.preventDefault()
  const data: db = {
    id: new Date().toJSON().toString(),
    addressName: endereco,
    lotesNumber: lote,

  }
  onSubmitClick(data)
  voltarBotao()
  
  }

  return (
    <div>
      <div>
     <h1 className="text-base font-semibold leading-7 text-gray-900">Cadastrar Endereço Marte</h1>
      <form onSubmit={onSubmitBtnClick}>
        <div>
        <label htmlFor="endereço" className="block text-sm font-medium leading-6 text-gray-900">Endereço</label>
          <input type="text" value={endereco} onChange={onEnderecoChange} className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"></input>
        </div>
        <div>
        <label htmlFor="endereço" className="block text-sm font-medium leading-6 text-gray-900">Numero</label>
          <input type="number" value={lote} onChange={onLoteChange} className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"></input>
        </div>
        <div>
          
          <input type="submit" value="Adicionar" className="w-28 rounded-xl bg-orange-500 hover:bg-orange-600 m-2 cursor-pointer" />
        </div>

      </form>
    </div>
  </div>

  )
}

export default AddEndereco
