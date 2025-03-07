import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import Produto from "../../../models/Produto";
import { Pencil, Trash, Plus } from "@phosphor-icons/react";
import { formatarMoeda } from "../../../utils/FormatarMoeda";
import { AuthContext } from "../../../contexts/AuthContext"; // Importar AuthContext
import { CartContext } from "../../../contexts/CartContext";

interface CardProdutoProps {
  produto: Produto;
}



function CardProdutos({ produto }: CardProdutoProps) {
  const { usuario } = useContext(AuthContext); // Pegar informações do usuário logado
  const isAuthenticated = usuario.token !== ""; // Verifica se há token (usuário logado)
  const { adicionarProduto } = useContext(CartContext)
  const navigate = useNavigate();



  async function handleComprar() {
    
    try {
      adicionarProduto(produto); 
      console.log("Produto comprado:", produto.id);
    } catch (error) {
      console.error("Erro ao comprar:", error);
    }
  }

  return (
    <div className="flex flex-col rounded-lg overflow-hidden justify-between bg-white my-10 hover:shadow-lg hover:scale-105 transition-transform duration-300">
      <div className="flex justify-end items-end pt-2 pr-2">
        {/* Mostrar ícones de cadastro, edição e exclusão apenas se for o Usuario Admin mencionado abaixo */}
        {isAuthenticated && (usuario.id === 2 || usuario.usuario === 'root@root.com') && (
          <>
            <Link to={`/produto/produto`}>
              <Plus size={24} className="mr-1 hover:fill-green-700" />
            </Link>
            <Link to={`/produto/editarproduto/${produto.id}`}>
              <Pencil size={24} className="mr-1 hover:fill-teal-700" />
            </Link>
            <Link to={`/produto/deletarproduto/${produto.id}`}>
              <Trash size={24} className="mr-1 hover:fill-red-700" />
            </Link>
          </>
        )}
        
      </div>

      <div className="flex flex-col justify-center py-2">
        <img
          src={produto.foto}
          className="mt-1 h-44 w-auto m-2 object-cover rounded-lg"
          alt={produto.nome}
        />

        <div className="p-4">
          <div className="min-h-12 flex items-center justify-center">
            <p className="text-sm text-center uppercase">{produto.nome}</p>
          </div>
          <h3 className="text-xl text-center font-bold uppercase">
            {formatarMoeda(produto.preco)}
          </h3>
          <div className="m-2 p-2 bg-red-100 rounded">
            <h6 className="py-1 text-sm font-bold">Valor Nutricional:</h6>
            <p className="text-sm">Calorias: {produto.calorias} Kcal</p>
            <p className="text-sm">Gordura Saturada: {produto.gorduraSaturada} g</p>
            <p className="text-sm">Açúcar: {produto.acucar} g</p>
            <p className="text-sm">Sódio: {produto.sodio} g</p>
            <p
              className={`text-lg font-bold ${
                ["A", "B"].includes(produto.nutriScore) ? "text-green-500" :
                produto.nutriScore === "C" ? "text-yellow-500" : "text-red-500"
              }`}>
                NutriScore: {
                ["A", "B"].includes(produto.nutriScore) ? " SAUDÁVEL" :
                produto.nutriScore === "C" ? " SABOROSO" : " MUITO SABOROSO"}
            </p>
          </div>
          {produto.categoria ? (
            <p className="text-base italic text-center">
              Categoria: {produto.categoria?.nome}
            </p>
          ) : (
            ""
          )}
        </div>
      </div>

      <button
        className="w-full text-white bg-red-500 hover:bg-red-600 flex items-center justify-center py-2"
        onClick={handleComprar}
      >
        Comprar
      </button>
    </div>
  );
}

export default CardProdutos;