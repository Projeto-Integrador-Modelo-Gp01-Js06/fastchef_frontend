import React, { useContext, useEffect, useState } from 'react'
import CardCategoria from '../cardcategoria/CardCategoria'
import { useNavigate, useParams } from 'react-router-dom';
import Categoria from '../../../models/Categoria';
import { ThreeDots } from 'react-loader-spinner';
import Produto from '../../../models/Produto';
import { deletar, listar } from '../../../services/Service';
import CardProdutos from '../../produtos/cardprodutos/CardProdutos';
import { ToastAlerta } from '../../../utils/ToastAlerta';
import AuthContext from '../../../contexts/AuthContext';

function ListarCategorias() {
  const navigate = useNavigate();
    const [categorias, setCategorias] = useState<Categoria[]>([])
    const [produtos, setProdutos] = useState<Produto[]>([])
    const [loadingProdutos, setLoadingProdutos] = useState(false)
const { usuario, handleLogout } = useContext(AuthContext)
    const token = usuario.token




    async function buscarCategorias() {
      try {
        console.log("Buscando categorias...")
        const categoriasResponse = await listar("/categoria", setCategorias)
        console.log("Categorias encontradas:", categoriasResponse)
        // Extrair produtos das categorias
        const todosProdutos = categoriasResponse.flatMap((categoria: Categoria) => categoria.produto)
        setProdutos(todosProdutos)
        console.log("Produtos encontrados:", todosProdutos)
      } catch (err) {
        console.error("Erro ao buscar categorias:", err)
      }
    }

    async function buscarTodosProdutos() {
      try {
        setLoadingProdutos(true)
        console.log("Buscando todos os produtos...")
        const todosProdutos = await listar("/produto", setProdutos)
        console.log("Todos os produtos encontrados:", todosProdutos)
      } catch (err) {
        console.error("Erro ao buscar todos os produtos:", err)
      } finally {
        setLoadingProdutos(false)
      }
    }
  
    useEffect(() => {
      buscarCategorias()
    }, [])


    const handleDelete = async (id: number) => {
      try {
        await deletar(`/categoria/${id}`, {
          headers: {
            Authorization: token,
          },
        });
        setCategorias((prevCategorias) => prevCategorias.filter((cat) => cat.id !== id));
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
    <>
  
  <div className="flex justify-end">
 
</div>
    <div className="rounded-lg p-4 bg-[#fa7777] w-full my-4">
    <h2 className="text-3xl font-bold text-center text-white mb-6">CATEGORIAS</h2>
    <div className="flex justify-center items-center">
    {categorias.length === 0 && (

    <ThreeDots
      visible={true}
      height="80"
      width="80"
      color="#bad381"
      radius="9"
      ariaLabel="three-dots-loading"
    />
  )}
  </div>
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
  <button onClick={buscarTodosProdutos} className="text-2xl font-semibold relative border rounded-xl p-4 shadow-3xl flex items-center justify-center bg-[#bad381] hover:shadow-2xl duration-300 cursor-pointer">
          TODOS OS PRODUTOS
        </button>
        <button
            onClick={() => navigate('/categoria/novo')}
            className="text-2xl font-semibold relative border rounded-xl p-4 shadow-3xl flex items-center justify-center bg-[#bad381] hover:shadow-2xl duration-300 cursor-pointer"
          >
            ADICIONAR NOVA CATEGORIA
          </button>
        {categorias.map((categoria) => (
            <CardCategoria
            key={categoria.id}
            categoria={categoria}
            onClick={() => setProdutos(categoria.produto || [])}
            onDelete={handleDelete}
            />
        ))}
        </div>
   <div className="rounded-lg p-4 bg-[#fa7777] w-full my-4">
                    <h2 className="text-3xl font-bold text-center text-white mb-6"></h2>
                    <div className="flex justify-center items-center">
                        {loadingProdutos && (
                            <ThreeDots
                                visible={true}
                                height="80"
                                width="80"
                                color="#bad381"
                                radius="9"
                                ariaLabel="three-dots-loading"
                            />
                        )}
                    </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {produtos.map((produto) => (
              <CardProdutos key={produto.id} produto={produto} />
            ))}
          </div>
                </div>
         
   </>
  )
}

export default ListarCategorias


