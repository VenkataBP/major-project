import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Footer from './footer'

const imageUrls = [
  'https://housing.com/news/wp-content/uploads/2023/03/Revitalise-your-space-A-guide-to-salon-interior-design-03.jpg',
  'https://c8.alamy.com/comp/KFF0MH/american-crew-grooming-products-for-men-KFF0MH.jpg',
  'https://cdn.nourishedlife.com.au/images/large/article_255569.jpg',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZz4HRN0023Zd3Drn6XO8egw3SOEnhJP8uTA&s',
  '	https://miro.medium.com/v2/resize:fit:1220/1*n8_CrowIUE_XkEcx6BbiJg.jpeg'
];

const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1
};

const imgStyle = {
  width: '100%',
  margin: '0 auto',
  height:"600px",
  marginTop:"3%"
};

const DecorCard = ({ decor }) => {
  if (!decor) {
    return null;
  }

  const { thumbnailImage, title, brand, price, stars } = decor;

  return (
    <div className="col-md-3 mb-3">
      <div className="card h-100">
        <img src={thumbnailImage} className="card-img-top fixed-img" alt={`${title} Poster`} />
        <div className="card-body d-flex flex-column">
          <p className="card-text"><strong>Category:</strong> {brand}</p>
          <p className="card-text">
            <strong>Price:</strong> {price ? `${price.value} ${price.currency}` : 'N/A'}
          </p>
          <p className="card-text"><strong>Stars:</strong> {stars ?? 'N/A'}</p>
        </div>
      </div>
    </div>
  );
};

const DecorList = () => {
  const [decorProducts, setDecorProducts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://api.apify.com/v2/datasets/HaVrCgafugs4yQUR1/items?clean=true&format=json')
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
      <Slider {...sliderSettings}>
        {imageUrls.map((url, index) => (
          <div key={index}>
            <img style={imgStyle} src={url} alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </Slider>

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
