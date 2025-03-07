import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import AtualizarPerfil from '../atualizarperfil/AtualizarPerfil';
import './ModalPerfil.css';
import { Pencil } from '@phosphor-icons/react/dist/ssr';

function ModalPerfil() {
    return (
        <>
            <Popup
                trigger={
                    <Pencil size={32} />
                }
                modal
            >
                <AtualizarPerfil />
            </Popup>
        </>
    );
}

export default ModalPerfil;