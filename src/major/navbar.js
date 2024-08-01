import React, { useState } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Modal, Button, Form } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

const Nav = () => {
  const [showSlider, setShowSlider] = useState(true);
  const [showContent, setShowContent] = useState(true);
  const [showModal, setShowModal] = useState(false);

  const handleMenuClick = () => {
    setShowSlider(false);
    setShowContent(false);
  };

  const handleLoginClick = () => {
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 3000,
    cssEase: "linear",
  };
  
  return (
    <div>
      <nav className="nav-extended" style={{backgroundColor:"#130357"}}>
        <div className="nav-wrapper">
          <h3 className="brand-logo" style={{marginLeft:"10%",marginTop:"2%",color:"white",fontFamily:"Arial, Helvetica, sans-serif"}}>DIVISIMA</h3>
          <a href="#" data-target="mobile-demo" className="sidenav-trigger">
            <i className="material-icons">menu</i>
          </a>
          <form className="d-flex" role="search" style={{ marginLeft: "auto" }}>
            <input
              className="form-control me-2"
              style={{ width: "400px", backgroundColor: "white", height: "35px", marginLeft: "29%", marginTop: "2%",paddingLeft:"2%",borderRadius:"6px" }}
              type="search"
              placeholder="Search for products, brands and more"
              aria-label="Search"
            />
            <Button
              className="btn btn-outline-success"
              onClick={handleLoginClick}
              style={{ height: "35px", marginLeft: "0%", marginTop: "2%", color: "white" }}
            >
              Search
            </Button>
            <div className="d-flex align-items-center" style={{ marginLeft: "20px" }}>
              <Link to="/cart" style={{ display: "flex", alignItems: "center", marginRight: "20px" }}>
                <i className="bi bi-cart3" style={{ fontSize: "24px",marginLeft:"190%" }}></i>
                <p style={{ marginLeft: "10%", fontSize: "18px", margin: 0 }}>Cart</p>
              </Link>
              <Link to="/contact" style={{ display: "flex", alignItems: "center" }}>
                <i className="bi bi-person-lines-fill" style={{ fontSize: "24px",marginLeft:"150%" }}></i>
                <p style={{ marginLeft: "10%", fontSize: "18px",marginTop:"15%"}}>Contact</p>
              </Link>
              <Button
                className="btn btn-outline-info"
                onClick={handleLoginClick}
                style={{ height: "35px", marginLeft: "90%", marginTop: "2%",backgroundColor:"#326b21",color:"white" }}
              >
                Login
              </Button>
            </div>
          </form>
        </div>
        <div className="nav-content" style={{backgroundColor:"#c2135f",color:"#db2348", paddingLeft:"5%"}}>
          <ul className="tabs tabs-transparent">
            <li className="nav-item">
              <Link to="/Men" onClick={handleMenuClick}>Men</Link>
            </li>
            <li className="nav-item">
              <Link to="/Women" onClick={handleMenuClick}>Women</Link>
            </li>
            <li className="nav-item">
              <Link to="/Kids" onClick={handleMenuClick}>Kids</Link>
            </li>
            <li className="nav-item">
              <Link to="/Beauty" onClick={handleMenuClick}>Beauty</Link>
            </li>
            <li className="nav-item">
              <Link to="/Home" onClick={handleMenuClick}>Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/Electronics" onClick={handleMenuClick}>Electronics</Link>
            </li>
          </ul>
        </div>
      </nav>

      {showContent && showSlider && (
        <div className="slider-container">
          <Slider {...settings}>
            <div>
              <center style={{ marginTop: "20px" }}>
                <img
                  width="80%"
                  src="https://i.ytimg.com/vi/vUYEKvsFoCo/maxresdefault.jpg"
                />
              </center>
            </div>
            <div>
              <center>
                <img
                  src="https://www.organicandmore.com/wp-content/uploads/2020/07/9742-ok-1080x675.jpg"
                  width="60%"
                  style={{ marginTop: "20px" }}
                />
              </center>
            </div>
            <div>
              <center style={{ marginTop: "20px" }}>
                <img
                  src="https://img.freepik.com/premium-photo/indian-famil…-diwali-festival-diwali-background_714173-821.jpg"
                  width="60%"
                />
              </center>
            </div>
            <div>
              <center style={{ marginTop: "20px" }}>
                <img
                  src="https://www.menswearhouse.com/blog/wp-content/uploads/2023/03/MWSP23_LOC_GROUP_23_0501_sRGB-1.jpg"
                  width="60%"
                />
              </center>
            </div>
            <div>
              <center style={{ marginTop: "30px" }}>
                <img
                  src="https://i.ytimg.com/vi/PKdH3ZEqNlA/maxresdefault.jpg"
                  width="60%"
                />
              </center>
            </div>
          </Slider>
        </div>
      )}
      {showContent && (
        <>
          <div style={{ display: "flex" }}>
            <h1 style={{ marginLeft: "9%", marginTop: "2%",fontFamily:"Arial, Helvetica, sans-serif" }}>Mens Wear</h1>
            <div style={{ marginTop: "6%", marginLeft: "-18%" }}>
              <img src="https://www.tasva.com/cdn/shop/products/TT29-Oct24398.jpg?v=1640691542&width=800" width={"300px"} height={"300px"} alt="" />
            </div>
            <div style={{ marginLeft: "2%", marginTop: "6%" }}>
              <img src="https://www.suitsexpert.com/wp-content/uploads/grey-suit-black-dress-shirt-black-tassel-loafers.jpg" width={"300px"} height={"300px"} alt="" />
            </div>
            <div style={{ marginLeft: "2%", marginTop: "6%" }}>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTM6Zma2goumx3s1n4iuP3-T6cj3zkfSohM0g&s" width={"300px"} height={"300px"} alt="" />
            </div>
            <div style={{ marginLeft: "2%", marginTop: "6%" }}>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKTzZ_qU1UT3WYRPe0aLgDKVpVas5iLUna1g&s" width={"300px"} height={"300px"} alt="" />
            </div>
          </div>
          <div style={{ marginLeft: "5%", display: "flex" }}>
            <h1 style={{ marginLeft: "5%", marginTop: "2%",fontFamily:"Arial, Helvetica, sans-serif" }}>Womens Wear</h1>
            <div style={{ marginLeft: "-24%", marginTop: "6%" }}>
              <img src="https://www.textileexport.in/media/mceu_90832377621712658471005.jpg" width={"300px"} height={"300px"} alt="" />
            </div>
            <div style={{ marginLeft: "2%", marginTop: "6%", }}>
              <img src="https://m.media-amazon.com/images/I/71RGvUo4hJL._AC_UY1100_.jpg" width={"300px"} height={"300px"} alt="" />
            </div>
            <div style={{ marginLeft: "2%", marginTop: "6%" }}>
              <img src="https://d1pdzcnm6xgxlz.cloudfront.net/tops/8905875135692-18.jpg" width={"300px"} height={"300px"} alt="" />
            </div>
            <div style={{ marginLeft: "2%", marginTop: "6%" }}>
              <img src="https://images.jdmagicbox.com/quickquotes/images_main/-6ift1l31.jpg" width={"300px"} height={"300px"} alt="" />
            </div>
          </div>
          <div style={{marginLeft:"5%",display:"flex"}}>
          <h1 style={{marginLeft:"5%",fontFamily:"Arial, Helvetica, sans-serif"}}>Kids Wear</h1>
          <div style={{marginLeft:"-18%",marginTop:"6%"}}>
          <img src="https://img.freepik.com/premium-photo/funny-fashio…h-shopping-bags-fashion-child-sh_265223-91422.jpg" width={"300px"} height={"300px"} alt="" />
          </div>
          <div style={{marginLeft:"2%",marginTop:"6%"}}>
          <img src="https://www.shutterstock.com/image-photo/cute-little-girl-on-shopping-260nw-338775371.jpg" width={"300px"} height={"300px"} alt="" />
          </div>
          <div style={{marginLeft:"2%",marginTop:"6%"}}>
          <img src="https://www.shutterstock.com/image-photo/two-cute-african-girls-shopping-260nw-560038300.jpg" width={"300px"} height={"300px"} alt="" />
          </div>
          <div style={{marginLeft:"2%",marginTop:"6%"}}>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJwFvSxKOqttp4YfmxkQcfbqMywRRk3qDnZA&s" width={"300px"} height={"300px"} alt="" />
          </div>
          </div>
          <div style={{marginLeft:"5%",display:"flex"}}>
          <h1 style={{marginLeft:"5%",marginTop:"2%",fontFamily:"Arial, Helvetica, sans-serif"}}>Home Things</h1>
          <div style={{marginLeft:"-22%",marginTop:"6%"}}>
          <img src="https://images.livemint.com/img/2019/02/28/600x338/Samsung_1551376890063.jpg" width={"300px"} height={"300px"} alt="" srcset="" />
          </div>
          <div style={{marginLeft:"2%",marginTop:"6%"}}>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcDwXeyjuat-Z_c_ndgRmnd1qfw3C28LTZjA&s" alt="" width={"300px"} height={"300px"} srcset="" />
          </div>
          <div style={{marginLeft:"2%",marginTop:"6%"}}>
          <img src="	https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZW2iQNBFnQvAJZ7bTlKRPsRpOOIVmiVoDXg&s" width={"300px"} height={"300px"}  alt="" srcset="" />
          </div>
          <div style={{marginLeft:"2%",marginTop:"6%"}}>
          <img src="	https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWVKkbzZvmNGCu7Ft9hF4dWJtX4Jmb_9AxXw&s" width={"300px"} height={"300px"} alt="" srcset="" />
          </div>
      </div>
          <div style={{marginLeft:"5%",display:"flex"}}>
          <h1 style={{marginLeft:"5%",marginTop:"2%",fontFamily:"Arial, Helvetica, sans-serif"}}>Electronics</h1>
          <div style={{marginLeft:"-18%",marginTop:"6%"}}>
          <img src="https://www.shutterstock.com/image-photo/lahore-pakistan-may-13th-2021-600nw-1973343692.jpg" width={"300px"} height={"300px"} alt="" />
          </div>
          <div style={{marginLeft:"2%",marginTop:"6%"}}>
          <img src="https://technave.com/data/files/mall/article/202011120321309666.jpg" width={"300px"} height={"300px"} alt="" />
          </div>
          <div style={{marginLeft:"2%",marginTop:"6%"}}>
          <img src="https://assets.bwbx.io/images/users/iqjWHBFdfxIU/ilfQKymrPVus/v0/-1x-1.jpg" width={"300px"} height={"300px"} alt="" />
          </div>
          <div style={{marginLeft:"2%",marginTop:"6%"}}>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjnwMug5FyvGLhCsBkmx5-6bv2uK4pUxkMtg&s" width={"300px"} height={"300px"} alt="" />
          </div>
          </div>
          <div style={{marginLeft:"5%",display:"flex"}}>
          <h1 style={{marginLeft:"5%",marginTop:"2%",fontFamily:"Arial, Helvetica, sans-serif"}}>Foot Wears</h1>
          <div style={{marginLeft:"-19%",marginTop:"6%"}}>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBIOfU_wAF-GzpFJ0psIKWJ6tKMKfDB2U-9w&usqp=CAU" width={"300px"} height={"300px"} alt="" srcset="" />
          </div>
          <div style={{marginLeft:"2%",marginTop:"6%"}}>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfQ-XURfEsfv1nFeSCsdMt6My___mUP0ku5g&s" width={"300px"} height={"300px"} alt="" />
          </div>
          <div style={{marginLeft:"2%",marginTop:"6%"}}>
          <img src="https://images.meesho.com/images/products/319976544/9fkry_512.webp" width={"300px"} height={"300px"} alt="" />
          </div>
          <div style={{marginLeft:"2%",marginTop:"6%"}}>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZl4KIGG0ArmcyAdPxPv1uTrHWuVkXq7Q_QA&s" width={"300px"} height={"300px"} alt="" srcset="" />
          </div>
      </div>
      <div style={{width:"100%",height:"460px",backgroundColor:"#130357",marginTop:"5%"}}>
      <div style={{marginLeft:"13%",color:"white",paddingTop:"5%",display:"flex"}}>
      <div style={{display:"flex",flexDirection:"column",margin:"5px 0",color:"white"}}>
      <p href="">ABOUT</p>
      <a href="">Contact Us</a>
      <a href="">About Us</a>
      <a href="">Careers</a>
      <a href="">Flipkart Stories</a>
      <a href="">Press</a>
      <a href="">Corporate Information</a>
      </div>
      <div style={{display:"flex",flexDirection:"column",margin:"5px 0",color:"white",marginLeft:"3%"}}>
      <p>GROUP COMPANIES</p>
      <a href="">Myntra</a>
      <a href="">Cleartrip</a>
      <a href="">Shopsy</a>
      </div>
      <div style={{display:"flex",flexDirection:"column",margin:"5px 0",color:"white",marginLeft:"3%"}}>
      <p>HELP</p>
      <a href="">Payments</a>
      <a href="">Shipping</a>
      <a href="">Cancellation & Return</a>
      <a href="">FAQ</a>
      <a href="">Report Infringment</a>
      </div>
      <div style={{display:"flex",flexDirection:"column",margin:"5px 0",color:"white",marginLeft:"3%"}} >
      <p>CONSUMERS POLICY</p>
      <a href="">Cancellation & Return</a>
      <a href="">Terms of use</a>
      <a href="">Security</a>
      <a href="">Privacy</a>
      <a href="">Sitemap</a>
      <a href="">Grievance redressal</a>
      <a href="">EPR Compliance</a>
      </div>
      <div>
      <p style={{marginLeft:"18%"}}>Mail Us: <br />
      Flipkart Internet Private Limited,<br />
      Buildings Alyssa, Begonia & <br />
      Clove Embassy Tech Village,<br />
      Outer Ring Road, Devarabeesanahalli Village,<br />
      Bengaluru, 560103,<br />
      Karnataka, India</p>
      <p style={{marginLeft:"18%"}}>Social Media</p>
      </div>
      <div>
      <p>Registered Office Address:</p>
      <p>Flipkart Internet Private Limited,<br />
      Buildings Alyssa, Begonia &<br />
      Clove Embassy Tech Village,<br />
      Outer Ring Road, Devarabeesanahalli Village,<br />
      Bengaluru, 560103,<br />
      Karnataka, India</p>
      <p>CIN : U51109KA2012PTC066107</p>
      <p>Telephone: 044-45614700 / 044-67415800</p>
      </div>
      </div>
      <div style={{color:"white",width:"100%"}}>
      <hr />
      </div>
      <div style={{display:"flex",flexDirection:"row",margin:"0",color:"white",padding:"10px"}}>
      <p style={{marginLeft:"3%",color:"white"}}> <span style={{color:"white"}}><i class="bi bi-bag-fill"></i></span> Become a Seller</p>
      <p style={{marginLeft:"6%",color:"white"}}> <span style={{color:"white"}}><i class="bi bi-star"></i></span>Advertise</p>
      <p style={{marginLeft:"10%",color:"white"}}> <span style={{color:"white"}}><i class="bi bi-gift"></i></span>Gift Card</p>
      <p style={{marginLeft:"12%",color:"white"}}> <span style={{color:"white"}}><i class="bi bi-question-circle"></i></span>Help Center</p>
      <p style={{marginLeft:"13%",color:"white"}}> <span style={{color:"white"}}><i class="bi bi-c-circle"></i></span>2007-2024 Flipkart.Com</p>
      </div>
      </div>
        </>
      )}

      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>

            <Button variant="primary" type="submit" onClick={handleClose}>
              Submit
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Nav;
