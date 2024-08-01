import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function SimpleSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const sectionStyles = {
    marginBottom: "20px",
  };

  const cardContainerStyles = {
    display: "flex",
    flexWrap: "wrap",
    gap: "15px",
    justifyContent: "space-between",
  };

  const cardStyles = {
    border: "1px solid #ddd",
    borderRadius: "8px",
    overflow: "hidden",
    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
    width: "24%",
    boxSizing: "border-box",
  };

  const imageDetails = {
    Mobiles: [
      {
        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjjKTXm74Dr0F02HY7GZ5eFfKoiBmvyyDY4Q&s",
        name: "Iphone",
        price: "₹100099",
        rating: "4.2/5"
      },
      {
        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEiKE4qSe8LSI-TmjZlWWMA8qeNN4zTmrGkQ&s",
        name: "Samsung",
        price: "₹50099",
        rating: "4.4/5"
      },
      {
        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRx1yQ-tEZECzjBqEsC1gxq4ewuU_iMkL7EGila79KrtxDhK6Pc9zfe-Fiwa_ZFb0Q9ZE8&usqp=CAU",
        name: "Oneplus",
        price: "₹50000",
        rating: "4.6/5"
      },
      {
        src: "https://www.sammobile.com/wp-content/uploads/2023/03/Galaxy-S23-Ultra-green.jpg",
        name: "Vivo",
        price: "₹80000",
        rating: "4.8/5"
      },
    ],
    Laptops: [
      {
        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrO4K9Q4EFdGb4oxBVrwOlPG0CHX5GPTe65Q&s",
        name: "Mac Book",
        price: "₹100000",
        rating: "4.5/5"
      },
      {
        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUzlxkDXwP7zplWBXhqP0T0RN4tqEJau2lYO7TCcZWkQBWAyuA6YRyjRJj_vsbe0XNxZ0&usqp=CAU",
        name: "Dell",
        price: "₹50000",
        rating: "4.4/5"
      },
      {
        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2Jf8xip_U7w8mvBkVuYMxuHXspXnYkLJUDA&s",
        name: "acer",
        price: "₹40000",
        rating: "4.6/5"
      },
      {
        src: "https://m.media-amazon.com/images/I/51dmljJV8OL._AC_UF350,350_QL80_.jpg",
        name: "Hp",
        price: "₹50000",
        rating: "4.7/5"
      },
    ],
    Watches: [
      {
        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrrvRWDpRts3ffsdJKXCCqzfSaLNGc2Bxc5g&s",
        name: "Watch",
        price: "₹199",
        rating: "4.5/5"
      },
      {
        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyab38blcLp7ezbDaW7HLMrZt5B8G0jd-GvQ&s",
        name: "Smart Watch",
        price: "₹299",
        rating: "4.6/5"
      },
      {
        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSU3tNvxeFO2QY1MGLUXvMs1bF4qkryUrG5Lg&s",
        name: " Smart Watch",
        price: "₹399",
        rating: "4.7/5"
      },
      {
        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTifagElNOlVz71j2F0GoRy3Dg0HAvsnMGNTQ&s",
        name: "Watch",
        price: "₹499",
        rating: "4.8/5"
      },
    ],
    Tabs: [
      {
        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQliddK-Aun_Ipm9it_5whobA2V2lKJ0Yu_CU__vBta-Rh3LGy40Jep7AO9ICbjEcMv9lE&usqp=CAU",
        name: "Apple Tab",
        price: "₹20000",
        rating: "4.3/5"
      },
      {
        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7m8gN1gMYIsfDD9kvzd3jbbPD5eWrWWgsvg&s",
        name: "Samsung Tab ",
        price: "₹30000",
        rating: "4.4/5"
      },
      {
        src: "https://www.intelec.co.cr/image/cache/catalog/catalogo/Tablet/ZAAF0074PA-800x800w.jpg.webp",
        name: "Redmi Tab",
        price: "₹40000",
        rating: "4.6/5"
      },
      {
        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEb1ngruwB3v-hx0RlT-3vwohS-nCYvD1DNA&s",
        name: "Oneplus Tab ",
        price: "₹59000",
        rating: "4.7/5"
      },
    ],
  };

  return (
    <div style={{ width: "100%", padding: "20px" }}>
      {/* Slider */}
      <div style={{ marginBottom: "20px" }}>
        <Slider {...settings}>
          <div>
            <img
              src="https://img.freepik.com/premium-photo/ecommerce-apple-all-products-devices_862994-4605.jpg"
              width="100%"
              height="600px"
              alt="Slider Image 1"
            />
          </div>
          <div>
            <img
              src="https://www.buzzmeeh.com/images/16770688521672728995why-apple-products-hard-to-repair.png"
              width="100%"
              height="600px"
              alt="Slider Image 2"
            />
          </div>
          <div>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKODD4LTCYKpJTC5ET6TF2_F25yDHGJ6A-xg&s"
              width="100%"
              height="600px"
              alt="Slider Image 3"
            />
          </div>
          <div>
            <img
              src="https://i.ebayimg.com/thumbs/images/g/rfAAAOSwOQFkbJpv/s-l1200.jpg"
              width="100%"
              height="600px"
              alt="Slider Image 4"
            />
          </div>
          <div>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQMiQRRbr67sjsEMGcj8jcIzTHttpE_0CNFA&s"
              width="100%"
              height="600px"
              alt="Slider Image 5"
            />
          </div>
        </Slider>
      </div>

      {/* Sections */}
      <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
        {Object.entries(imageDetails).map(([title, images]) => (
          <Section
            key={title}
            title={title}
            images={images}
            sectionStyles={sectionStyles}
            cardContainerStyles={cardContainerStyles}
            cardStyles={cardStyles}
          />
        ))}
      </div>
    </div>
  );
}

// Component to render each section of images
const Section = ({ title, images, sectionStyles, cardContainerStyles, cardStyles }) => (
  <div style={sectionStyles}>
    <h1>{title}</h1>
    <div style={cardContainerStyles}>
      {images.map((item, index) => (
        <div style={cardStyles} key={index}>
          <img
            src={item.src}
            width="100%"
            height="200px"
            alt={`Card Image ${index + 1}`}
            style={{ objectFit: "cover" }}
          />
          <div style={{ padding: "10px" }}>
            <h3>{item.name}</h3>
            <p>{item.price}</p>
            <p>Rating: {item.rating}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default SimpleSlider;
