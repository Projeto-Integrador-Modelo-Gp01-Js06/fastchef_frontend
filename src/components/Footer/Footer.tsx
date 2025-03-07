import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
  FaMobileAlt,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {

  const data = new Date().getFullYear()

  return (
    <div className="bg-green-50 dark:bg-gray-950">
      <section className="max-w-[1200px] mx-auto">
        <div className=" grid md:grid-cols-3 py-5">
          <div className=" py-8 px-4 ">
            <h1 className="sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3 flex items-center gap-3">
              <img src="https://i.ibb.co/QFpjykTY/FastChef.png" alt="Logo" className="max-w-[50px]" />
              FastChef
            </h1>
            <p className="">
            Do petisco ao prato principal, tudo num clique!
            </p>
            <br />
            <div className="flex items-center gap-3">
              <FaLocationArrow />
              <p>Brasil, São Paulo</p>
            </div>
            <div className="flex items-center gap-3 mt-3">
              <FaMobileAlt />
              <p>+55 11-40028933</p>
            </div>
            {/* Social Handle */}
            <div className="flex items-center gap-3 mt-6 ">
              <a href="#">
                <FaInstagram className="text-3xl hover:scale-105 duration-200" />
              </a>
              <a href="#">
                <FaFacebook className="text-3xl hover:scale-105 duration-200" />
              </a>
              <a href="#">
                <FaLinkedin className="text-3xl hover:scale-105 duration-200" />
              </a>
            </div>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10 ">
            <div className="">
              <div className="py-8 px-4 ">
                <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
                  Links 
                </h1>
                <ul className={`flex flex-col gap-3`}>
                  
                <Link to='/' className='hover:underline'>Inicio</Link>
                <Link to='/sobre' className='hover:underline'>Sobre</Link>
                <Link to='/servicos' className='hover:underline'>Servicos</Link>
                <Link to='/login' className='hover:underline'>Login</Link>
                </ul>
              </div>
            </div>
            <div className="">
              <div className="py-8 px-4 ">
                <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
                  Apoiar
                </h1>
                <ul className="flex flex-col gap-3">
                  <li className="cursor-pointer">Perguntas Frequentes</li>
                  <li className="cursor-pointer">Envios e Devoluções</li>
                  <li className="cursor-pointer">Contate-nos</li>
                  <li className="cursor-pointer">Nossos Parceiros</li>
                </ul>
              </div>
            </div>
            <div className="">
              <div className="py-8 px-4 ">
                <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
                  Informações
                </h1>
                {/* <ul className="list-disc list-inside"> */}
                <ul className="flex flex-col gap-3">
                <li className="cursor-pointer">Datas</li>
                  <li className="cursor-pointer">Festas</li>
                  <li className="cursor-pointer">Aniversários</li>
                  <li className="cursor-pointer">Menu</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="text-center py-10 border-t-2 border-gray-300/50">
            FastChef | Copyright: {data}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;
