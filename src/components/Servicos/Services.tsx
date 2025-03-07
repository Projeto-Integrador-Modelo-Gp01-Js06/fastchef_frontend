import React from "react";
import Img4 from "../../assets/salada.png"
import Img2 from "../../assets/massas.png";
import Img3 from "../../assets/biryani4.png";
const ServicesData = [
  {
    id: 1,
    img: Img3,
    name: "Acompanhamentos",
    description:
      "Complete sua refeição com nossos acompanhamentos irresistíveis! De opções leves a sabores marcantes, cada porção é preparada para harmonizar perfeitamente com o seu prato principal.",
  },
  {
    id: 2,
    img: Img4,
    name: " Saudaveis",
    description:
      "Desfrute de refeições deliciosas e equilibradas com nossos pratos saudáveis! Feitos com ingredientes frescos e nutritivos, nossas opções são perfeitas para quem busca sabor e bem-estar em cada refeição.",
  },
  {
    id: 3,
    img: Img2,
    name: "Massas",
    description:
      "Saboreie o melhor das massas com nossas receitas artesanais! Feitas com ingredientes selecionados e molhos irresistíveis, cada prato é uma experiência de sabor e conforto.",
  },
];
const Services = () => {
  return (
    <>
      <span id="services"></span>
      <div className="py-10">
        <div className="container">
          <div className="text-center mb-20 max-w-[400px] mx-auto">
            <p className="text-sm bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-verde font-bold ">
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
                data-aos="zoom-in"
                data-aos-duration="300"
                className="rounded-2xl bg-gradient-to-r from-red-100 to-red-100 dark:bg-gray-800  hover:bg-primary dark:hover:bg-primary hover:text-white relative shadow-xl duration-high group max-w-[300px] h-[360px]"
              >
                <div className="h-[150px] ">
                  <img
                    src={service.img}
                    alt=""
                    className="max-w-[300px] block mx-auto transform -translate-y-2
                  group-hover:scale-110 group-hover:rotate-6 duration-300"
                  />
                </div>
                <div className="p-4 text-center">
                  <div className="w-full ">
                  </div>
                  <h1 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-lime-600 to-lime-500 p-1">{service.name}</h1>
                  <p className="text-black group-hover:text-red-900 duration-high text-sm line-clamp-6 text-justify">
                    {service.description}
                  </p>
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