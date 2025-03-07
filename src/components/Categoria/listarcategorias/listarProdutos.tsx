import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Produto from '../../../models/Produto'
import { listar } from '../../../services/Service'

function ListarProdutos() {
    const { id } = useParams<{ id: string }>()
    const [produtos, setProdutos] = useState<Produto[]>([])

    async function buscarProdutos() {
        try {
            console.log(`Buscando produtos da categoria ${id}...`)
            await listar(`/categoria/${id}/produtos`, setProdutos)
            console.log("Produtos encontrados:", produtos)
        } catch (err) {
            console.error("Erro ao buscar produtos:", err)
        }
    }

    useEffect(() => {
        buscarProdutos()
    }, [id])

    return (
        <div className="rounded-lg p-4 bg-[#fa7777] w-full my-4">
            <h2 className="text-3xl font-bold text-center text-white mb-6">PRODUTOS</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {produtos.map((produto) => (
                    <div key={produto.id} className='border rounded-xl p-4 shadow-lg bg-white'>
                        <p className='text-2xl font-semibold text-gray-800'>{produto.nome}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ListarProdutos