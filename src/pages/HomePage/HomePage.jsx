import "./HomePage.css"
import { Outlet, Link } from "react-router-dom";

function HomePage(){
    const arrayOfProducts = [
        { id: 1, name: "shoes"},
        { id: 2, name: "handbag"},
        { id: 3, name: "backbag"},
        { id: 4, name: "sandal"},
        { id: 5, name: "slipper"},
        { id: 6, name: "heels"},
        { id: 7, name: "boot"},
        { id: 8, name: "totebag"},
    ] ;
    return(
     <div id="productWrapper">
      {arrayOfProducts.map((product) => {
        return(
         <Link className="productlink" to={`/product/${product.id}`}>
            <div className="productBox">
            <label>{product.name}</label>
            </div>
         </Link>
        );
     })}
      
     </div>
     
    );
}
export default HomePage;