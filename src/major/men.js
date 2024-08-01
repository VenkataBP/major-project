import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Footer from './footer'

// SimpleSlider Component
const SimpleSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <div className="slider-container" style={{ marginLeft: "1%",marginTop:"2%" }}>
      <Slider {...settings}>
        <div>
          <img src="https://traditionalethnicwear.wordpress.com/wp-content/uploads/2016/12/ethnic-wear-for-men.jpg" width="100%" height="600px" alt="Ethnic Wear" />
        </div>
        <div>
          <img src="https://www.samyakk.com/blog/wp-content/uploads/2024/01/0_F8o3zco0PhK-fa-k.jpg" width="100%" height="600px" alt="Fashion" />
        </div>
        <div>
          <img src="https://aeo.abfrl.in/blog/wp-content/uploads/2023/12/blog.jpg" width="100%" height="600px" alt="Blog" />
        </div>
        <div>
          <img src="https://mysticstudios.in/wp-content/uploads/2020/08/srilankan-destination-3.jpg" width="100%" height="600px" alt="Destination" />
        </div>
        <div>
          <img src="https://i.pinimg.com/736x/7f/37/ab/7f37abbc697c84170dd7631da0aa7030.jpg" width="100%" height="600px" alt="Design" />
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

  const { thumbnailImage, title, brand, price, stars } = decor;
  const placeholderImage = 'https://via.placeholder.com/300'; // Fallback image

  return (
    <div className="col-md-3 mb-4">
      <div className="card h-100">
        <img
          style={{ width: '100%', height: '350px', objectFit: 'cover' }}
          src={thumbnailImage || placeholderImage}
          className="card-img-top"
          alt={`${title} Poster`}
        />
        <div className="card-body d-flex flex-column">
          <p className="card-text"><strong>Category:</strong> {brand}</p>
          <p className="card-text">
            <strong>Price:</strong> {price ? `${price.value} ${price.currency}` : 'N/A'}
          </p>
          <p className="card-text"><strong>Stars:</strong> {stars ?? '4.0'}</p>
        </div>
      </div>
    </div>
  );
};

// ImageCard Component
const ImageCard = ({ src, alt, category, price, stars }) => (
  <div className="col-md-3 mb-4">
    <div className="card h-100">
      <img src={src} className="card-img-top" alt={alt} style={{ width: '100%', height: '350px', objectFit: 'cover' }} />
      <div className="card-body">
        <p className="card-text"><strong>Category:</strong> {category}</p>
        <p className="card-text"><strong>Price:</strong> {price}</p>
        <p className="card-text"><strong>Stars:</strong> {stars}</p>
      </div>
    </div>
  </div>
);

// DecorList Component
const DecorList = () => {
  const [decorProducts, setDecorProducts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://api.apify.com/v2/datasets/AThakGN7QzDZhvGAq/items?clean=true&format=json')
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
      {/* Include the SimpleSlider component */}
      <SimpleSlider />

      {/* Image Sections */}
      <div className="row mt-4">
        <ImageCard
          src="https://www.tasva.com/cdn/shop/products/TT29-Oct24398.jpg?v=1640691542&width=800"
          alt="Product 1"
          category="Ethnic Wear"
          price="N/A"
          stars="4.0"
        />
        <ImageCard
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREhDLpDC9NwYzz5vIQ3CV1GuhRNxM2PcnuOQ&usqp=CAU"
          alt="Product 2"
          category="Fashion"
          price="N/A"
          stars="4.0"
        />
        <ImageCard
          src="https://crossculturefashions.com/wp-content/uploads/2023/09/image-13-768x1024.png"
          alt="Product 3"
          category="Cross Culture"
          price="N/A"
          stars="4.0"
        />
        <ImageCard
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSwDA_p1t1-Q4YQlqbd72gLMaqlw3jZc71Iw&usqp=CAU"
          alt="Product 4"
          category="Ethnic Wear"
          price="N/A"
          stars="4.0"
        />
      </div>
      <div className="row mt-4">
        <ImageCard
          src="https://img.tatacliq.com/images/i15//437Wx649H/MP000000020468091_437Wx649H_202312160033051.jpeg"
          alt="Modern Wear 1"
          category="Modern Wear"
          price="N/A"
          stars="4.0"
        />
        <ImageCard
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTM6Zma2goumx3s1n4iuP3-T6cj3zkfSohM0g&s"
          alt="Modern Wear 2"
          category="Modern Wear"
          price="N/A"
          stars="4.0"
        />
        <ImageCard
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKTzZ_qU1UT3WYRPe0aLgDKVpVas5iLUna1g&s"
          alt="Modern Wear 3"
          category="Modern Wear"
          price="N/A"
          stars="4.0"
        />
        <ImageCard
          src="https://i.pinimg.com/736x/94/b6/36/94b636b7a3a19aa02076bcac1be7d84e.jpg"
          alt="Modern Wear 4"
          category="Modern Wear"
          price="N/A"
          stars="4.0"
        />
      </div>
      <div className="row mt-4">
        <ImageCard
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBIOfU_wAF-GzpFJ0psIKWJ6tKMKfDB2U-9w&usqp=CAU"
          alt="Foot Wear 1"
          category="Foot Wear"
          price="N/A"
          stars="4.0"
        />
        <ImageCard
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJQjTHNovV7iUaIKHbNjxKk4Ri1gjMmm2O_A&s"
          alt="Foot Wear 2"
          category="Foot Wear"
          price="N/A"
          stars="4.0"
        />
        <ImageCard
          src="https://images.meesho.com/images/products/319976544/9fkry_512.webp"
          alt="Foot Wear 3"
          category="Foot Wear"
          price="N/A"
          stars="4.0"
        />
        <ImageCard
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZl4KIGG0ArmcyAdPxPv1uTrHWuVkXq7Q_QA&s"
          alt="Foot Wear 4"
          category="Foot Wear"
          price="N/A"
          stars="4.0"
        />
      </div>
      <div className="row mt-4">
        <ImageCard
          src="https://m.media-amazon.com/images/I/717ekHOBJ5L._AC_UY350_.jpg"
          alt="Beauty Product 1"
          category="Men Beauty"
          price="N/A"
          stars="4.0"
        />
        <ImageCard
          src="https://images-static.nykaa.com/media/catalog/product/1/4/1406c26CALTO00000009_2.jpg?tr=w-500"
          alt="Beauty Product 2"
          category="Men Beauty"
          price="N/A"
          stars="4.0"
        />
        <ImageCard
          src="https://static.independent.co.uk/2022/03/14/09/mens%20moisturisers%20copy.jpg"
          alt="Beauty Product 3"
          category="Men Beauty"
          price="N/A"
          stars="4.0"
        />
        <ImageCard
          src="https://images.meesho.com/images/products/264378329/nu3yi_512.webp"
          alt="Beauty Product 4"
          category="Men Beauty"
          price="N/A"
          stars="4.0"
        />
      </div>

      {/* Decor Products */}
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
