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
          <input type="button" value="voltar" onClick={voltarBotao}  maxLength={4}/>
          <input type="submit" value="add endereço" />
        </div>
      </form>
    </div>

  )
}

export default AddEndereco
