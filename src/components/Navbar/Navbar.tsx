import React, { useContext, useState } from "react";
import { FaCartShopping } from "react-icons/fa6";
import DarkMode from "./DarkMode";
import { Link, useNavigate } from "react-router-dom";
import { CartContext } from "../../contexts/CartContext";
import AuthContext from "../../contexts/AuthContext";
import { ToastAlerta } from "../../utils/ToastAlerta";
import { FaBars, FaTimes } from "react-icons/fa";

// Menu configuration
const Menu = [
  { id: 1, name: "Inicio", link: "/#" },
  { id: 2, name: "Serviços", link: "/services" },
  { id: 3, name: "Sobre", link: "/Sobre" },
  { id: 4, name: "Equipe", link: "/equipe" },
];

const Navbar = () => {
  const { quantidadeItems } = useContext(CartContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const renderMenuLinks = () =>
    Menu.map((menu) => (  
      <li key={menu.id}>
        <Link
          to={menu.link}
          className="inline-block py-4 px-4 hover:text-yellow-500"
          onClick={toggleMenu} // Close menu on click
        >
          {menu.name}
        </Link>
      </li>
    ));
  
  const navigate = useNavigate();
  const { usuario, handleLogout } = useContext(AuthContext);
  const isAuthenticated = usuario.token !== ""; // Verifica se há token (usuário logado)


  function logout() {

    handleLogout()
    ToastAlerta('O Usuário foi desconectado com sucesso!', 'info')
    navigate('/')
}


  return (
    <div className="fixed top-0 left-0 w-full z-50 shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200 h-16 flex items-center">
      <div className="container py-1 sm:py-0">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div>
            <Link to="/">
              <a
                href="#"
                className="font-bold text-2xl sm:text-xl flex gap-1 items-center bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-verde"
              >
                <img
                  src="https://i.ibb.co/QFpjykTY/FastChef.png"
                  alt="Logo"
                  className="w-[40px] sm:w-[30px]"
                />
                FastChef
              </a>
            </Link>
          </div>

          {/* Navbar Right Items */}
          <div className="flex items-center gap-4 ml-auto">
            {/* Desktop Menu */}
            <ul className="hidden sm:flex items-center gap-2">
              {renderMenuLinks()}
            </ul>

            {/* Cart Button */}
            <Link to="/cart">
              <div className="flex justify-end ml-auto sm:ml-0">
                <button className="bg-gradient-to-r from-red-400 to-red-200 hover:scale-105 duration-200 text-white py-1 px-4 rounded-full flex items-center gap-3">
                  <span className="hidden sm:inline">Comprar</span>
                  <FaCartShopping className="text-xl text-white drop-shadow-sm cursor-pointer" />
                  {quantidadeItems > 0 && (
                    <span className="relative -top-3 -right-5 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                      {quantidadeItems}
                    </span>
                  )}
                </button>
              </div>
            </Link>

            {/* Mobile Menu Button */}
            <div className="sm:hidden z-20">
              <button
                onClick={toggleMenu}
                className="bg-gradient-to-r from-red-400 to-red-200 hover:scale-105 duration-200 text-white py-1 px-4 rounded-full flex items-center gap-3 text-xl"
              >
                {isMenuOpen ? <FaTimes /> : <FaBars />}
              </button>
            </div>

            {/* Dark Mode Toggle */}
            <div>
              <DarkMode />
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <ul
            className={`
              absolute top-14 left-0 w-full 
              bg-white dark:bg-gray-900 
              flex flex-col items-center gap-4 py-4 sm:hidden z-10 
              shadow-md 
              transition-all duration-300 ease-in-out
              transform ${isMenuOpen ? "translate-y-0 opacity-100" : "-translate-y-10 opacity-0"}
            `}
          >
            {renderMenuLinks()}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Navbar;
