import { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import AuthContext from '../../contexts/AuthContext';
import { ToastAlerta } from '../../utils/ToastAlerta';
import ModalPerfil from './modalperfil/ModalPerfil'


function Perfil() {

    const navigate = useNavigate()

    const { usuario } = useContext(AuthContext)

    useEffect(() => {
        if (usuario.token === "") {
            ToastAlerta('Você precisa estar logado', 'info')
            navigate("/")
        }
    }, [usuario.token])

    return (
        <div className='container mx-auto  rounded-2xl overflow-hidden pt-20'>

            <img
                className='w-full h-72 object-cover border-b-8 border-white rounded-t-3xl'
                src="https://ik.imagekit.io/a210gfzra/FastChef/1159027_ORFF0J0.jpg?updatedAt=1741268676916" alt="Capa do Perfil" />

            <img
                className='rounded-full w-56 mx-auto mt-[-8rem] border-8 border-white relative z-10'
                src={usuario.foto} alt={`Foto de perfil de ${usuario.nome}`} />


            <div
                className="relative mt-[-6rem] h-72 flex flex-col 
                    bg-red-500 text-white text-2xl items-center justify-center rounded-b-3xl"
            >
                <div className="relative mt-14 cursor-pointer duration-300 hover:scale-110">
                    <ModalPerfil />
                </div>
                <div className='flex flex-col mt-4 items-center'>
                    <p>Nome: {usuario.nome} </p>
                    <p>Email: {usuario.usuario}</p>
                </div>

            </div>

        </div>
    )
}

export default Perfil