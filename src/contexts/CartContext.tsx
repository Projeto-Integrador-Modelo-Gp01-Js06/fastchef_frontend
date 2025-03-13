import { createContext, ReactNode, useState } from "react";
import Produto from "../models/Produto";
import { ToastAlerta } from "../utils/ToastAlerta";
import { useNavigate } from "react-router-dom";

// Cria o tipo Items, como uma herança do tipo Produto
export interface Items extends Produto {
  quantidade: number;
}

// Define os Atributos, Estados e Funções que serão compartilhados pelo Contexto
interface CartContextProps {
  adicionarProduto: (produto: Produto) => void;
  adicionarItem: (id: number) => void;
  removerItem: (id: number) => void;
  limparCart: () => void;
  items: Items[];
  quantidadeItems: number;
  valorTotal: number;
}

interface CartProviderProps {
  children: ReactNode;
}

export const CartContext = createContext({} as CartContextProps);

export function CartProvider({ children }: CartProviderProps) {
  // Inicializa o Estado items, que armazenará os produtos adicionados no carrinho
  const [items, setItems] = useState<Items[]>([]);

  // Calcula o número total de itens no carrinho (quantidade acumulada)
  const quantidadeItems = items.reduce((acc, item) => acc + item.quantidade, 0);

  // Calcula o valor total da compra em Reais
  const valorTotal = items.reduce((acc, item) => acc + item.preco * item.quantidade, 0);

  // Função para adicionar produtos ao carrinho
  function adicionarProduto(produto: Produto) {
    // Localiza o produto no array items e guarda o índice
    const itemIndex = items.findIndex(item => item.id === produto.id);

    let quantidadeAtualizada = 1; // Começa com 1, pois é a primeira adição

    if (itemIndex !== -1) {
      // Produto já está no carrinho, aumenta a quantidade
      const novoCart = [...items];
      novoCart[itemIndex].quantidade += 1;
      quantidadeAtualizada = novoCart[itemIndex].quantidade; // Obtém a nova quantidade do produto clicado
      setItems(novoCart);
    } else {
      // Produto não está no carrinho, adiciona novo item com quantidade 1
      setItems(itensAtuais => [...itensAtuais, { ...produto, quantidade: 1 }]);
    }

    // Exibe um alerta com a quantidade específica do produto clicado
    ToastAlerta(`${quantidadeAtualizada} ${produto.nome} adicionados ao carrinho!`, "info");
  }

  // Função para adicionar item ao carrinho (incrementa a quantidade)
  function adicionarItem(id: number) {
    // Localiza o produto no array items e guarda o índice
    const itemIndex = items.findIndex(item => item.id === id);

    if (itemIndex !== -1) {
      const novoCart = [...items];
      novoCart[itemIndex].quantidade += 1;
      setItems(novoCart);
      // Exibe a quantidade atualizada após adicionar
      ToastAlerta(`${novoCart[itemIndex].quantidade} item(s) adicionado(s) ao carrinho!`, "info");
    } else {
      ToastAlerta(`Produto não encontrado no carrinho!`, "erro");
    }
  }

  // Função para remover produtos do carrinho (reduz a quantidade ou remove)
  function removerItem(id: number) {
    // Localiza o produto no array items e guarda o índice
    const itemIndex = items.findIndex(item => item.id === id);

    if (itemIndex !== -1) {
      const novoCart = [...items];

      if (novoCart[itemIndex].quantidade > 1) {
        // Reduz a quantidade do produto
        novoCart[itemIndex].quantidade -= 1;
        setItems(novoCart);
        // Exibe a quantidade restante após a remoção
        ToastAlerta(`${novoCart[itemIndex].quantidade} item(s) restante(s) no carrinho!`, "info");
      } else {
        // Remove o produto se a quantidade for 1
        novoCart.splice(itemIndex, 1);
        setItems(novoCart);
        ToastAlerta(`Produto removido do carrinho!`, "info");
      }
    }
  }

  // Função para limpar o carrinho
  function limparCart() {
    ToastAlerta("Compra efetuada com sucesso!", "sucesso");
    setItems([]);
  }

  return (
    <CartContext.Provider
      value={{
        adicionarProduto,
        adicionarItem,
        removerItem,
        limparCart,
        items,
        quantidadeItems,
        valorTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
