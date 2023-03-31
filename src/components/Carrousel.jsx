import Carousel from "react-bootstrap/Carousel";

function Carrousel() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://autotest.com.ar/wp-content/uploads/2021/07/CHEVROLET-CRUZE-SPORT6-PORTADA.jpg"
          alt="First slide"
        />
        <Carousel.Caption className="text-left">
          <h3>Chevrolet CRUZE</h3>
          <p>Siente La Fuerza de esta Bestia</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.clarin.com/img/2022/02/04/toyota-yaris-2022-con-cambios___jdcQ1E4c3_1200x630__1.jpg"
          alt="Second slide"
        />
        <Carousel.Caption className="text-left">
          <h3>Toyota Yaris</h3>
          <p>Todo lo que tu Familia necesita</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://fotos.perfil.com/2017/05/01/trim/1280/720/1-sandero-r.png"
          alt="Third slide"
        />
        <Carousel.Caption className="text-left">
          <h3>Renault Sandero Sports</h3>
          <p>Para salir fuera de lo comun el mejor...</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Carrousel;
