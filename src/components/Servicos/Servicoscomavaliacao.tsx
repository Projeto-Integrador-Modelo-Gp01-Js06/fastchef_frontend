/* 
import React, { useState } from "react";
import Img4 from "../../assets/salada.png";
import Img2 from "../../assets/massas.png";
import Img3 from "../../assets/biryani4.png";
import StarRatings from "react-star-ratings";  // Importando a biblioteca para as estrelas

// Tipagem explícita para o estado ratings
const ServicesData = [
  {
    id: 1,
    img: Img3,
    name: "Acompanhamentos",
    description:
      "Complete sua refeição com nossos acompanhamentos irresistíveis! De opções leves a sabores marcantes, cada porção é preparada para harmonizar perfeitamente com o seu prato principal.",
    rating: 4, // Avaliação inicial
  },
  {
    id: 2,
    img: Img4,
    name: "Saudáveis",
    description:
      "Desfrute de refeições deliciosas e equilibradas com nossos pratos saudáveis! Feitos com ingredientes frescos e nutritivos, nossas opções são perfeitas para quem busca sabor e bem-estar em cada refeição.",
    rating: 5, // Avaliação inicial
  },
  {
    id: 3,
    img: Img2,
    name: "Massas",
    description:
      "Saboreie o melhor das massas com nossas receitas artesanais! Feitas com ingredientes selecionados e molhos irresistíveis, cada prato é uma experiência de sabor e conforto.",
    rating: 3, // Avaliação inicial
  },
];

const Services = () => {
  // Tipando ratings como um objeto com chaves do tipo número
  const [ratings, setRatings] = useState<Record<number, number>>({
    1: 4, // Acompanhamentos
    2: 5, // Saudáveis
    3: 3, // Massas
  });

  // Função para atualizar a avaliação das estrelas
  const changeRating = (newRating: number, id: number) => {
    setRatings((prevRatings) => ({
      ...prevRatings,
      [id]: newRating,
    }));
  };

  return (
    <>
      <span id="services"></span>
      <div className="py-10">
        <div className="container">
          <div className="text-center mb-20 max-w-[400px] mx-auto">
            <p className="text-sm bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-verde font-bold">
              Nossos Serviços
            </p>
            <h1 className="text-3xl font-bold">Serviços</h1>
            <p className="text-xs text-gray-400">
              Nossos serviços foram pensados para oferecer a melhor experiência gastronômica.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-14 md:gap-5 place-items-center">
            {ServicesData.map((service) => (
              <div
                key={service.id}
                data-aos="zoom-in"
                data-aos-duration="300"
                className="rounded-2xl bg-gradient-to-r from-red-100 to-red-100 dark:bg-gray-800 hover:bg-primary dark:hover:bg-primary hover:text-white relative shadow-xl duration-high group max-w-[300px]"
              >
                <div className="h-[150px]">
                  <img
                    src={service.img}
                    alt={service.name}
                    className="max-w-[300px] block mx-auto transform -translate-y-2 group-hover:scale-110 group-hover:rotate-6 duration-300"
                  />
                </div>
                <div className="p-4 text-center">
                  <h1 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-lime-600 to-lime-500 p-1">
                    {service.name}
                  </h1>
                  <p className="text-black group-hover:text-red-900 duration-high text-sm line-clamp-6 text-justify">
                    {service.description}
                  </p>

                  {/* Avaliação por estrelas */ /*} 
                  <div className="mt-4">
                    <StarRatings
                      rating={ratings[service.id]} // Passando a classificação atual para o componente
                      starRatedColor="yellow"
                      starEmptyColor="gray"
                      starDimension="30px"
                      changeRating={(newRating) => changeRating(newRating, service.id)} // Atualiza a classificação ao clicar
                      numberOfStars={5}
                      name={`rating-${service.id}`}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
*/
