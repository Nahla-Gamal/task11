import "./ContentComponent.css" 
import product1 from "../../assets/images/image-product-1.jpg"
import product1a from "../../assets/images/image-product-1-thumbnail.jpg"
import product2 from "../../assets/images/image-product-2.jpg"
import product2a from "../../assets/images/image-product-2-thumbnail.jpg"
import product3 from "../../assets/images/image-product-3.jpg"
import product3a from "../../assets/images/image-product-3-thumbnail.jpg"
import product4 from "../../assets/images/image-product-4.jpg"
import product4a from "../../assets/images/image-product-4-thumbnail.jpg"
import basketIcon from "../../assets/images/icon-cart.svg"
import plusIcon from "../../assets/images/icon-plus.svg"
import minusIcon from "../../assets/images/icon-minus.svg"
import { useState } from "react"


function ContentComponent(){
  const [image, setImage] = useState(product1);
  const [counter,setCounter] = useState(0);

  function handleOnClick(event){
    setImage(event.target.getAttribute("data-custom-src"));
  }

  function Decrement(){
    if (counter > 0){
      setCounter(counter - 1);
    }
  }
  
  function Increment(){
      setCounter(counter + 1);
  }

    return(
    <div className="product">
      <div className="product-items">
        <div className="item-img">
            <img src={image} />
        </div>
        <div className="sliding-img">
        <img onClick={handleOnClick} data-custom-src={product1} src={product1a} />
        <img onClick={handleOnClick} data-custom-src={product2} src={product2a} />
        <img onClick={handleOnClick} data-custom-src={product3} src={product3a} />
        <img onClick={handleOnClick} data-custom-src={product4} src={product4a} />
        </div>
      </div>
      <div className="product-info">
        <div className="info">
          <label className="company-name"> SNEAKER COMPANY </label>
          <h1>Fall Limited Edition Sneakers </h1>
          <p className="item-info">
          These low-profile sneakers are your perfect casual wear companion.
           Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer. 
          </p>
        </div>
        <div className="prices">
          <div className="discount">
          <label className="new-price">$125.00</label>
          <label className="discount-amount">50%</label>
          </div>
          <label className="original-price"> $250.00</label>
        </div>
        <div className="actions">
          <div className="counter">
            <button className="minus-icon" onClick={Decrement}>
              <img src={minusIcon}/>
            </button>
            <label className="number-item">{counter}</label>
            <button className="plus-icon" onClick={Increment}>
            <img src={plusIcon}/>
            </button>
          </div>
          <div className="cart-item">
            <img src={basketIcon}/>
            <label className="add-item">Add to cart</label>
          </div>
        </div>
      </div>
    </div>

    );
}

export default ContentComponent;