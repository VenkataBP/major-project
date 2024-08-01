import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Footer from './footer'

// Slider Component
const SimpleSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "linear"
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div>
          <center style={{ marginTop: "20px" }}>
            <img src="https://symphonyevents.com.au/wp-content/uploads/2023/07/1111.png" width="100%" height="600px" alt="Slide 1" />
          </center>
        </div>
        <div>
          <center>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGc7dFgoS9DuiQKknWzhMuXYcNdSHEqovSMQ&usqp=CAU" width="100%" height="600px" alt="Slide 2" style={{ marginTop: "20px" }} />
          </center>
        </div>
        <div>
          <center style={{ marginTop: "20px" }}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBJ8GANS2qGO2_U4LcMByFiocjHI20o0Z36g&usqp=CAU" width="100%" height="600px" alt="Slide 3" />
          </center>
        </div>
        <div>
          <center style={{ marginTop: "20px" }}>
            <img src="https://images.herzindagi.info/image/2024/Apr/Party-Wear-Dress.jpg" width="100%" height="600px" alt="Slide 4" />
          </center>
        </div>
        <div>
          <center style={{ marginTop: "20px" }}>
            <img src="https://d1pdzcnm6xgxlz.cloudfront.net/tops/8905875135692-18.jpg" width="100%" height="600px" alt="Slide 5" />
          </center>
        </div>
      </Slider>
    </div>
  );
};

// DecorCard Component
const DecorCard = ({ decor }) => {
  if (!decor) {
    return null;
  }

  const { thumbnailImage, brand, price, stars } = decor;

  return (
    <div className="col-md-3 mb-4">
      <div className="card h-100">
        <img
          style={{ width: '100%', height: '400px', objectFit: 'cover' }}
          src={thumbnailImage || 'https://via.placeholder.com/300'}
          className="card-img-top"
          alt="Decor"
        />
        <div className="card-body d-flex flex-column">
          <p className="card-text"><strong>Category:</strong> {brand}</p>
          <p className="card-text"><strong>Price:</strong> {price ? `${price.value} ${price.currency}` : 'N/A'}</p>
          <p className="card-text"><strong>Stars:</strong> {stars ?? '4.0'}</p>
        </div>
      </div>
    </div>
  );
};

// Additional images data
const additionalImages = [
  {
    thumbnailImage: "https://images.jdmagicbox.com/quickquotes/images_main/-6ift1l31.jpg",
    brand: "Traditional Wear",
    price: { value: "1000", currency: "INR" },
    stars: "4.0"
  },
  {
    thumbnailImage: "https://www.textileexport.in/media/mceu_90832377621712658471005.jpg",
    brand: "Traditional Wear",
    price: { value: "1200", currency: "INR" },
    stars: "4.0"
  },
  {
    thumbnailImage: "https://static3.azafashions.com/tr:w-450/uploads/product_gallery/1-0785655001669981387.jpg",
    brand: "Traditional Wear",
    price: { value: "1100", currency: "INR" },
    stars: "4.0"
  },
  {
    thumbnailImage: "https://i.pinimg.com/originals/24/72/68/2472687ca7fccb9b0634d94626a00eb9.jpg",
    brand: "Traditional Wear",
    price: { value: "1300", currency: "INR" },
    stars: "4.0"
  },
  {
    thumbnailImage: "https://m.media-amazon.com/images/I/71RGvUo4hJL._AC_UY1100_.jpg",
    brand: "Modern Dress",
    price: { value: "2000", currency: "INR" },
    stars: "4.0"
  },
  {
    thumbnailImage: "https://i.pinimg.com/236x/24/31/af/2431af7572a3f1b852c4526b757348c7.jpg",
    brand: "Modern Dress",
    price: { value: "2200", currency: "INR" },
    stars: "4.0"
  },
  {
    thumbnailImage: "https://i.pinimg.com/originals/d6/38/ac/d638ac5ca0fd336eacc1d3d6e470fe9e.jpg",
    brand: "Modern Dress",
    price: { value: "2100", currency: "INR" },
    stars: "4.0"
  },
  {
    thumbnailImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQY5A97GauRQTCiAmEt-uUoEKf62pE8gcOTtw&s",
    brand: "Modern Dress",
    price: { value: "2300", currency: "INR" },
    stars: "4.0"
  },
  {
    thumbnailImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQxImkQaAKnby6GE2-atVSzZeE7GV5VRNDnA&s",
    brand: "Women Footwear",
    price: { value: "500", currency: "INR" },
    stars: "4.0"
  },
  {
    thumbnailImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfQ-XURfEsfv1nFeSCsdMt6My___mUP0ku5g&s",
    brand: "Women Footwear",
    price: { value: "700", currency: "INR" },
    stars: "4.0"
  },
  {
    thumbnailImage: "https://m.media-amazon.com/images/I/61Gz4kGHLyL._AC_SL1500_.jpg",
    brand: "Women Footwear",
    price: { value: "600", currency: "INR" },
    stars: "4.0"
  },
  {
    thumbnailImage: "https://m.media-amazon.com/images/I/71R-AcK0ZGL._AC_UY1000_.jpg",
    brand: "Women Footwear",
    price: { value: "800", currency: "INR" },
    stars: "4.0"
  },
  {
    thumbnailImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzCdet01ZzcGstaGdjTTsul6ofymlOLCaGbw&s",
    brand: "Beauty Products",
    price: { value: "300", currency: "INR" },
    stars: "4.0"
  },
  {
    thumbnailImage: "https://media6.ppl-media.com/mediafiles/blogs/Best_Perfume_For_Women_5d7618496e.PNG",
    brand: "Beauty Products",
    price: { value: "500", currency: "INR" },
    stars: "4.0"
  },
  {
    thumbnailImage: "https://www.inspiringmeme.com/wp-content/uploads/2024/06/woman-applying-hair-oil.jpeg",
    brand: "Beauty Products",
    price: { value: "400", currency: "INR" },
    stars: "4.0"
  },
  {
    thumbnailImage: "https://m.media-amazon.com/images/I/61iRhQdhBmL._AC_UY1000_.jpg",
    brand: "Beauty Products",
    price: { value: "600", currency: "INR" },
    stars: "4.0"
  }
];

// DecorList Component
const DecorList = () => {
  const [decorProducts, setDecorProducts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://api.apify.com/v2/datasets/YzpYQfFb9vGnpysmL/items?clean=true&format=json')
      .then(response => response.json())
      .then(data => {
        console.log('API Response:', data);
        setDecorProducts(data || []);
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
      <SimpleSlider />
      <div className="row mt-4">
        {additionalImages.map((decor, index) => (
          <DecorCard key={index} decor={decor} />
        ))}
      </div>
      <div className="row mt-4">
        {Array.isArray(decorProducts) && decorProducts.length > 0 ? (
          decorProducts.map(decor => (
            <DecorCard key={decor.id} decor={decor} />
          ))
        ) : (
          <p>No products available</p>
        )}
      </div>
      <Footer/>
    </div>
  );
};

export default DecorList;
