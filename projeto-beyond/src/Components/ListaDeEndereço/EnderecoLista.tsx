import { db } from "../db.type"

type Props = {
    lista: db[]
    onDelete: (data: db) => void
    onEdit: (data: db) => void
}

const EnderecoLista = (props: Props) => {

    const { lista, onDelete, onEdit } = props

    return (
        <>
            <div className="flex items-center">
                
                {lista.map((endereco)=>{
                    console.log(endereco)
                    return(
                        <div key={endereco.id}>
                       
                        <strong>{endereco.addressName}</strong>
                        <span>{endereco.lotesNumber}</span>
                        <div>
                            <input 
                            type="button" 
                            value="Edit"
                            onClick={()=> onEdit(endereco)}
                             />
                            <input
                            type="button" 
                            value="Deletar" 
                            onClick={()=>onDelete(endereco)}
                            />
                        </div>
                    </div>
                    
                    )
                })}
            </div>
        </>
    )
}

export default EnderecoLista
