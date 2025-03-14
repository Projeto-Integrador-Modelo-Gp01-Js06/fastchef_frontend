import React, { useContext } from "react";
import Categoria from "../../../models/Categoria";
import { Pencil, Trash } from "@phosphor-icons/react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthContext";

interface CardCategoriasProps {
  categoria: Categoria;
  onClick: (id: string) => void;
  onDelete: (id: number) => void;
}

function CardCategoria({ categoria, onClick, onDelete }: CardCategoriasProps) {
  const { usuario } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleDelete = (e: React.MouseEvent) => {
    e.stopPropagation();
    onDelete(categoria.id);
  };

  const handleEdit = (e: React.MouseEvent) => {
    e.stopPropagation();
    navigate(`/categoria/${categoria.id}`);
  };

  return (
    <div
      onClick={() => onClick(categoria.id.toString())}
      className="relative border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 rounded-xl p-4 shadow-md hover:shadow-lg transition-all cursor-pointer flex items-center justify-between"
    >
      <p className="text-lg font-semibold text-gray-900 dark:text-gray-200">
        {categoria.nome}
      </p>

      {usuario && usuario.token && (
        <div className="flex space-x-2">
          <button onClick={handleEdit} className="p-2 rounded-lg hover:bg-teal-500 transition-all">
            <Pencil size={20} className="text-gray-700 dark:text-gray-300" />
          </button>
          <button onClick={handleDelete} className="p-2 rounded-lg hover:bg-red-500 transition-all">
            <Trash size={20} className="text-gray-700 dark:text-gray-300" />
          </button>
        </div>
      )}
    </div>
  );
}

export default CardCategoria;
