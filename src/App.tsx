import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Home from "./pages/Home";
import Sobre from "../src/components/Sobre/Sobre";
import AppStore from "./components/AppStore/AppStore";
import Testimonial from "./components/Avaliacoes/Avaliacoes";
import Footer from "./components/Footer/Footer";
import Categories from "./pages/Categories";
import ComoFazerPedido from "./pages/ComoFazerPedido";
import Servicos from "./components/Servicos/Servicos"; // Importe o componente Servicos
import Perfil from "./pages/perfil/Perfil";
import { ToastContainer } from "react-toastify";
import Cadastro from "./pages/cadastro/Cadastro";
import Cardapio from "./pages/Cardapio";
import Login from "./pages/login/Login";
import { AuthProvider } from "./contexts/AuthContext";
import Cart from "./components/carrinho/cart/Cart";
import { CartProvider } from "./contexts/CartContext";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DeletarCategoria from "./components/Categoria/deletarcategoria/DeletarCategoria";
import CadastrarCategoria from "./components/Categoria/cadastrarcategoria/CadastrarCategoria";
import EditarCategoria from "./components/Categoria/editarcategoria/EditarCategoria";
import DeletarProduto from "./components/produtos/deletarproduto/DeletarProduto";
import FormProduto from "./components/produtos/formproduto/FormProduto";
import Navbar from "./components/Navbar/Navbar";

const App = () => {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 500,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <>
      <AuthProvider>
        <ToastContainer />
        <BrowserRouter>
          <div className="bg-white dark:bg-gray-900 dark:text-white duration-200">
            <CartProvider>
              <div className="bg-white dark:bg-gray-900 dark:text-white duration-200">
                {/* Navbar é renderizado em todas as páginas */}
                <Navbar />

                <Routes>
                  {/* Página inicial */}
                  <Route
                    path="/"
                    element={
                      <>
                        <Home />
                        {/* Componentes apenas na home */}
                        <Servicos /> 
                        <Categories />
                        <ComoFazerPedido />
                        <Sobre />
                        <AppStore />
                        <Testimonial />
                      </>
                    }
                  />

                  {/* Rota para a página de serviços */}
                  <Route path="/services" element={<Servicos />} />

                  {/* Outras páginas */}
                  <Route path="/cadastro" element={<Cadastro />} />
                  <Route path="/cardapio" element={<Cardapio />} />
                  <Route path="/sobre" element={<Sobre />} />
                  <Route path="/cart" element={<Cart />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/perfil" element={<Perfil />} />
			<Route path="/produto/produto" element={<FormProduto />} />
						<Route path="/produto/editarproduto/:id" element={<FormProduto />} />
						<Route path="/produto/deletarproduto/:id" element={<DeletarProduto />} />
                  <Route path="/categoria/novo" element={<CadastrarCategoria />} />
                    <Route path="/categoria/:id" element={<EditarCategoria />} />
                    <Route path="/categoria/deletar/:id" element={<DeletarCategoria />} />
                </Routes>

                {/* Footer é renderizado em todas as páginas */}
                <Footer />
              </div>
            </CartProvider>
          </div>
        </BrowserRouter>
      </AuthProvider>
    </>
  );
};

export default App;