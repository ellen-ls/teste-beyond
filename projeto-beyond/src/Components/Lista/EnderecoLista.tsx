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
        <div className="flex justify-center">
        
            <div className="">
                
                {lista.map((endereco)=>{
                    console.log(endereco)
                    return(
                        <div className="">
                            <div key={endereco.id} className="m-5 flex flex-col justify-center items-center border-solid border-2 border-#52525b p-2 rounded-lg " >
                                <div className="m-1"><strong>Endereço:</strong> {endereco.addressName}</div>
                                
                                <div className="m-1"><strong>Numero:</strong> {endereco.lotesNumber}</div>
                                <div className="mt-4">
                                    <button 
                                    className="m-1 w-28 border-solid border-2 border-#52525b rounded-xl"
                                    type="button" 
                                    value="Edit"
                                    onClick={()=> onEdit(endereco)}
                                    >Editar</button>
                                    <button
                                    className="m-1 w-28 border-solid border-2 border-#52525b rounded-xl"
                                    type="button" 
                                    value="Deletar" 
                                    onClick={()=>onDelete(endereco)}
                                    >Deletar</button>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
        </>
    )
}

export default EnderecoLista
