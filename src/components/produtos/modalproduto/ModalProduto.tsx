
import 'reactjs-popup/dist/index.css';
import FormProduto from '../formproduto/FormProduto';
import './ModalProduto.css';
import Popup from 'reactjs-popup';

function ModalProduto() {
    return (
        <>
            <Popup
                trigger={
                    <button 
                        className='border rounded px-4 py-2 text-red-700 border-red-700 hover:bg-red-600 hover:text-white'>
                        Novo Produto
                    </button>
                }
                modal
            >
                <FormProduto />
            </Popup>
        </>
    );
}

export default ModalProduto;