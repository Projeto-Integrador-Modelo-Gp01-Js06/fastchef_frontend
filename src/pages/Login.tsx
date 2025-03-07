import { ChangeEvent, useContext, useEffect, useState } from "react";
import { RotatingLines } from "react-loader-spinner";
import { Link, useNavigate } from "react-router-dom";
import UsuarioLogin from "./../models/UsuarioLogin";
import AuthContext from "./../contexts/AuthContext";
import { EyeSlash, Eye } from "@phosphor-icons/react";

function Login() {
  const navigate = useNavigate();

  const { usuario, handleLogin, isLoading } = useContext(AuthContext);

  const [usuarioLogin, setUsuarioLogin] = useState<UsuarioLogin>({
    id: 0,
    nome: '',
    usuario: '',
    foto: '', 
    senha: '',
    token: '', 
  });

  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    if (usuario.token !== "") {
      navigate("/");
    }
  }, [usuario]);

  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    setUsuarioLogin({
      ...usuarioLogin,
      [e.target.name]: e.target.value,
    });
  }

  function login(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();
    handleLogin(usuarioLogin);
  }

  return (
    <>
    <div className="grid grid-cols-1 lg:grid-cols-2 h-screen place-items-center font-bold">
      {/* Coluna da imagem (oculta em telas menores) */}
      <div className="hidden lg:flex flex-col items-center justify-center h-full  p-10">
        <img
          src="https://ik.imagekit.io/c2hajdacu/FastChef/logo_fast_chef-removebg-preview.png?updatedAt=1741021601740"
          alt="Logo FastChef"
          className="max-w-xs mb-10"
        />
        <img
          src="https://ik.imagekit.io/c2hajdacu/FastChef/imagem_login-removebg-preview.png?updatedAt=1741058790785"
          alt="Login"
          className="max-w-xs"
        />
      </div>

        <form
          className="w-full lg:w-1/2 p-1 my-10 mx-40 max-w-md"
          onSubmit={login}
        >
          <h2 className="text-2xl font-bold text-center mb-6">Faça seu Login</h2>
          <div className="flex flex-col w-full">
            <label htmlFor="usuario">Usuário (E-mail)</label>
            <input
              type="text"
              id="usuario"
              name="usuario"
              placeholder="Usuario"
              className="border-2 border-slate-700 rounded p-2"
              value={usuarioLogin.usuario}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                atualizarEstado(e)
              }
            />
          </div>
          <div className="relative flex flex-col w-full">
            <label htmlFor="senha">Senha</label>
            <input
              type={showPassword ? 'text' : 'password'}
              id="senha"
              name="senha"
              placeholder="Senha"
              className="border-2 border-slate-700 rounded p-2"
              value={usuarioLogin.senha}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                atualizarEstado(e)
              }
            />
            <button
              type="button"
              className="top-9 right-2 absolute text-slate-700"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? (
                <EyeSlash size={20} />
              ) : (
                <Eye size={20} />
              )}
            </button>
          </div>
          <button
            type="submit"
            className=" my-5 w-full bg-[#fa7777] text-white px-6 py-2 rounded-lg hover:bg-[#e66a6a] transition"
          >
            {isLoading ? (
              <RotatingLines
                strokeColor="white"
                strokeWidth="5"
                animationDuration="0.75"
                width="24"
                visible={true}
              />
            ) : (
              <span>Entrar</span>
            )}
          </button>

          <hr className="border-slate-800 w-full" />

          <p>
            Ainda não tem uma conta?{" "}
            <Link to="/cadastro" className="text-black hover:underline">
              Cadastre-se
            </Link>
          </p>
        </form>

      </div>
    </>
  );
}

export default Login;