import { createContext, ReactNode, useEffect, useState } from "react";
import UsuarioLogin from "../models/UsuarioLogin";
import { login } from "../services/Service";
import { ToastAlerta } from "../utils/ToastAlerta";

interface AuthContextProps {
    usuario: UsuarioLogin;
    handleLogout(): void;
    handleLogin(usuario: UsuarioLogin): Promise<void>;
    isLoading: boolean;
    setUsuario: React.Dispatch<React.SetStateAction<UsuarioLogin>>;
}

interface AuthProviderProps {
    children: ReactNode;
}

export const AuthContext = createContext({} as AuthContextProps)

export function AuthProvider({ children }: AuthProviderProps) {

    const [usuario, setUsuario] = useState<UsuarioLogin>({

        id: 0,
        nome: '',
        usuario: '',
        senha: '',
        foto: '',
        admin: false,
        token: '',
    });

    const [isLoading, setIsLoading] = useState(false);

  

    async function handleLogin(usuarioLogin: UsuarioLogin) {

        setIsLoading(true);

        try {
            await login(`/usuarios/logar`, usuarioLogin, setUsuario);
            ToastAlerta("Usuário autenticado com sucesso!", "sucesso");
        } catch (error) {
            ToastAlerta("Dados do Usuário inconsistentes!", "erro");
        }

        setIsLoading(false);
    }

    function handleLogout() {
        setUsuario({
            id: 0,
            nome: '',
            usuario: '',
            senha: '',
            foto: '',
            admin: false,
            token: '',
        })
        localStorage.removeItem("usuario");
    }

    return (
        <AuthContext.Provider value={{ usuario, handleLogin, handleLogout, isLoading, setUsuario }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext;

