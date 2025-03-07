import { ChangeEvent, useContext, useEffect, useState } from "react";
import { RotatingLines } from "react-loader-spinner";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthContext";
import Categoria from "../../../models/Categoria";
import { ToastAlerta } from "../../../utils/ToastAlerta";
import { cadastrar } from "../../../services/Service";

function CadastrarCategoria() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [categoria, setCategoria] = useState<Categoria>({
    id: 0,
    nome: "",
  });

  const { usuario, handleLogout } = useContext(AuthContext);
  const token = usuario.token;

  useEffect(() => {
    if (token === "") {
      ToastAlerta("Você precisa estar logado!", "info");
      navigate("/login");
    }
  }, [token]);

  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    setCategoria({
      ...categoria,
      [e.target.name]: e.target.value,
    });
  }

  async function criarCategoria(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsLoading(true);

    if (categoria.nome === "") {
      ToastAlerta("O nome da categoria é obrigatório!", "erro");
      setIsLoading(false);
      return;
    }

    try {
      await cadastrar(`/categoria`, categoria, setCategoria, {
        headers: {
          Authorization: token,
        },
      });
      ToastAlerta("Categoria cadastrada com sucesso!", "sucesso");
      retornar();
    } catch (error: any) {
      if (error.toString().includes("401")) {
        handleLogout();
      } else {
        ToastAlerta("Erro ao cadastrar a categoria!", "erro");
      }
    }
    setIsLoading(false);
  }

  function retornar() {
    navigate("/cardapio");
  }

  return (
    <div className="container w-1/3 mx-auto">
      <h1 className="text-4xl text-center py-4">Cadastrar Categoria</h1>
      <form onSubmit={criarCategoria} className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <label htmlFor="nome" className="text-slate-800 font-semibold">
            Nome da Categoria
          </label>
          <input
            type="text"
            id="nome"
            name="nome"
            placeholder="Nome"
            className="border-2 border-slate-300 rounded-md p-2"
            value={categoria.nome}
            onChange={atualizarEstado}
            required
          />
        </div>
        <div className="flex justify-between">
          <button
            className="bg-red-400 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
            onClick={retornar}
            type="button"
          >
            Cancelar
          </button>
          <button
            className="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded flex items-center justify-center"
            type="submit"
          >
            {isLoading ? (
              <RotatingLines
                strokeColor="white"
                strokeWidth="5"
                animationDuration="0.75"
                width="24"
                visible={true}
              />
            ) : (
              <span>Cadastrar</span>
            )}
          </button>
        </div>
      </form>
    </div>
  );
}

export default CadastrarCategoria;