import { useContext, useEffect, useState } from "react";
import { RotatingLines } from "react-loader-spinner";
import { useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthContext";
import Categoria from "../../../models/Categoria";
import { ToastAlerta } from "../../../utils/ToastAlerta";
import { deletar, listar } from "../../../services/Service";

function DeletarCategoria() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [categoria, setCategoria] = useState<Categoria>({} as Categoria);
  const { id } = useParams<{ id: string }>();
  const { usuario, handleLogout } = useContext(AuthContext);
  const token = usuario.token;

  async function buscarPorId(id: string) {
    try {
      await listar(`/categoria/${id}`, setCategoria);
    } catch (error: any) {
      if (error.toString().includes("401")) {
        handleLogout();
      } else {
        ToastAlerta("Erro ao buscar categoria!", "erro");
        retornar();
      }
    }
  }

  useEffect(() => {
    if (token === "") {
      ToastAlerta("Você precisa estar logado!", "info");
      navigate("/");
    }
  }, [token]);

  useEffect(() => {
    if (id !== undefined) {
      buscarPorId(id);
    }
  }, [id]);

  async function deletarCategoria() {
    setIsLoading(true);

    try {
      await deletar(`/categoria/${id}`, {
        headers: {
          Authorization: token,
        },
      });

      ToastAlerta("Categoria excluída com sucesso!", "sucesso");
      retornar();
    } catch (error: any) {
      if (error.toString().includes("401")) {
        handleLogout();
      } else {
        ToastAlerta("Erro ao excluir a categoria!", "erro");
      }
    }

    setIsLoading(false);
  }

  function retornar() {
    navigate("/categoria");
  }

  return (
    <div className="container w-1/3 mx-auto">
      <h1 className="text-4xl text-center py-4">Deletar Categoria</h1>
      <p className="text-center font-semibold mb-4">
        Você tem certeza de que deseja apagar a categoria a seguir?
      </p>
      <div className="border flex flex-col rounded-2xl overflow-hidden justify-between">
        <header className="py-2 px-6 bg-gradient-to-b from-yellow-400 to-yellow-200 text-slate-800 font-bold text-2xl">
          Categoria
        </header>
        <p className="p-8 text-2xl bg-white h-full">{categoria.nome}</p>

        <div className="flex">
          <button
            className="text-slate-100 bg-red-400 hover:bg-red-600 w-full py-2"
            onClick={retornar}
          >
            Não
          </button>
          <button
            className="w-full text-slate-100 bg-teal-500 hover:bg-teal-700 flex items-center justify-center"
            onClick={deletarCategoria}
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
              <span>Sim</span>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}

export default DeletarCategoria;