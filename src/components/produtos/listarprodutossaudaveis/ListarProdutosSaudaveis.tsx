import { useEffect, useState } from "react";
import Produto from "../../../models/Produto";
import { DNA } from "react-loader-spinner";
import CardProdutos from "../cardprodutos/CardProdutos";
import { listar } from "../../../services/Service";

function ListarProdutos() {
  const [produtos, setProdutos] = useState<Produto[]>([]);

  async function buscarProdutos() {
    try {
      await listar("/produto/saudaveis/all", setProdutos); // Sem autenticação
    } catch (error: any) {
      console.error("Erro ao buscar produtos saudáveis:", error); // Log de erro para depuração
    }
  }

  useEffect(() => {
    buscarProdutos();
  }, [produtos.length]); // Atualiza quando o comprimento da lista muda

  return (
    <>
      {produtos.length === 0 && (
        <DNA
          visible={true}
          height="200"
          width="200"
          ariaLabel="dna-loading"
          wrapperStyle={{}}
          wrapperClass="dna-wrapper mx-auto"
        />
      )}

      <div
        className="
                bg-gray-200 
                flex 
                flex-col
                justify-center
                "
      >
        <h1 className="text-2xl font-bold p-4 bg-red-500 text-white">Opções Saudáveis</h1>
        <div className="container mx-auto my-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {produtos.map((produto) => (
            <CardProdutos key={produto.id} produto={produto} />
          ))}
        </div>
      </div>
    </>
  );
}

export default ListarProdutos;