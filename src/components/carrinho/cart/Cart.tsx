import { useContext, useEffect } from 'react'
import { CartContext } from '../../../contexts/CartContext'
import CardCart from '../cardcart/CardCart'
import AuthContext from '../../../contexts/AuthContext'
import { ToastAlerta } from '../../../utils/ToastAlerta'
import { useNavigate } from 'react-router-dom'

function Cart() {
	const { items, quantidadeItems, valorTotal, limparCart } =
		useContext(CartContext);
	const { usuario } = useContext(AuthContext);
	const navigate = useNavigate();

	function finalizarCompra() {

		if (usuario.token === "") {
			ToastAlerta('Você precisa estar logado', 'info');
			navigate("/login");
			return;
		} else {
			ToastAlerta('Compra efetuada com sucesso!', 'sucesso');
			limparCart();
			navigate('/');
		}
	}

	return (
		<>
			<div
				className="
                bg-gray-200 
                flex 
                flex-col
                justify-center
				h-dvd
				dark:bg-gray-800
                "
			>
				<div className='p-6 text-center mt-12'>
				<h1 className="text-4xl font-bold text-center my-5 dark:text-white">
	🛒 CARRINHO DE COMPRAS  🛒
</h1>
<p className="text-xl bg-verde font-semibold text-black rounded-lg p-4 px-2 py-1 inline-block">
 Confira seus produtos e finalize sua compra! 
      </p>
	  </div>
				<h2 className="text-3xl font-semibold text-center my-10 dark:text-white ">
					{items.length === 0 ? 'O CARRINHO ESTÁ VAZIO!' : ''}
				</h2>

				<div
					className="container mx-auto grid grid-cols-1 
                            md:grid-cols-2 lg:grid-cols-5 gap-4 dark:text-black"
				>
					{items.map((produto) => (
						<CardCart key={produto.id} item={produto} />
					))}
				</div>

				{quantidadeItems > 0 && (
					<div className="container mx-auto my-2 py-10 w-[50vw] grid grid-cols-1 md:grid-cols-2 border rounded-lg bg-white text-lg dark:text-black mb-24">
					<div className="w-[full] flex flex-col  ">
						<h2 className="text-2xl text-center font-bold py-2 ">
							Resumo da Compra
						</h2>
						<p className="pb-2">
							<span className="font-semibold">
								Total de items adicionados:{' '}
							</span>
							{quantidadeItems}
						</p>
						<p>
							<span className="font-semibold">
								Subtotal:{' '}
							</span>
							{Intl.NumberFormat('pt-BR', {
								style: 'currency',
								currency: 'BRL',
							}).format(valorTotal)}
						</p>
						<p>
							<span className="font-semibold">
								Desconto:{' '}
							</span>
							{Intl.NumberFormat('pt-BR', {
								style: 'currency',
								currency: 'BRL',
							}).format(0.0)}
						</p>
						<p>
							<span className="font-semibold">Frete: </span>
							{Intl.NumberFormat('pt-BR', {
								style: 'currency',
								currency: 'BRL',
							}).format(0.0)}
						</p>
						<hr className="border-xl border-slate-800 py-2" />
						<p>
							<span className="font-semibold">Total: </span>
							{Intl.NumberFormat('pt-BR', {
								style: 'currency',
								currency: 'BRL',
							}).format(valorTotal)}
						</p>
					</div>
					<div className="flex justify-center items-center sm:justify-center">
						<button
							className="text-2xl font-semibold rounded text-slate-100  bg-[#44b063]
							hover:bg-verde w-1/2 py-2 mx-auto flex justify-center my-4 dark:text-black"
							type="submit"
							disabled={items.length === 0}
							onClick={finalizarCompra}
						>
							FINALIZAR COMPRA
						</button>
					</div>
				</div>
				
				)}
			</div>
		</>
	)
}

export default Cart
