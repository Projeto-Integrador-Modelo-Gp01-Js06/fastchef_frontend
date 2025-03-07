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
      className="relative border rounded-xl p-4 shadow-3xl flex items-center justify-center bg-white hover:shadow-2xl duration-300 cursor-pointer"
    >
      <p className='text-2xl font-semibold text-gray-800'>{categoria.nome}</p>
      
      {usuario && usuario.token && (
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