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
    <h1>Cadastrar endereço</h1>
    <form onSubmit={onSubmitBtnClick}>
      <div>
        <label>Endereço:</label>
        <input type="text" value={endereco} onChange={onEnderecoChange}></input>
      </div>
      <div>
        <label>Lote:</label>
        <input type="number" value={lote} onChange={onLoteChange}></input>
      </div>
      <div>
        <input type="button" value="voltar" onClick={voltarBotao}/>
        <input type="submit" value="editar endereço" />
      </div>
    </form>
  </div>
   
  )
}

export default Editar


