import AllProducts from "../components/AllProducts";
import Carousel from "react-bootstrap/Carousel";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

function HomeScreen() {
  return (
    <>
      <Helmet>
        <title>T-house</title>
      </Helmet>
      <div className="vw-100 position-absolute top-0 start-0">
        <div className="position-absolute w-100 carousel-gradient bottom-0" />
        <Carousel className='carousel'>

          <Carousel.Item interval={5500}>
            <Link to='/search?category=Cakes&query=all&price=all&rating=all&order=newest&page=1'>
              <img
                className="d-block w-100 text-black"
                src="/images/Car11.jpg"
                alt="Img"
              />
            </Link>
            <Link to='/search?category=Cakes&query=all&price=all&rating=all&order=newest&page=1'>
            <Carousel.Caption>
              <h3>New Rainbow Treats, Explore now</h3>
              <p>Our Very new collection of Cup Cakes</p>
            </Carousel.Caption>
          </Link>
        </Carousel.Item>


        <Carousel.Item interval={5500}>
          <Link to='/product/black-tea'>
            <img
              className="d-block w-100"
              src="/images/car3.jpg"
              alt="Img"
            />
          </Link>
          <Link to='/product/black-tea'>
            <Carousel.Caption>
              <h3>Flat 20% off on Premium Tea... order now.</h3>
              <p>Terms and conditions apply.</p>
            </Carousel.Caption>
          </Link>
        </Carousel.Item>


        <Carousel.Item interval={5500}>
          <Link to='/product/birthday-cake'>
            <img
              className="d-block w-100"
              src="/images/car2.jpg"
              alt="Img"
            />
          </Link>
          <Link to='/product/birthday-cake'>
            <Carousel.Caption>
              <h3>Happy Birthday to You.. </h3>
              <p>50% off on all the Birthday Cakes..</p>
            </Carousel.Caption>
          </Link>
        </Carousel.Item>

      </Carousel>

    </div >
      <div className="homespacer" />
      <h2 className="mx-3">Featured Items</h2>
      <AllProducts />

    </>
  );
}
export default HomeScreen;
