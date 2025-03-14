import React from "react";
import ListarCategorias from "../components/Categoria/listarcategorias/ListarCategorias";

const Cardapio = () => {
  return (
    <div className="p-6 text-center">
      <h1 className="text-2xl font-bold mb-4">Cardápio</h1>
      <p>🛒 Explore nossas categorias e descubra os produtos que vão conquistar seu paladar! 😋</p>
    <ListarCategorias/>
    </div>
  );
};

export default Cardapio;
