import"./LayoutPage.css"
import { Outlet, Link } from "react-router-dom";
import basketIcon from "../../assets/images/icon-cart.svg"
import avatar from "../../assets/images/image-avatar.png"
import HeaderLogo from "../../assets/images/logo.svg"
import burgerMenu from "../../assets/images/icon-menu.svg"
function LayoutPage(){
    return(
        <>
        
        <nav>
          <div className="header">
            <div className="web-logo">
             <img className="logo" src={HeaderLogo} /> 
            </div>
          <ul>
            <li>
              <Link to="/CollectionPage">Collection</Link>
            </li>
            <li>
              <Link to="/MenPage">Men</Link>
            </li>
            <li>
              <Link to="/WomanPage">Women</Link>
            </li>
            <li>
              <Link to="/AboutPage">About</Link>
            </li>
            <li>
              <Link to="/ContactPage">Contact</Link>
            </li>
          </ul>
          </div>

          <div className="ordering">
          <img className="cart-icon" src={basketIcon} />
          <img className="avater-icon" src={avatar}/>
        </div>
        </nav>

        <nav className="burger-nav">
          <div className="mobile-logo">
            <img className="menu" src={burgerMenu} /> 
             <img className="logo" src={HeaderLogo} /> 
           </div>
          <div className="ordering-mobile">
            <img className="cart-icon" src={basketIcon} />
            <img className="avater-icon-mobile" src={avatar}/>
          </div>
        </nav>

        <hr/>
  
        <Outlet />
       
      </>
    )
}
export default LayoutPage