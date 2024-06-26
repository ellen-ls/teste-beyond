import { PencilSquareIcon, TrashIcon } from "@heroicons/react/16/solid"
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
        <h1 className="text-base font-semibold leading-7 text-gray-900">Endereços Marte</h1>
        <div className="flex justify-center ">
        
            <div className="">
                
                {lista.map((endereco)=>{
                    console.log(endereco)
                    return(
                        <div className="bg-orange-300 m-5 flex justify-center items-center p-2 rounded-lg ">
                            <div key={endereco.id} className="m-5 flex justify-center items-center p-2 rounded-lg " >
                                <div>
                                <div className="m-1"><strong>Endereço:</strong> {endereco.addressName}</div>
                                
                                <div className="m-1"><strong>Numero:</strong> {endereco.lotesNumber}</div>
                                </div>
                                <div className="mt-4">
                                    <button 
                                    className="m-1 w-5"
                                    type="button" 
                                    value="Edit"
                                    onClick={()=> onEdit(endereco)}
                                    ><PencilSquareIcon/></button>
                                    <button
                                    className="m-1 w-5 "
                                    type="button" 
                                    value="Deletar" 
                                    onClick={()=>onDelete(endereco)}
                                    ><TrashIcon/></button>
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
