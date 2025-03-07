const ComoFazerPedido = () => {
    return (
      <section className="text-center py-10">
        <h2 className="text-3xl font-bold mb-4">Como fazer um pedido?</h2>
        <p className="bg-verde text-black px-4 py-2 inline-block rounded-md mb-6">
          Siga o passo a passo:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 px-6 md:px-20">
          <div className="flex flex-col items-center">
            <img src="https://i.ibb.co/Vpj01vM8/Fast-Chef-7.png" alt="Pesquisar pela refeição" className="w-50 h-50" />
            <span className="text-xl font-bold mt-2">01</span>
            <p>Pesquisar pela refeição</p>
          </div>
          <div className="flex flex-col items-center">
            <img src="https://i.ibb.co/Gf8WG0fP/FastChef.png" alt="Adicionar ao carrinho" className="w-50 h-50" />
            <span className="text-xl font-bold mt-2">02</span>
            <p>Adicionar ao carrinho</p>
          </div>
          <div className="flex flex-col items-center">
            <img src="https://i.ibb.co/svDdkRDR/Fast-Chef-5.png" alt="Escolher a forma de pagamento" className="w-50 h-50" />
            <span className="text-xl font-bold mt-2">03</span>
            <p>Escolher a forma de pagamento</p>
          </div>
          <div className="flex flex-col items-center">
            <img src="https://i.ibb.co/0pBhDwhf/Fast-Chef-6.png" alt="Efetuar pagamento" className="w-50 h-50" />
            <span className="text-xl font-bold mt-2">04</span>
            <p>Efetuar pagamento</p>
          </div>
        </div>
      </section>
    );
  };
  
  export default ComoFazerPedido;
  