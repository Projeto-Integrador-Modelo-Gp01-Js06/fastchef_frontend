import { GithubLogo, LinkedinLogo } from "@phosphor-icons/react";
import Carrossel from "../../components/carrossel/Carrossel";

function Equipe() {
  const membros = [
    { nome: "Adrielly Ramos", foto: "https://ik.imagekit.io/m1iwfxqae/Fotos%20-%20Integrantes%20(PI)/WhatsApp%20Image%202025-02-27%20at%2015.37.32.jpeg?updatedAt=1740681564018", github: "https://github.com/AdriellyN", linkedin: "https://www.linkedin.com/in/adrielly-do-nascimento-ramos/" },
    { nome: "Ana Paula", foto: "https://ik.imagekit.io/m1iwfxqae/Fotos%20-%20Integrantes%20(PI)/WhatsApp%20Image%202025-02-27%20at%2015.30.15.jpeg?updatedAt=1740681564193", github: "https://github.com/anapaula-sds", linkedin: "https://www.linkedin.com/in/anapaula-sds/" },
    { nome: "Carlos Henrique", foto: "https://ik.imagekit.io/m1iwfxqae/Fotos%20-%20Integrantes%20(PI)/perfil.JPG?updatedAt=1740681753965", github: "https://github.com/CrMessiProgrammer", linkedin: "https://www.linkedin.com/in/carlos-h-dev/" },
    { nome: "Eduarda Galeno", foto: "https://ik.imagekit.io/m1iwfxqae/Fotos%20-%20Integrantes%20(PI)/WhatsApp%20Image%202025-02-27%20at%2015.30.15%20(1).jpeg?updatedAt=1740681564323", github: "https://github.com/eduarda-galeno", linkedin: "https://www.linkedin.com/in/eduardagaleno/" },
    { nome: "Gabriel Domiciano", foto: "https://ik.imagekit.io/m1iwfxqae/Fotos%20-%20Integrantes%20(PI)/WhatsApp%20Image%202025-02-27%20at%2015.30.14.jpeg?updatedAt=1740681564038", github: "https://github.com/GabrielSDomiciano", linkedin: "https://www.linkedin.com/in/gabriel-domiciano96/" },
    { nome: "Gustavo Teles", foto: "https://ik.imagekit.io/m1iwfxqae/Fotos%20-%20Integrantes%20(PI)/WhatsApp%20Image%202025-02-27%20at%2015.30.14%20(1).jpeg?updatedAt=1740681564227", github: "https://github.com/ustavoteles", linkedin: "https://www.linkedin.com/in/ustavoteles/" },
    { nome: "Jeisa Boaventura", foto: "https://ik.imagekit.io/m1iwfxqae/Fotos%20-%20Integrantes%20(PI)/WhatsApp%20Image%202025-02-27%20at%2015.30.16.jpeg?updatedAt=1740681564502", github: "https://github.com/Caaarolb", linkedin: "https://www.linkedin.com/in/-caroline-boaventura/" },
    { nome: "Simone Gonzaga", foto: "https://ik.imagekit.io/m1iwfxqae/Fotos%20-%20Integrantes%20(PI)/WhatsApp%20Image%202025-02-27%20at%2015.30.15%20(2).jpeg?updatedAt=1740681564292", github: "https://github.com/si-gonz", linkedin: "https://www.linkedin.com/in/simonegonzagag/" },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 flex flex-col items-center py-10">
      <h1 className="text-red-300 dark:text-lime-300 text-4xl lg:text-5xl font-extrabold mb-10">
        CONHEÇA A NOSSA EQUIPE!
      </h1>
      <p className="text-black dark:text-gray-300 text-xl mb-10 text-center max-w-2xl font-bold">
        Somos desenvolvedores apaixonados por tecnologia, inovação e qualidade. Juntos, transformamos desafios em soluções eficientes.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {membros.map((membro, index) => (
          <div
            key={index}
            className="bg-red-200 dark:bg-gray-800 shadow-lg rounded-lg p-4 flex flex-col items-center hover:scale-110 transition-transform duration-300 transform group"
          >
            <img
              src={membro.foto}
              alt={membro.nome}
              className="w-32 h-32 rounded-full mb-4 object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
            />
            <h2 className="text-lg font-bold text-black dark:text-white">{membro.nome}</h2>
            <h2 className="text-lg font-semibold text-black dark:text-gray-300">Dev</h2>
            <div className="flex space-x-4 mt-2">
              <a
                href={membro.github}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#627947] dark:bg-lime-600 p-2 rounded-full hover:scale-110 hover:bg-lime-300 dark:hover:bg-lime-500 transition-all duration-200"
              >
                <GithubLogo size={26} weight="bold" className="text-black dark:text-white" />
              </a>
              <a
                href={membro.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#627947] dark:bg-lime-600 p-2 rounded-full hover:scale-110 hover:bg-lime-300 dark:hover:bg-lime-500 transition-all duration-200"
              >
                <LinkedinLogo size={26} weight="bold" className="text-black dark:text-white" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Equipe;
