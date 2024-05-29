export interface db{
    id: string;
    addressName: string;
    lotesNumber: string
}


export interface dbterra{
id:string;
addressName:string;
cep:string;
numberHome: string;
}


export enum PaginaEnum{
    lista,
    add,
    edit,
    editTerra
}