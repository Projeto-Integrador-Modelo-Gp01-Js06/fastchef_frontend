import { useEffect, useState } from 'react';
import Produto from '../../../models/Produto';
import { DNA } from 'react-loader-spinner';
import CardProdutos from '../cardprodutos/CardProdutos';
import { listar } from '../../../services/Service';
<<<<<<< HEAD

=======
>>>>>>> Dupla-3

function ListarProdutos() {
  const [produtos, setProdutos] = useState<Produto[]>([]);

  async function buscarProdutos() {
    try {
      await listar('/produto', setProdutos); // Sem headers de autenticação
    } catch (error: any) {
      console.error('Erro ao buscar produtos:', error);
    }
  }

  useEffect(() => {
    buscarProdutos();
  }, [produtos.length]);

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

      <div className="
                bg-gray-200 
                flex 
                justify-center
                ">
        <div className='container mx-auto my-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4'>
          {produtos.map((produto) => (
            <CardProdutos key={produto.id} produto={produto} />
          ))}
        </div>
      </div>
    </>
  );
}

export default ListarProdutos;