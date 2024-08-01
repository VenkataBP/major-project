import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function AutoPlay() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 2000,
    cssEase: "linear"
  };
  return (
    <div className="slider-container mt-5">
      <Slider {...settings}>
        <div>
        <center>
          <img src="https://www.bonsoir.co.in/cdn/shop/articles/FEATURE_IMAGE2_1024x1024.jpg?v=1693560899" width={"800px"} height={"400px"} marginLeft={"55%"} alt="" />
          </center>
        </div>
        <div>
          <center style={{marginLeft:"20%"}}>
          <img src="https://www.organicandmore.com/wp-content/uploads/2020/07/9742-ok-1080x675.jpg"  alt="" width={"800px"} height={"400px"} marginLeft={"5%"}/>
          </center>
        </div>
        <div>
        <center>
        <img src="https://img.freepik.com/premium-photo/indian-famil…-diwali-festival-diwali-background_714173-821.jpg" alt="" width={"800px"} height={"400px"} marginLeft={"55%"}/>
        </center>
        </div>
        <div>
        <center>
        <img src="https://www.menswearhouse.com/blog/wp-content/uploads/2023/03/MWSP23_LOC_GROUP_23_0501_sRGB-1.jpg" alt="" width={"800px"} height={"400px"} marginLeft={"55%"} srcset="" />
        </center>
        </div>
        <div>
        <center>
        <img src="https://i.ytimg.com/vi/PKdH3ZEqNlA/maxresdefault.jpg" width={"800px"} height={"400px"} marginLeft={"55%"} alt="" />
        </center>
        </div>
      </Slider>
      <div style={{display:"flex"}}>
      <h1 style={{marginLeft:"9%",marginTop:"2%"}}>Mens Wear</h1>
      <div style={{marginTop:"6%",marginLeft:"-18%"}}>
      <img src="https://www.tasva.com/cdn/shop/products/TT29-Oct24398.jpg?v=1640691542&width=800" width={"300px"} height={"300px"} marginLeft={"-5%"} marginTop={"6%"} alt="" />
      </div>
      <div style={{marginLeft:"2%",marginTop:"6%"}}>
      <img src="https://www.suitsexpert.com/wp-content/uploads/grey-suit-black-dress-shirt-black-tassel-loafers.jpg" width={"300px"} height={"300px"}  marginLeft={"3%"} marginTop={"6%"}  alt="" />
      </div>
      <div style={{marginLeft:"2%",marginTop:"6%"}}>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTM6Zma2goumx3s1n4iuP3-T6cj3zkfSohM0g&s" width={"300px"} height={"300px"}  alt="" />
      </div>
      <div style={{marginLeft:"2%",marginTop:"6%"}}>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKTzZ_qU1UT3WYRPe0aLgDKVpVas5iLUna1g&s" width={"300px"} height={"300px"}  alt="" />
      </div>
      </div>
      <div style={{marginLeft:"5%",display:"flex"}}>
      <h1 style={{marginLeft:"5%",marginTop:"2%"}}>Womens Wear</h1>
      <div style={{marginLeft:"-24%",marginTop:"6%"}}>
      <img src="https://www.textileexport.in/media/mceu_90832377621712658471005.jpg" width={"300px"} height={"300px"} alt="" />
      </div>
      <div style={{marginLeft:"2%",marginTop:"6%",}}>
      <img src="https://m.media-amazon.com/images/I/71RGvUo4hJL._AC_UY1100_.jpg" width={"300px"} height={"300px"} alt="" />
      </div>
      <div style={{marginLeft:"2%",marginTop:"6%"}}>
      <img src="https://d1pdzcnm6xgxlz.cloudfront.net/tops/8905875135692-18.jpg" width={"300px"} height={"300px"} alt="" />
      </div>
      <div style={{marginLeft:"2%",marginTop:"6%"}}>
      <img src="https://images.jdmagicbox.com/quickquotes/images_main/-6ift1l31.jpg" width={"300px"} height={"300px"} alt="" />
      </div>
      </div>
      <div style={{marginLeft:"5%",display:"flex"}}>
      <h1 style={{marginLeft:"5%"}}>Kids Wear</h1>
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
      <h1 style={{marginLeft:"5%",marginTop:"2%"}}>Home Things</h1>
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
      <h1 style={{marginLeft:"5%",marginTop:"2%"}}>Electronics</h1>
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
      <h1 style={{marginLeft:"5%",marginTop:"2%"}}>Foot Wears</h1>
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
    </div>
  );
}

export default AutoPlay;