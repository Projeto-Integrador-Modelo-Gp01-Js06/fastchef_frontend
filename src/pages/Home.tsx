import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; // Importando useNavigate
import Pizza from "../assets/pizza.png";
import Donuts from "../assets/donuts.png";
import Salada from "../assets/salada2.png";
import Vector from "../assets/vector3.png";

const ListaImagem = [
  { id: 1, img: Pizza },
  { id: 2, img: Donuts },
  { id: 3, img: Salada },
];

const Home = () => {
  const [imageId, setImageId] = useState(Pizza);
  const navigate = useNavigate(); // Inicializando useNavigate

  useEffect(() => {
    const images = [Pizza, Donuts, Salada]; // Lista de imagens
    let currentIndex = 0;

    // Função para mudar a imagem a cada 3 segundos
    const intervalId = setInterval(() => {
      currentIndex = (currentIndex + 1) % images.length;
      setImageId(images[currentIndex]);
    }, 3000);

    // Limpeza do intervalo quando o componente for desmontado
    return () => clearInterval(intervalId);
  }, []);

  const bgImage = {
    backgroundImage: `url(${Vector})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  };

  return (
    <div
      className="min-h-[550px] sm:min-h-[600px] bg-gray-100 dark:bg-gray-950 dark:text-white flex justify-center items-center duration-200 bg-blend-multiply"
      style={bgImage}
    >
      <div className="container pb-8 sm:pb-0">
        <div className="grid grid-cols-1 sm:grid-cols-2">
          {/* Textos */}
          <div
            data-aos="zoom-out"
            data-aos-duration="400"
            data-aos-once="true"
            className="flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1"
          >
            <h1 className="text-4xl sm:text-6xl lg:text-5xl font-bold">
              Oferecemos a{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-b from-red-600 to-red-300">
                entrega mais rápida
              </span>{" "}
              em qualquer cidade
            </h1>
            <p className="text-sm dark:text-black dark:bg-white bg-verde rounded-md border-1 px-4">
              Do petisco ao prato principal, tudo num clique!
            </p>
            <div className="flex flex-wrap gap-4 justify-center sm:justify-start ml-80">
              <div>
                <button
                  onClick={() => navigate("/login")}
                  className="bg-gradient-to-r from-red-400 to-red-300 hover:scale-105 duration-200 text-black py-2 px-4 rounded-full mt-2 font-bold"
                >
                  Peça agora
                </button>
              </div>
              <button
                onClick={() => navigate("/cardapio")} // Redireciona para a página de Cardápio
                className="border-2 border-red-400 hover:scale-105 duration-200 text-black dark:text-white py-3 px-4 rounded-full bg-transparent"
              >
                Cardápio
                <i className="fas fa-arrow-right text-red-400 ml-2"></i>
              </button>
            </div>
          </div>
          {/* Imagens */}
          <div className="min-h-[450px] sm:min-h-[450px] flex justify-center items-center relative order-1 sm:order-2">
            <div className="h-[300px] sm:h-[450px] overflow-hidden flex justify-center items-center">
              <img
                data-aos="zoom-in"
                data-aos-duration="300"
                data-aos-once="true"
                src={imageId}
                alt="comida"
                className="w-[450px] h-[450px] object-cover mx-auto transition-all duration-500 ease-in-out rotate-[360deg] spin"
              />
            </div>
            <div className="flex lg:flex-col lg:top-1/2 lg:-translate-y-1/2 lg:py-2 justify-center gap-4 absolute bottom-[0px] lg:-right-10 bg-white/30 rounded-full">
              {ListaImagem.map((item) => (
                <img
                  key={item.id}
                  data-aos="zoom-in"
                  data-aos-duration="400"
                  data-aos-once="true"
                  src={item.img}
                  onClick={() => {
                    setImageId(item.img);
                  }}
                  alt="comida img"
                  className="max-w-[80px] h-[80px] object-contain inline-block hover:scale-105 duration-200"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
