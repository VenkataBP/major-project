import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import 'bootstrap/dist/css/bootstrap.min.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from './footer'
const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};


const DecorCard = ({ image, title, category }) => {
  return (
    <div className="col-md-3 mb-3">
      <div className="card" style={{ width: '350px', height: '500px', margin: '10px' }}>
        <img src={image} className="card-img-top" style={{ height: '350px', objectFit: 'cover', marginBottom: '10px' }} alt={title} />
        <div className="card-body" style={{ height: '150px' }}>
          <p className="card-text" style={{ marginBottom: '0' }}><strong>{category}</strong></p>
          <p className="card-text"><strong>Title:</strong> {title || 'N/A'}</p>
        </div>
      </div>
    </div>
  );
};

const SimpleSlider = () => {
  const [decorProducts, setDecorProducts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://api.apify.com/v2/datasets/tPBhaopAbrETSZMQO/items?clean=true&format=json')
      .then(response => response.json())
      .then(data => {
        console.log('API Response:', data); 
        setDecorProducts(data.slice(5, 50) || []); 
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setError('Failed to fetch products'); 
      });
  }, []);

  if (error) {
    return <p>{error}</p>; 
  }

  return (
    <div className="container">
      <div className="slider-container">
        <Slider {...sliderSettings}>
          <div>
            <img src="https://img.freepik.com/premium-photo/funny-fashionable-child-with-shopping-bags-fashion-child-sh_265223-91422.jpg" width={"100%"} height={"600px"} alt="" />
          </div>
          <div>
            <img src="https://www.shutterstock.com/image-photo/cute-little-girl-on-shopping-260nw-338775371.jpg" width={"100%"} height={"600px"} alt="" />
          </div>
          <div>
            <img src="https://www.shutterstock.com/image-photo/two-cute-african-girls-shopping-260nw-560038300.jpg" width={"100%"} height={"600px"} alt="" />
          </div>
          <div>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJwFvSxKOqttp4YfmxkQcfbqMywRRk3qDnZA&s" width={"100%"} height={"600px"} alt="" />
          </div>
          <div>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZbkQQX5ehjV5sqd53VD6LiiWvACIbWpM2vA&usqp=CAU" width={"100%"} height={"600px"} alt="" />
          </div>
        </Slider>
      </div>

    
      <div className="row" style={{ marginTop: "20px" }}>
        <h2 style={{ width: "100%", textAlign: "center" }}>Kids Wear</h2>
        <div className="col-md-3 mb-3">
          <DecorCard
            image="https://img.faballey.com/images/Product/IGS00445Z/d3.jpg"
            title="Kids Dress 1"
            category="Kids Wear"
          />
        </div>
        <div className="col-md-3 mb-3">
          <DecorCard
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRklxLqPDZ83kCW920Pv0L-OmqnFDuvPhonHgD-G7uYgKZ_IIsBtQxJYKhH4F9FvIsnK5E&usqp=CAU"
            title="Kids Dress 2"
            category="Kids Wear"
          />
        </div>
        <div className="col-md-3 mb-3">
          <DecorCard
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROB6kgQQdv_Q3XcUBst7_8OpnZLmSi_Ofm3A&s"
            title="Kids Dress 3"
            category="Kids Wear"
          />
        </div>
        <div className="col-md-3 mb-3">
          <DecorCard
            image="https://m.media-amazon.com/images/I/51g8jsyMLmL._AC_AC_SY350_QL15_.jpg"
            title="Kids Dress 4"
            category="Kids Wear"
          />
        </div>
      </div>

      <div className="row" style={{ marginTop: "20px" }}>
        <h2 style={{ width: "100%", textAlign: "center" }}>Boys Wear</h2>
        <div className="col-md-3 mb-3">
          <DecorCard
            image="https://i.pinimg.com/474x/fe/2f/01/fe2f0102a8ba301bf9740b5ee7d8e6e2.jpg"
            title="Boys Dress 1"
            category="Boys Wear"
          />
        </div>
        <div className="col-md-3 mb-3">
          <DecorCard
            image="https://i.pinimg.com/736x/ff/46/d7/ff46d73e5c9fb9810c970f0a8ffb1713.jpg"
            title="Boys Dress 2"
            category="Boys Wear"
          />
        </div>
        <div className="col-md-3 mb-3">
          <DecorCard
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVnlJ132ozaYaDnCz47x6DFsgOcPNEP4K3vQ&usqp=CAU"
            title="Boys Dress 3"
            category="Boys Wear"
          />
        </div>
        <div className="col-md-3 mb-3">
          <DecorCard
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtgLBlCvY2McwSZlapFa_pclKwGJeUQ2fktw&usqp=CAU"
            title="Boys Dress 4"
            category="Boys Wear"
          />
        </div>
      </div>

      <div className="row" style={{ marginTop: "20px" }}>
        <h2 style={{ width: "100%", textAlign: "center" }}>Kids Toys</h2>
        <div className="col-md-3 mb-3">
          <DecorCard
            image="https://5.imimg.com/data5/IC/BH/MY-36541966/cute-pink-teddy-bear.jpeg"
            title="Toy 1"
            category="Kids Toys"
          />
        </div>
        <div className="col-md-3 mb-3">
          <DecorCard
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-AJDL4bUX0xpXmZYyvXEjQJnenisZtX5KWw&s"
            title="Toy 2"
            category="Kids Toys"
          />
        </div>
        <div className="col-md-3 mb-3">
          <DecorCard
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXs5mNbd07Q8OZKggIeUuLfRa-ddFjS94u9g&s"
            title="Toy 3"
            category="Kids Toys"
          />
        </div>
        <div className="col-md-3 mb-3">
          <DecorCard
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsDSEslapQunejs5Ot9qPYu6kS6PcSvRBo-g&s"
            title="Toy 4"
            category="Kids Toys"
          />
        </div>
      </div>

      <div className="row" style={{ marginTop: "20px" }}>
        <h2 style={{ width: "100%", textAlign: "center" }}>Kids Things</h2>
        <div className="col-md-3 mb-3">
          <DecorCard
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrqoQ4jsIJqMZ1JOhfFdrmRmq-QvqNxcIWbg&s"
            title="Thing 1"
            category="Kids Things"
          />
        </div>
        <div className="col-md-3 mb-3">
          <DecorCard
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkxDVyU8bdvOOjnD_Ssx30x4HETGu_TtR4cQ&s"
            title="Thing 2"
            category="Kids Things"
          />
        </div>
        <div className="col-md-3 mb-3">
          <DecorCard
            image="https://m.media-amazon.com/images/I/81SppOoztpL.jpg"
            title="Thing 3"
            category="Kids Things"
          />
        </div>
        <div className="col-md-3 mb-3">
          <DecorCard
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGU29oVt-7lNJ9yNf8K6H4frm1hGHcmg9gPA&s"
            title="Thing 4"
            category="Kids Things"
          />
        </div>
      </div>

      <div className="row" style={{ marginTop: "20px" }}>
        {Array.isArray(decorProducts) && decorProducts.length > 0 ? (
          decorProducts.map(decor => (
            <DecorCard
              key={decor.id}
              image={decor.thumbnailImage}
              title={decor.title}
              category={decor.brand}
            />
          ))
        ) : (
          <p>No products available</p>
        )}
      </div>
      <Footer/>
    </div>
  );
};

export default SimpleSlider;
