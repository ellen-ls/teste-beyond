import { SetStateAction, useState } from "react";
import { dbterra } from "../db.type";

type Props = {
  voltarBotao:() => void;
  onSubmitClick: (data: dbterra) => void;
};

function AddEnderecoTerra(props: Props) {
  const [endereco, setEndereco] = useState('');
  const [cep, setCep] = useState('');
  const [numero, setNumero] = useState('');

  const { onSubmitClick } = props;

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
    const data: dbterra = {
      id: new Date().toJSON().toString(),
      addressName: endereco,
      cep: cep,
      numberHome: numero,
    };
    onSubmitClick(data);
    voltarBotao()
  };

  return (
    <div>
      <h1 className="text-base font-semibold leading-7 text-gray-900">Cadastrar Endereço Terra</h1>
      <form onSubmit={onSubmitBtnClick}>
        <div>
          <label htmlFor="endereçoTerra" className="block text-sm font-medium leading-6 text-gray-900">Endereço</label>
          <input
            type="text"
            value={endereco}
            onChange={onEnderecoChange}
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
        </div>
        <div>
          <label htmlFor="cepTerra" className="block text-sm font-medium leading-6 text-gray-900">Cep</label>
          <input
            type="number"
            value={cep}
            onChange={onCepChange}
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
        </div>
        <div>
          <label htmlFor="numeroTerra" className="block text-sm font-medium leading-6 text-gray-900">Numero</label>
          <input
            type="number"
            value={numero}
            onChange={onNumeroChange}
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
        </div>
        <div>
          <input
            type="submit"
            value="Adicionar"
            className="w-28 bg-blue-500 hover:bg-blue-600 rounded-xl cursor-pointer"
          />
        </div>
      </form>
    </div>
  );
}

export default AddEnderecoTerra;
function voltarBotao() {
  throw new Error("Function not implemented.");
}

