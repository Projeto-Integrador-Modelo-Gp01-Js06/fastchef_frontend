import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { RotatingLines } from "react-loader-spinner";
import { Link, useNavigate } from "react-router-dom";
import Usuario from "../../models/Usuario";
import { cadastrarUsuario } from "../../services/Service";
import { ToastAlerta } from "../../utils/ToastAlerta";

function Cadastro() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [confirmaSenha, setConfirmaSenha] = useState<string>("");

  const [usuario, setUsuario] = useState<Usuario>({
    id: 0,
    nome: "",
    usuario: "",
    senha: "",
    foto: "",
    admin: false,
  });

  useEffect(() => {
    if (usuario.id !== 0) {
      retornar();
    }
  }, [usuario]);

  function retornar() {
    navigate("/login");
  }

  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    setUsuario({ ...usuario, [e.target.name]: e.target.value });
  }

  function handleConfirmaSenha(e: ChangeEvent<HTMLInputElement>) {
    setConfirmaSenha(e.target.value);
  }

  async function cadastrarNovoUsuario(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (confirmaSenha === usuario.senha && usuario.senha.length >= 8) {
      setIsLoading(true);
      try {
        await cadastrarUsuario(`/usuarios/cadastrar`, usuario, setUsuario);
        ToastAlerta("Usuário cadastrado com sucesso!", "sucesso");
        navigate("/login");
      } catch (error) {
        ToastAlerta("Erro ao cadastrar o usuário!", "erro");
      }
    } else {
      ToastAlerta("Dados estão inconsistentes! Verifique os dados.", "erro");
      setUsuario({ ...usuario, senha: "" });
      setConfirmaSenha("");
    }
    setIsLoading(false);
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white py-8 px-4">
      <div className="w-full max-w-md bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-center mb-6 text-gray-900 dark:text-gray-100">Cadastro</h2>

        <form className="space-y-4" onSubmit={cadastrarNovoUsuario}>
          <div>
            <label htmlFor="nome" className="block text-gray-700 dark:text-gray-300 px-1">Nome</label>
            <input
              type="text"
              id="nome"
              name="nome"
              placeholder="Nome"
              className="w-full border-2 border-slate-700 rounded-lg py-2 dark:bg-gray-700 dark:text-white px-3"
              value={usuario.nome}
              onChange={atualizarEstado}
            />
          </div>

          <div>
            <label htmlFor="usuario" className="block text-gray-700 dark:text-gray-300 px-1">Email</label>
            <input
              type="email"
              id="usuario"
              name="usuario"
              placeholder="Email"
              className="w-full border-2 border-slate-700 rounded-lg py-2 dark:bg-gray-700 dark:text-white px-3"
              value={usuario.usuario}
              onChange={atualizarEstado}
            />
          </div>

          <div>
            <label htmlFor="foto" className="block text-gray-700 dark:text-gray-300 px-1">Foto</label>
            <input
              type="text"
              id="foto"
              name="foto"
              placeholder="Foto"
              className="w-full border-2 border-slate-700 rounded-lg py-2 dark:bg-gray-700 dark:text-white px-3"
              value={usuario.foto}
              onChange={atualizarEstado}
            />
          </div>

          <div>
            <label htmlFor="senha" className="block text-gray-700 dark:text-gray-300 px-1">Senha</label>
            <input
              type="password"
              id="senha"
              name="senha"
              placeholder="Senha"
              className="w-full border-2 border-slate-700 rounded-lg py-2 dark:bg-gray-700 dark:text-white px-3"
              value={usuario.senha}
              onChange={atualizarEstado}
            />
          </div>

          <div>
            <label htmlFor="confirmarSenha" className="block text-gray-700 dark:text-gray-300 px-1">Confirmar Senha</label>
            <input
              type="password"
              id="confirmarSenha"
              name="confirmarSenha"
              placeholder="Confirmar senha"
              className="w-full border-2 border-slate-700 rounded-lg py-2 dark:bg-gray-700 dark:text-white px-3"
              value={confirmaSenha}
              onChange={handleConfirmaSenha}
            />
          </div>

          <div className="flex justify-between mt-4">
            <button
              type="submit"
              className="bg-[#8daf66] hover:bg-[#44b063] px-6 py-2 rounded-lg text-white w-1/2 mr-2"
            >
              {isLoading ? (
                <RotatingLines strokeColor="white" width="24" visible={true} />
              ) : (
                "Cadastrar"
              )}
            </button>
            <button
              type="button"
              className="bg-red-300 hover:bg-red-400 px-6 py-2 rounded-lg text-black w-1/2 ml-2"
            >
              <Link to="/">Voltar tela inicial</Link>
            </button>
          </div>

          <p className="text-center mt-4 text-gray-700 dark:text-gray-300">
            Já tem uma conta? Faça o{" "}
            <Link to="/login" className="font-bold text-[#44b063] hover:underline">
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Cadastro;
