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
        <h1 className="text-base font-semibold leading-7 text-gray-900">Endereços</h1>
        
            <div className="w-2/4 flex items-center grid grid-cols-subgrid col-span-3 gap-4 p-2.5">
                
                {lista.map((endereco)=>{
                    console.log(endereco)
                    return(
                        <div key={endereco.id} className="h-40 flex justify-center items-center grid grid-cols-subgrid gap-4 col-span-3 border-solid border-2 border-#52525b p-2 rounded-lg " >
                        <div><strong>Endereço:</strong> {endereco.addressName}</div>
                        
                        <span><strong>Numero:</strong> {endereco.lotesNumber}</span>
                        <div>
                            <button 
                            className="w-28 border-solid border-2 border-#52525b rounded-xl"
                            type="button" 
                            value="Edit"
                            onClick={()=> onEdit(endereco)}
                             >Editar</button>
                            <button
                            className="w-28 border-solid border-2 border-#52525b rounded-xl"
                            type="button" 
                            value="Deletar" 
                            onClick={()=>onDelete(endereco)}
                            >Deletar</button>
                        </div>
                    </div>
                    
                    )
                })}
            </div>
        </>
    )
}

export default EnderecoLista
