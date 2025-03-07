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

  // A interface 'Usuario' agora exige a propriedade 'admin', então incluímos ela com um valor padrão
  const [usuario, setUsuario] = useState<Usuario>({
    id: 0,
    nome: "",
    usuario: "",
    senha: "",
    foto: "",
    admin: false, // A propriedade 'admin' agora está sendo inicializada corretamente
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

    // Verificar se a senha e a confirmação estão corretas
    if (confirmaSenha === usuario.senha && usuario.senha.length >= 8) {
      setIsLoading(true);
      try {
        // Passando a propriedade 'admin' (que está como false por padrão) junto aos dados
        await cadastrarUsuario(`/usuarios/cadastrar`, usuario, setUsuario);
        ToastAlerta("Usuário cadastrado com sucesso!", "sucesso");
        navigate("/login"); // Após cadastro, redireciona para a tela de login
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
    <div className="flex items-center justify-center min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white">
      <div className="w-full max-w-md bg-red-100 dark:bg-gray-800 p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-center mb-6 text-black dark:text-gray-100">Cadastro</h2>

        <form className="space-y-1" onSubmit={cadastrarNovoUsuario}>
          <div>
            <label htmlFor="nome" className="block m-15 text-gray-700 dark:text-gray-300 px-1">Nome</label>
            <input
              type="text"
              id="nome"
              name="nome"
              placeholder="Nome"
              className="w-full border-black border rounded-lg py-2 dark:border-gray-600 dark:bg-gray-700 dark:text-white px-1"
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
              className="w-full border border-black  rounded-lg py-2 dark:border-gray-600 dark:bg-gray-700 dark:text-white px-1"
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
              className="w-full border border-black  rounded-lg py-2 px-1 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
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
              className="w-full border px-1 border-black  rounded-lg py-2 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
              value={usuario.senha}
              onChange={atualizarEstado}
            />
          </div>

          <div>
            <label htmlFor="confirmarSenha" className="block text-gray-700  dark:text-gray-300 px-1">Confirmar Senha</label>
            <input
              type="password"
              id="confirmarSenha"
              name="confirmarSenha"
              placeholder="Confirmar a senha"
              className="w-full border border-black  rounded-lg py-2 px-1 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
              value={confirmaSenha}
              onChange={handleConfirmaSenha}
            />
          </div>

          <div className="flex justify-between mt-4">
            <button
              type="submit"
              className="bg-[#8daf66] hover:bg-lime-400 px-6 py-2 rounded-lg text-black w-1/2 mr-2"
            >
              {isLoading ? (
                <RotatingLines strokeColor="black" width="24" visible={true} />
              ) : (
                "Cadastrar"
              )}
            </button>
            <button
              type="button"
              className="bg-[#fa7777] hover:bg-[#e66a6a] px-6 py-2 rounded-lg text-black w-1/2 ml-2"
            >
              <Link to="/">
                Voltar tela inicial</Link>
            </button>
          </div>
          <p className="text-center mt-4">
            Já tem uma conta? Faça o {" "}
            <Link to="/login" className="text-[#627947]  hover:underline">
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Cadastro;
