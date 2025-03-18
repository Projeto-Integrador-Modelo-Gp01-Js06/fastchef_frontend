import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ThreeDots } from "react-loader-spinner";

import CardCategoria from "../cardcategoria/CardCategoria";
import CardProdutos from "../../produtos/cardprodutos/CardProdutos";
import Categoria from "../../../models/Categoria";
import Produto from "../../../models/Produto";
import { deletar, listar } from "../../../services/Service";
import { ToastAlerta } from "../../../utils/ToastAlerta";
import AuthContext from "../../../contexts/AuthContext";

function ListarCategorias() {
  const navigate = useNavigate();
  const [categorias, setCategorias] = useState<Categoria[]>([]);
  const [produtos, setProdutos] = useState<Produto[]>([]);
  const [loadingProdutos, setLoadingProdutos] = useState(false);
  const { usuario, handleLogout } = useContext(AuthContext);
  const isAuthenticated = usuario.token !== "";
  const token = usuario.token;

  async function buscarCategorias() {
    try {
      const categoriasResponse = await listar("/categoria", setCategorias);
      const todosProdutos = categoriasResponse.flatMap(
        (categoria: Categoria) => categoria.produto
      );
      setProdutos(todosProdutos);
    } catch (err) {
      console.error("Erro ao buscar categorias:", err);
    }
  }

  async function buscarTodosProdutos() {
    try {
      setLoadingProdutos(true);
      await listar("/produto", setProdutos);
    } catch (err) {
      console.error("Erro ao buscar todos os produtos:", err);
    } finally {
      setLoadingProdutos(false);
    }
  }

  useEffect(() => {
    buscarCategorias();
  }, []);

  const handleDelete = async (id: number) => {
    try {
      await deletar(`/categoria/${id}`, {
        headers: { Authorization: token },
      });
      setCategorias((prevCategorias) =>
        prevCategorias.filter((cat) => cat.id !== id)
      );
      ToastAlerta("Categoria excluída com sucesso!", "sucesso");
    } catch (error: any) {
      if (error.toString().includes("401")) {
        handleLogout();
      } else {
        ToastAlerta("Erro ao excluir a categoria!", "erro");
      }
    }
  };

  return (
    <div className="rounded-lg p-4 w-full my-4">
      <h2 className="text-3xl font-bold text-center text-white mb-6">CATEGORIAS</h2>

      <div className="flex gap-4 mb-4 justify-center">
        <button
          onClick={buscarTodosProdutos}
          className="text-xl font-semibold border rounded-xl p-1 shadow-3xl flex items-center justify-center bg-verde hover:shadow-xl duration-300 cursor-pointer w-60 h-9 transform hover:scale-105"
        >
          TODOS OS PRODUTOS
        </button>

        {isAuthenticated &&
          (usuario.id === 20 || usuario.usuario === "admin@admin.com") && (
            <>
              <button
                onClick={() => navigate("/categoria/novo")}
                className="text-sm font-semibold border rounded-xl p-1 shadow-3xl flex items-center justify-center bg-verde hover:shadow-xl duration-300 cursor-pointer w-60 h-10 transform hover:scale-105"
              >
                ADICIONAR NOVA CATEGORIA
              </button>

              <button
                onClick={() => navigate("/produto/produto")}
                className="text-sm font-semibold border rounded-xl p-1 shadow-3xl flex items-center justify-center bg-verde hover:shadow-xl duration-300 cursor-pointer w-60 h-10 transform hover:scale-105"
              >
                ADICIONAR NOVO PRODUTO
              </button>
            </>
          )}
      </div>

      {/* Exibição de Categorias */}
      <div className="flex flex-wrap gap-3 justify-center">
        {categorias.map((categoria) => (
          <CardCategoria
            key={categoria.id}
            categoria={categoria}
            onClick={() => setProdutos(categoria.produto || [])}
            onDelete={handleDelete}
          />
        ))}
      </div>

      {/* Exibição de Produtos */}
      <div className="rounded-lg p-4 w-full my-4">
        {loadingProdutos && (
          <div className="flex justify-center items-center">
            <ThreeDots
              visible={true}
              height="80"
              width="80"
              color="#bad381"
              radius="9"
              ariaLabel="three-dots-loading"
            />
          </div>
        )}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {produtos.map((produto) => (
          <CardProdutos key={produto.id} produto={produto} />
        ))}
      </div>
    </div>
  );
}

export default ListarCategorias;