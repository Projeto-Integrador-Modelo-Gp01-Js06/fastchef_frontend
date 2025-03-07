import React from "react";
import Feijoada from "../../assets/feijoada.png";
import Vector from "../../assets/vector3.png";
import { GrSecure } from "react-icons/gr";
import { IoFastFood } from "react-icons/io5";
import { GiFoodTruck } from "react-icons/gi";

const Banner = () => {
  const bgImage = {
    backgroundImage: `url(${Vector})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "100%",
    width: "100%",
  };
  return (
    <>
      <div className="min-h-[550px]">
        <div className="min-h-[550px] flex justify-center items-center backdrop-blur-xl py-12 sm:py-0 ">
          <div
            data-aos="slide-up"
            data-aos-duration="300"
            className="container"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Seção de Imagens */}
              <div>
                <img
                  src={Feijoada}
                  alt="Feijoada"
                  className="w-[140%] max-w-[1000px] h-auto mx-auto drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)] ml-[-100px] "
                />
              </div>

              {/* Seção de Texto */}
              <div className="flex flex-col justify-center gap-6 sm:pt-0">
                <h1 className="text-3xl sm:text-4xl font-bold text-verde">Sobre.</h1>
                <p className="text-sm text-gray-500 tracking-wide leading-5">
                FastChef combina sabor e segurança, oferecendo ingredientes frescos e um serviço de delivery ágil e seguro. Conte com a qualidade de nossos pratos e a confiança de um serviço rápido, que traz suas refeições diretamente para você!
                  <br />
                  <br />
                  Todos os nossos ingredientes são frescos e selecionados com cuidado, trazidos de diversos países para garantir sabores autênticos e de qualidade. Experimente o melhor da gastronomia global!
                </p>
                <div className="flex gap-6">
                  <div>
                    <GrSecure className="text-4xl h-20 w-20 shadow-sm p-5 rounded-full bg-violet-100 dark:bg-violet-400" />
                  </div>
                  <div>
                    <IoFastFood className="text-4xl h-20 w-20 shadow-sm p-5 rounded-full bg-orange-100 dark:bg-orange-400" />
                  </div>
                  <div>
                    <GiFoodTruck className="text-4xl h-20 w-20 shadow-sm p-5 rounded-full bg-green-100 dark:bg-green-400" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
