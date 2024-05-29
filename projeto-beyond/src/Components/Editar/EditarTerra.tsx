import { SetStateAction, useState } from "react";
import { dbterra } from "../db.type";

type Props = {
  data: dbterra;
  voltarBotao: () => void
  onUpdateBotaoTerra: (data: dbterra) => void;
};

const EditarTerra = (props: Props) => {
  const { data, onUpdateBotaoTerra } = props;

  const [endereco, setEndereco] = useState(data.addressName);
  const [cep, setCep] = useState(data.cep);
  const [numero, setNumero] = useState(data.numberHome);

  const onEnderecoChange = (e: { target: { value: SetStateAction<string> } }) => {
    setEndereco(e.target.value);
  };

  const onCepChange = (e: { target: { value: SetStateAction<string> } }) => {
    setCep(e.target.value);
  };

  const onNumeroChange = (e: { target: { value: SetStateAction<string> } }) => {
    setNumero(e.target.value);
  };

  const onSubmitBtnClick = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    const updateData: dbterra = {
      id: data.id,
      addressName: endereco,
      cep: cep,
      numberHome: numero,
    };
    onUpdateBotaoTerra(updateData);
    voltarBotao()
  };

  return (
    <div>
      <h1 className="text-base font-semibold leading-7 text-gray-900">Editar Endereço Terra</h1>
      <form onSubmit={onSubmitBtnClick}>
        <div>
          <label htmlFor="endereço" className="block text-sm font-medium leading-6 text-gray-900">Endereço</label>
          <input
            type="text"
            value={endereco}
            onChange={onEnderecoChange}
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
        </div>
        <div>
          <label htmlFor="cep" className="block text-sm font-medium leading-6 text-gray-900">Cep</label>
          <input
            type="number"
            value={cep}
            onChange={onCepChange}
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
        </div>
        <div>
          <label htmlFor="numero" className="block text-sm font-medium leading-6 text-gray-900">Numero</label>
          <input
            type="number"
            value={numero}
            onChange={onNumeroChange}
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
        </div>
        <div>
          <button
            type="submit"
            className="w-28 m-5 bg-blue-500 hover:bg-blue-600 rounded-xl"
          >
            Editar
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditarTerra;
function voltarBotao() {
  throw new Error("Function not implemented.");
}

