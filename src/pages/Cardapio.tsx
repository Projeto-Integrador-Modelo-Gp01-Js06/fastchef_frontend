import React from "react";
import ListarCategorias from "../components/Categoria/listarcategorias/ListarCategorias";

const Cardapio = () => {
  return (
    <div className="p-6 text-center mt-12">
      <h1 className="text-3xl font-bold mb-4">Cardápio</h1>
      <p className="bg-verde text-black rounded-lg p-4 px-2 py-1 inline-block">
        🛒 Explore nossas categorias e descubra os produtos que vão conquistar seu paladar! 😋
      </p>
    <ListarCategorias/>
    </div>
  );
};

export default Cardapio;
