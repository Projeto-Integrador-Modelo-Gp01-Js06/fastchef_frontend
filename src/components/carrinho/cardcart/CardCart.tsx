import { Minus, Plus } from "@phosphor-icons/react"
import { useContext } from "react"
import { CartContext, Items } from "../../../contexts/CartContext"
import AuthContext from "../../../contexts/AuthContext"
import { useNavigate } from "react-router-dom"

interface CardProdutosProps {
    item: Items
}

function CardCart({ item }: CardProdutosProps) {

    const { adicionarItem, removerItem } = useContext(CartContext)
    
    const { usuario } = useContext(AuthContext); // Pegar informações do usuário logado
  const isAuthenticated = usuario.token !== ""; // Verifica se há token (usuário logado)
  const navigate = useNavigate();

  const handleAdicionarItem = (id: number) => {
    if (!isAuthenticated) {
      navigate("/login"); // Redirecionar para a página de login se não estiver autenticado
      return;
    }
    adicionarItem(id);
  };

  const handleRemoverItem = (id: number) => {
    if (!isAuthenticated) {
      navigate("/login"); // Redirecionar para a página de login se não estiver autenticado
      return;
    }
    removerItem(id);
  };

    return (
        <div className='flex flex-col rounded-lg overflow-hidden justify-between bg-white'>
            <div className='py-4'>

                <img src={item.foto} className='mt-1 h-40 max-w-75 mx-auto' alt={item.nome} />

                <div className='p-4'>
                    <p className='text-sm text-center uppercase'>{item.nome}</p>
                    <h3 className='text-xl text-center font-bold uppercase'>
                        {Intl.NumberFormat('pt-BR', {
                            style: 'currency',
                            currency: 'BRL'
                        }).format(item.preco)}
                    </h3>
                    <h4 className='my-2 text-center'>
                        <span className="font-semibold">Quantidade:</span> {item.quantidade} 
                    </h4>
                </div>
            </div>
            <div className="flex flex-wrap">
                <button className='w-1/2 text-slate-100 bg-blue-500 hover:bg-blue-700 
                                   flex items-center justify-center py-2'
                    onClick={() => adicionarItem(item.id)}>
                    <Plus size={32} />
                </button>
                <button className='w-1/2 text-slate-100 bg-red-500 hover:bg-red-700 
                                   flex items-center justify-center py-2'
                    onClick={() => removerItem(item.id)}>
                    <Minus size={32} />
                </button>
            </div>
        </div >
    )
}

export default CardCart