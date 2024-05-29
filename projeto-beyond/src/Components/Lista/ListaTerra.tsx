import { useEffect, useState } from "react";
import { dbterra, PaginaEnum } from "../db.type";
import EnderecoLista from "./EnderecoListaTerra";
import AddEndereco from "../Cadastro/AddEnderecoTerra";
import Editar from "../Editar/EditarTerra";

const ListaTerra = () => {
  const [cadastrarEndereco, setCadastrarEndereco] = useState([] as dbterra[]);
  const [mostrarPagina, setMostrarPagina] = useState(PaginaEnum.lista);
  const [editarPagina, setEditarPagina] = useState({} as dbterra);

  useEffect(() => {
    const listaEndereco = window.localStorage.getItem("endereço");
    if (listaEndereco) {
      setCadastrarEndereco(JSON.parse(listaEndereco));
    }
  }, []);

  const handlePageChange = (page: PaginaEnum) => {
    setMostrarPagina(page);
  };

  const updateLocalStorage = (data: dbterra[]) => {
    window.localStorage.setItem("endereço", JSON.stringify(data));
  };

  const addCadastroEndereco = (data: dbterra) => {
    const updatedList = [...cadastrarEndereco, data];
    setCadastrarEndereco(updatedList);
    updateLocalStorage(updatedList);
    handlePageChange(PaginaEnum.lista);  // Voltar para a lista
  };

  const deletarEndereco = (data: dbterra) => {
    const updatedList = cadastrarEndereco.filter(item => item.id !== data.id);
    setCadastrarEndereco(updatedList);
    updateLocalStorage(updatedList);
  };

  const editarEndereco = (data: dbterra) => {
    handlePageChange(PaginaEnum.edit);
    setEditarPagina(data);
  };

  const editarData = (data: dbterra) => {
    const updatedList = cadastrarEndereco.map(item => (item.id === data.id ? data : item));
    setCadastrarEndereco(updatedList);
    updateLocalStorage(updatedList);
    handlePageChange(PaginaEnum.lista);  // Voltar para a lista
  };

  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="bg-img-plano bg-cover bg-no-repeat" />
      {mostrarPagina === PaginaEnum.lista ? (
        <>
          <div>
            <button
              className="w-28 border-solid border-2 border-#52525b rounded-xl"
              type="button"
              onClick={() => handlePageChange(PaginaEnum.add)}
            >
              Cadastrar
            </button>
            <EnderecoLista lista={cadastrarEndereco} onDelete={deletarEndereco} onEdit={editarEndereco} />
          </div>
        </>
      ) : null}

      {mostrarPagina === PaginaEnum.add ? (
        <AddEndereco onSubmitClick={addCadastroEndereco} voltarBotao={function (): void {
          throw new Error("Function not implemented.");
        } } />
      ) : null}

      {mostrarPagina === PaginaEnum.edit ? (
        <Editar data={editarPagina} onUpdateBotaoTerra={editarData} voltarBotao={function (): void {
          throw new Error("Function not implemented.");
        } } />
      ) : null}
    </div>
  );
};

export default ListaTerra;
