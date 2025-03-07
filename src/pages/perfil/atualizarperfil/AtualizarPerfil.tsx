import { ChangeEvent, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../../../contexts/AuthContext";
import { ToastAlerta } from "../../../utils/ToastAlerta";
import { atualizar } from "../../../services/Service";
import { RotatingLines } from "react-loader-spinner";
import Usuario from "../../../models/Usuario";

function AtualizarPerfil() {
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [confirmarSenha, setConfirmarSenha] = useState<string>("")

    const { usuario, setUsuario } = useContext(AuthContext);
    const token = usuario.token;

    useEffect(() => {
        if (token === '') {
            ToastAlerta('Você precisa estar logado', 'info');
            navigate('/');
        }
    }, [token])

    function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
        setUsuario({
            ...usuario, // Mantém os dados do usuário
            [e.target.name]: e.target.value // Atualiza apenas o campo alterado
        });
    }

    async function atualizarUsuario(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()
        if (usuario.senha && usuario.senha.length >= 8) {
            setIsLoading(true)
            try {
                await atualizar(`/usuarios/atualizar`, usuario, setUsuario, {
                    headers: {
                        Authorization: token,
                    },
                });
                ToastAlerta("Usuário atualizado com sucesso!", "sucesso");

            } catch (error: any) {
                ToastAlerta("Erro ao atualizar o usuário!", "erro");
            }
        } else {
            ToastAlerta("Dados estão inconsistentes! Verifique os dados.", "erro");
            setUsuario({ ...usuario, senha: "" });
        }
        setIsLoading(false)
    }

    return (
        <div className="container flex flex-col mx-auto items-center">
            <h1 className="text-4xl text-center my-8">
                Editar Perfil
            </h1>

            <form className="flex flex-col w-1/2 gap-4" onSubmit={atualizarUsuario}>
                <div>
                    <label htmlFor="nome" >Nome</label>
                    <input
                        type="text"
                        id="nome"
                        name="nome"
                        placeholder="Nome"
                        className="w-full border border-black  rounded-lg py-2 dark:border-gray-600 px-2"
                        value={usuario.nome}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                    />
                </div>
                <div>
                    <label htmlFor="usuario" >Email</label>
                    <input
                        type="email"
                        id="usuario"
                        name="usuario"
                        placeholder="Email"
                        className="w-full border border-black  rounded-lg py-2 dark:border-gray-600 px-2"
                        value={usuario.usuario}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="titulo">Nova foto</label>
                    <input
                        type="text"
                        placeholder="URL da Foto"
                        name="foto"
                        required
                        className="w-full border border-black  rounded-lg py-2 dark:border-gray-600 px-2"
                        value={usuario.foto}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                    />
                </div>
                <div>
                    <label htmlFor="senha" >Senha</label>
                    <input
                        type="password"
                        id="senha"
                        name="senha"
                        placeholder="Senha"
                        className="w-full border border-black  rounded-lg py-2 dark:border-gray-600 px-2"
                        value={usuario.senha}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                    />
                </div>

                <button
                    type='submit'
                    className='rounded disabled:bg-slate-200 bg-indigo-400 hover:bg-indigo-800 text-white font-bold w-1/2 mx-auto py-2 flex justify-center'
                >
                    {isLoading ?
                        <RotatingLines
                            strokeColor="white"
                            strokeWidth="5"
                            animationDuration="0.75"
                            width="24"
                            visible={true}
                        /> :
                        <span>Atualizar</span>
                    }
                </button>
            </form>
        </div>
    );
}
export default AtualizarPerfil;