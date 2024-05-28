export interface db{
    id: string;
    addressName: string;
    lotesNumber: string
}

export const Cadastrar: db[] = [
    {
        id: new Date().toJSON.toString(),
        addressName:"Eufrazino o Rei do espaço",
        lotesNumber: "2562"
    },
];

export enum PaginaEnum{
    lista,
    add,
}