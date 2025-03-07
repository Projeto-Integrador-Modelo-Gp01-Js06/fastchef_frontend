import Categoria from "./Categoria";
import Usuario from "./Usuario";

export default interface Produto {
    id: number;
    nome: string;
    preco: number;
    foto: string;
    calorias : number;
    gorduraSaturada: number;
    acucar: number;
    sodio: number;
    nutriScore:	string;

    usuario: Usuario | null ;
    categoria: Categoria | null;
}
