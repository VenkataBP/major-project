import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from './footer'

function SimpleSlider() {
  const [apiData, setApiData] = useState([]);
  const [error, setError] = useState(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  const sliderItems = [
    {
      name: "Elegant Living Room",
      price: "₹500",
      rating: 4.5,
      img: "https://i.pinimg.com/originals/34/de/4d/34de4d139b895173728fb76483451560.jpg"
    },
    {
      name: "Modern Decor",
      price: "₹300",
      rating: 4.2,
      img: "https://www.picsy.in/images/contentimages/images/Featured_blog_139.jpg"
    },
    {
      name: "Stylish Interior",
      price: "₹450",
      rating: 4.8,
      img: "https://fibercaredallas.com/wp-content/uploads/2017/07/Scout-Design-Studio-Dallas.jpg"
    },
    {
      name: "White & Blue Interior",
      price: "₹400",
      rating: 4.1,
      img: "https://kshomedecor.com/wp-content/uploads/2015/12/ws_White__Blue_Interior_1920x1080.jpg"
    },
    {
      name: "Classic Decor",
      price: "₹350",
      rating: 4.6,
      img: "https://i.ytimg.com/vi/lfAAx7eF6qw/maxresdefault.jpg"
    }
  ];

  const products = [
    {
      category: "Kitchen Items",
      items: [
        {
          name: "Modern Kitchen",
          price: "₹600",
          rating: 4.5,
          img: "https://images.pexels.com/photos/8629107/pexels-photo-8629107.jpeg"
        },
        {
          name: "Ovens",
          price: "₹200",
          rating: 4.3,
          img: "https://www.ikea.com/in/en/range-categorisation/images/ovens-20810.jpeg"
        },
        {
          name: "Kitchen Decor",
          price: "₹250",
          rating: 4.2,
          img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_eSdrnBB57tYjWWU8ib_SBwHHt2LeL4F4Pg&s"
        },
        {
          name: "Luxury Kitchen",
          price: "₹700",
          rating: 4.7,
          img: "https://3dbrute.com/wp-content/uploads/full/2023/03/f477.jpg"
        }
      ]
    },
    {
      category: "Home Furniture",
      items: [
        {
          name: "Comfortable Sofa",
          price: "₹800",
          rating: 4.8,
          img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5ZfuiufIPAm58qiouBoHFaPriMxYeDsCStw&s"
        },
        {
          name: "Modern Table",
          price: "₹150",
          rating: 4.1,
          img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmcOhekGHkwooAeRm8xlf0ZoRoDUMQYBN1yg&s"
        },
        {
          name: "Stylish Chair",
          price: "₹100",
          rating: 4.2,
          img: "https://m.media-amazon.com/images/I/71sR9n6B9iL._AC_UF350,350_QL50_.jpg"
        },
        {
          name: "Elegant Bed",
          price: "₹1200",
          rating: 4.9,
          img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaRPGqCFZ4C58AbCja45R0NWLTtzSIseOQIYnF14A9USC77iaRx_qN8mT0Co7cOW5DFYg&usqp=CAU"
        }
      ]
    }
  ];

  useEffect(() => {
    fetch("https://api.apify.com/v2/datasets/3SMCknkYWeSl8gQO6/items?clean=true&format=json")
      .then(response => response.json())
      .then(data => {
        setApiData(data.slice(10, 50) || []); // Limit to items from 10th to 50th
      })
      .catch(error => {
        console.error("Error fetching data:", error);
        setError("Failed to fetch products"); // Provide a more user-friendly error message
      });
  }, []);

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(<span key={i}>&#9733;</span>); // Filled star
      } else {
        stars.push(<span key={i}>&#9734;</span>); // Empty star
      }
    }
    return stars;
  };

  return (
    <div className="container mt-5">
      <Slider {...settings}>
        {sliderItems.map((item, index) => (
          <div key={index} className="slider-item">
            <img src={item.img} alt={item.name} className="slider-img" />
            <div className="slider-info">
              <h2>{item.name}</h2>
              <p>{item.price}</p>
              <p>Rating: {renderStars(item.rating)}</p>
            </div>
          </div>
        ))}
      </Slider>
      <div className="mt-5">
        <div className="row">
          {products.map((category, index) => (
            <div key={index} className="col-md-6 mb-4">
              <h3>{category.category}</h3>
              <div className="product-grid">
                {category.items.map((item, idx) => (
                  <div className="product-card" key={idx}>
                    <img src={item.img} alt={item.name} className="product-img" />
                    <div className="product-info">
                      <h5>{item.name}</h5>
                      <p>{item.price}</p>
                      <p>Rating: {renderStars(item.rating)}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-5">
        <div className="row">
          {apiData.map((decor, idx) => (
            <div className="col-md-3 mb-4" key={idx}>
              <div className="card h-100">
                <img src={decor.thumbnailImage} alt={decor.title} className="card-img-top" />
                <div className="card-body">
                  <h5 className="card-title">{decor.title}</h5>
                  <p className="card-text"><strong>Category:</strong> {decor.brand}</p>
                  <p className="card-text">
                    <strong>Price:</strong> {decor.price ? `${decor.price.value} ${decor.price.currency}` : 'N/A'}
                  </p>
                  <p className="card-text"><strong>Stars:</strong> {decor.stars ?? 'N/A'}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <style jsx>{`
        .slider-item {
          position: relative;
        }
        .slider-img {
          width: 100%;
          height: 600px;
          object-fit: cover;
        }
        .slider-info {
          position: absolute;
          bottom: 10px;
          left: 20px;
          background: rgba(0, 0, 0, 0.5);
          color: white;
          padding: 10px;
          border-radius: 5px;
        }
        .product-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 20px;
        }
        .product-card {
          border: 1px solid #ccc;
          border-radius: 8px;
          overflow: hidden;
          text-align: center;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }
        .product-img {
          width: 100%;
          height: 200px;
          object-fit: cover;
        }
        .product-info {
          padding: 15px;
        }
        .product-info h5 {
          margin: 0;
          font-size: 18px;
        }
        .product-info p {
          margin: 5px 0 0;
          font-size: 16px;
          color: #333;
        }
        .card {
          border: 1px solid #ccc;
          border-radius: 8px;
          overflow: hidden;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }
        .card-img-top {
          width: 100%;
          height: 200px;
          object-fit: cover;
        }
        .card-body {
          padding: 15px;
        }
      `}</style>
      <Footer/>
    </div>
  );
}

export default SimpleSlider;
