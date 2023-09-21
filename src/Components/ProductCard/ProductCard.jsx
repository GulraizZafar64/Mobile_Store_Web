import React from "react";
import { useNavigate } from "react-router-dom";
import "./ProductCard.scss";
import Slider from "react-slick";
import { CgShoppingCart } from "react-icons/cg";

const ProductCard = ({ data, id }) => {
  const navigate=useNavigate()
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
    return (
    <div className="productCard" onClick={()=>navigate('/phoneDetail', { state: data })}>
     {/* <Slider {...settings} className="slikProductSlider">
          <div className="imageContainerSlider">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9sJxzSWS2itlHhJUBzzM1ZgA0LWo0m4Jn5hr_Sa8&s" alt="image"/>
          </div> */}
          <div  className="imageContainerSlider">
          <img src={data.images[0]?.url} alt="image"/>
          </div>

        {/* </Slider> */}
        <h3>{data.name}</h3>
        <p className="descriptionofproduct">{data.description.length>80? data.description.slice(0,80)+'...':data.description}</p>
      <div>
      <p><b>{data.price}Rs</b></p>
        <CgShoppingCart />

      </div>
    </div>
    );
};

export default ProductCard;
