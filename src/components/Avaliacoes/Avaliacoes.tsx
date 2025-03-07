import Slider from "react-slick";

const avaliacaoData = [
  {
    id: 1,
    name: "Mariana A.",
    text: "O FastChef superou minhas expectativas! Os pratos são deliciosos e sempre fresquinhos. O delivery é rápido e eficiente, chegou na hora certa, e a experiência de pedir comida ficou ainda mais prática. Recomendo demais!",
    img: "https://i.ibb.co/WvnNKhWx/FastChef.png",
  },
  {
    id: 1,
    name: "Felipe S.",
    text: "A experiência com o FastChef foi excelente! A comida chegou rapidamente e estava super fresca, com sabores incríveis. O aplicativo é super fácil de usar e a entrega foi pontual. Vou pedir novamente com certeza!",
    img: "https://i.ibb.co/LDNch1Hf/Fast-Chef-1.png",
  },
  {
    id: 1,
    name: "Carlos M.",
    text: "A qualidade da comida do FastChef é incomparável! Cada refeição parece ter sido feita com muito carinho, e os ingredientes frescos fazem toda a diferença. O serviço de delivery é confiável e muito rápido. Com certeza, vou pedir mais vezes!",
    img: "https://i.ibb.co/v6wbKFMS/Fast-Chef-2.png",
  },
];

const Testimonial = () => {
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
  };
  return (
    <>
      <div data-aos="fade-up" data-aos-duration="300" className="py-10">
        <div className="container">
          <div className="text-center mb-20 max-w-[400px] mx-auto">
            <p className="text-sm bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-verde font-bold">
              Deixe sua avaliação
            </p>
            <h1 className="text-3xl font-bold">Avaliações</h1>
            <p className="text-xs text-gray-400">
            Veja o que nossos clientes estão dizendo!
            </p>
          </div>
          <div
            data-aos="zoom-in"
            data-aos-duration="300"
            className="grid grid-cols-1 max-w-[600px] mx-auto gap-5 mt-[-50px]"
          >
            <Slider {...settings}>
              {avaliacaoData.map((data) => {
                return (
                  <div className="my-3">
                    <div
                      key={data.id}
                      className="flex flex-col justify-center items-center gap-4 shadow-lg p-1 mx-4 rounded-xl dark:bg-gray-800 bg-gradient-to-r from-red-100 to-red-100 relative text-justify"
                    >
                      <img
                        className="rounded-full block mx-auto"
                        src={data.img}
                        alt=""
                      />
                      <p className="text-gray-500 text-sm">{data.text}</p>
                      <h1 className="text-xl font-bold">{data.name}</h1>
                      <p className="text-black/20 text-9xl font-serif absolute top-0 right-0">
                        ,,
                      </p>
                    </div>
                  </div>
                );
              })}
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
