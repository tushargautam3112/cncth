import AllProducts from "../components/AllProducts";
import Carousel from "react-bootstrap/Carousel";
import { Helmet } from "react-helmet-async";

function HomeScreen() {
  return (
    <>
      <Helmet>
        <title>T-house</title>
      </Helmet>
      {/* <div className="mx-3"> */}
      {/* <Carousel className='carousel'>
        <Carousel.Item interval={5500}>
          <img
            className="d-block w-100 text-black"
            src="https://www.daysoftheyear.com/cdn-cgi/image/dpr=1%2Cf=auto%2Cfit=cover%2Cheight=444%2Cq=70%2Csharpen=1%2Cwidth=956/wp-content/uploads/cupcake-day.jpg"
            alt="Img"
          />
          <Carousel.Caption>
            <h3>Label for first slide</h3>
            <p>Sample Text for Image One</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={5500}>
          <img
            className="d-block w-100"
            src="https://unsplash.com/photos/4Cuz3ls1BCI/download?force=true&w=1920"
            alt="Img"
          />
          <Carousel.Caption>
            <h3>Label for second slide</h3>
            <p>Sample Text for Image Two</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={5500}>
          <img
            className="d-block w-100"
            src="https://unsplash.com/photos/LRIQuZyxKRM/download?force=true&w=1920"
            alt="Img"
          />
          <Carousel.Caption>
            <h3>Label for third slide</h3>
            <p>Sample Text for Image Two</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel> */}
      {/* <div className="spacer d-md-block d-none"/> */}
      <h1>Featured Items</h1>
      {/* </div> */}
      <AllProducts/>

    </>
  );
}
export default HomeScreen;
