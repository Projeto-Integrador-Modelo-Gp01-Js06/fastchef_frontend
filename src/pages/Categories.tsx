import React, { useEffect, useState, useRef } from "react";


import Marmita from "../assets/marmita.png";
import Massas from "../assets/massas.png"
import Japonesa from "../assets/japonesa.png"
import Pizza from "../assets/pizza.png"
import Salgados from "../assets/salgados.png"
import Sorvete from "../assets/sorvete.png"
import Açai from "../assets/acai.png"
import Doces from "../assets/doces.png"
import Lanches from "../assets/lanches.png"



const categories = [
  { id: 1, name: "Massas", img: Massas }, 
  { id: 2, name: "Marmita", img: Marmita },
  { id: 3, name: "Japonesa", img: Japonesa },
  { id: 4, name: "Pizza", img: Pizza },
  { id: 5, name: "Salgados", img: Salgados },
  { id: 6, name: "Sorvete", img: Sorvete },
  { id: 7, name: "Açai", img: Açai },
  { id: 8, name: "Doces", img: Doces},
  { id: 9, name: "Lanches", img: Lanches},
];

const Categories = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={sectionRef}
      className={`w-full bg-gray-100 dark:bg-gray-900 py-20 flex flex-col items-center transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
      }`}
    >
      <h2 className="text-4xl font-bold mb-8 text-center text-black dark:text-white">
        Mais de 1.000 pratos para pedir!
      </h2>
      <p className="bg-verde text-black px-6 py-2 rounded-md text-xl mb-8 ">
        Bem-vindo à maior rede de pedidos e entregas de comida do Brasil
      </p>

      {/* Carrossel de Categorias */}
      <div className="relative w-full flex justify-center">
        <div className="carousel-container relative w-full overflow-hidden">
          <div className="carousel-track flex gap-8">
            {[...categories, ...categories].map((category, index) => (
              <div
                key={index}
                className="bg-red-200 p-5 rounded-lg shadow-2xl flex flex-col items-center min-w-[150px] h-[250px] transition-transform duration-500 hover:scale-110"
              >
                <img
                  src={category.img}
                  alt={category.name}
                  className="w-24 h-24 object-cover"
                />
                <p className="mt-3 text-xl font-semibold ">{category.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Estilos para a animação */}
      <style>
        {`
          @keyframes scroll {
            from {
              transform: translateX(-25%);
            }
            to {
              transform: translateX(25%);
            }
          }
          .carousel-track {
            display: flex;
            animation: scroll 15s linear infinite alternate;
            width: max-content;
          }
        `}
      </style>
    </div>
  );
};

export default Categories;
