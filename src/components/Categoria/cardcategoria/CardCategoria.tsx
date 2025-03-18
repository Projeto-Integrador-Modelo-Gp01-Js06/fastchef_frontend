import React, { useContext } from 'react'
import Categoria from '../../../models/Categoria'
import { Pencil, Trash } from '@phosphor-icons/react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../../../contexts/AuthContext'

interface CardCategoriasProps {
    categoria: Categoria
    onClick: (id: string) => void
    onDelete: (id: number) => void;
}

function CardCategoria({ categoria, onClick, onDelete }: CardCategoriasProps) {
  const { usuario } = useContext(AuthContext);
  const isAuthenticated = usuario.token !== ""; // Verifica se há token (usuário logado)
  const navigate = useNavigate();
  
  const handleDelete = (e: React.MouseEvent) => {
    e.stopPropagation();
    onDelete(categoria.id);
  }
  
  const handleEdit = (e: React.MouseEvent) => {
    e.stopPropagation();
    navigate(`/categoria/${categoria.id}`);
  }
    
  return (
    <div 
      onClick={() => onClick(categoria.id.toString())}  
      className="relative border rounded-xl p-4 shadow-3xl flex items-center justify-center dark:text-black bg-white hover:bg-red-200  hover:shadow-2xl duration-300 cursor-pointer  w-60 h-9 transform hover:scale-105"
    >
      <p className='text-xl font-semibold text-black'>{categoria.nome}</p>
      
      {isAuthenticated && (usuario.id === 20 || usuario.usuario === 'admin@admin.com') && (
        <div className="absolute right-4 top-1/2 -translate-y-1/2 flex">
          <button onClick={handleEdit}>
            <Pencil size={24} className="mr-1 hover:fill-teal-700" />
          </button>
          <button onClick={handleDelete}>
            <Trash size={24} className="mr-1 hover:fill-red-700" />
          </button>
        </div>
      )}
    </div>  
  )
}

export default CardCategoria