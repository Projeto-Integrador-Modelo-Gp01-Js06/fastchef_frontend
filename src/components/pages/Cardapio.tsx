import React from "react";
import ListarCategorias from "../Categoria/listarcategorias/ListarCategorias";

const Cardapio = () => {
  return (
    <div className="p-6 text-center">
      <h1 className="text-2xl font-bold mb-4">Cardápio</h1>
      <p>Aqui aparecerão as lojas cadastradas e seus produtos.</p>
      <ListarCategorias/>
    </div>
  );
};

export default Cardapio;
