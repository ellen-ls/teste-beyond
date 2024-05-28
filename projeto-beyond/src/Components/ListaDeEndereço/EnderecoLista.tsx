import { db } from "../db.type"

type Props = {
    lista: db[]
}

const EnderecoLista = (props: Props) => {

    const { lista } = props
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
                            <input type="button" value="Edit" />
                        </div>
                    </div>
                    
                    )
                })}
            </div>
        </>
    )
}

export default EnderecoLista
