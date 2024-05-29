

import { useEffect, useState } from "react";
import { db, dbterra, PaginaEnum } from "../db.type";
import EnderecoLista from "./EnderecoLista";
import AddEndereco from "../Cadastro/AddEndereco";
import Editar from "../Editar/Editar";
import EnderecoListaTerra from "./EnderecoListaTerra";
import AddEnderecoTerra from "../Cadastro/AddEnderecoTerra";
import EditarTerra from "../Editar/EditarTerra";

const Lista = () => {
  const [cadastrarEndereco, setCadastrarEndereco] = useState([] as db[]);
  const [cadastrarEnderecoTerra, setCadastrarEnderecoTerra] = useState([] as dbterra[]);
  const [mostrarPagina, setMostrarPagina] = useState(PaginaEnum.lista);
  const [editarPagina, setEditarPagina] = useState({} as db);
  const [editarPaginaTerra, setEditarPaginaTerra] = useState({} as dbterra);

  useEffect(() => {
    const listaEndereco = window.localStorage.getItem("endereço");
    const listaEnderecoTerra = window.localStorage.getItem("endereçoTerra");
    if (listaEndereco) {
      setCadastrarEndereco(JSON.parse(listaEndereco));
    }
    if (listaEnderecoTerra) {
      setCadastrarEnderecoTerra(JSON.parse(listaEnderecoTerra));
    }
  }, []);

  const handlePageChange = (page: PaginaEnum) => {
    setMostrarPagina(page);
  };

  const updateLocalStorage = (key: string, data: db[] | dbterra[]) => {
    window.localStorage.setItem(key, JSON.stringify(data));
  };

  const addCadastroEndereco = (data: db) => {
    const updatedList = [...cadastrarEndereco, data];
    setCadastrarEndereco(updatedList);
    updateLocalStorage("endereço", updatedList);
    handlePageChange(PaginaEnum.lista);
  };

  const addCadastroEnderecoTerra = (data: dbterra) => {
    const updatedList = [...cadastrarEnderecoTerra, data];
    setCadastrarEnderecoTerra(updatedList);
    updateLocalStorage("endereçoTerra", updatedList);
    handlePageChange(PaginaEnum.lista);
  };

  const deletarEndereco = (data: db) => {
    const updatedList = cadastrarEndereco.filter(item => item.id !== data.id);
    setCadastrarEndereco(updatedList);
    updateLocalStorage("endereço", updatedList);
  };

  const deletarEnderecoTerra = (data: dbterra) => {
    const updatedList = cadastrarEnderecoTerra.filter(item => item.id !== data.id);
    setCadastrarEnderecoTerra(updatedList);
    updateLocalStorage("endereçoTerra", updatedList);
  };

  const editarEndereco = (data: db) => {
    setMostrarPagina(PaginaEnum.edit);
    setEditarPagina(data);
  };

  const editarEnderecoTerra = (data: dbterra) => {
    setMostrarPagina(PaginaEnum.editTerra);
    setEditarPaginaTerra(data);
  };

  const editarData = (data: db) => {
    const updatedList = cadastrarEndereco.map(item => (item.id === data.id ? data : item));
    setCadastrarEndereco(updatedList);
    updateLocalStorage("endereço", updatedList);
    handlePageChange(PaginaEnum.lista);
  };

  const editarDataTerra = (data: dbterra) => {
    const updatedList = cadastrarEnderecoTerra.map(item => (item.id === data.id ? data : item));
    setCadastrarEnderecoTerra(updatedList);
    updateLocalStorage("endereçoTerra", updatedList);
    handlePageChange(PaginaEnum.lista);
  };

  return (
    <div className="sm:flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      {mostrarPagina === PaginaEnum.lista ? (
        <>
          <div>
            <button
              className="w-28 bg-orange-900 hover:bg-orange-600 text-white text-lg font-bold rounded-xl m-5"
              type="button"
              onClick={() => handlePageChange(PaginaEnum.add)}
            >
              Cadastrar
            </button>
            <div className="sm:flex justify-around">
              <div className="bg-orange-600 bg-opacity-40 backdrop-blur-sm p-5 rounded-lg">
                <EnderecoLista lista={cadastrarEndereco} onDelete={deletarEndereco} onEdit={editarEndereco} />
              </div>
              <div className="bg-sky-600 bg-opacity-60 backdrop-blur-sm p-5 rounded-lg">
                <EnderecoListaTerra lista={cadastrarEnderecoTerra} onDelete={deletarEnderecoTerra} onEdit={editarEnderecoTerra} />
              </div>
            </div>
          </div>
        </>
      ) : null}
      <div className="sm:flex justify-around">
        {mostrarPagina === PaginaEnum.add ? (
          <>
          
            <div className="bg-orange-600 bg-opacity-40 backdrop-blur-sm p-5 rounded-lg">
              <AddEndereco onSubmitClick={addCadastroEndereco} voltarBotao={() => handlePageChange(PaginaEnum.lista)} />
            </div>
            <div className="bg-sky-600 bg-opacity-60 backdrop-blur-sm p-5 rounded-lg">
              <AddEnderecoTerra onSubmitClick={addCadastroEnderecoTerra} voltarBotao={() => handlePageChange(PaginaEnum.lista)} />
            </div>
          </>
        ) : null}
      </div>
      <div className="sm:flex justify-around">
        {mostrarPagina === PaginaEnum.edit ? (
          <div className="bg-orange-600 bg-opacity-40 backdrop-blur-sm p-5 rounded-lg">
            <Editar data={editarPagina} onUpdateBotao={editarData} voltarBotao={() => handlePageChange(PaginaEnum.lista)} />
          </div>
        ) : null}
        {mostrarPagina === PaginaEnum.editTerra ? (
          <div className="bg-sky-600 bg-opacity-60 backdrop-blur-sm p-5 rounded-lg">
            <EditarTerra data={editarPaginaTerra} onUpdateBotaoTerra={editarDataTerra} voltarBotao={() => handlePageChange(PaginaEnum.lista)} />
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Lista;
