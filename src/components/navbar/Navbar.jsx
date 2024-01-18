import "./Navbar.scss";
import logo from "../../assets/logo.png";
import { IoBagHandleOutline } from "react-icons/io5";
import { RiMenu3Line } from "react-icons/ri";
import { RxCross2 } from "react-icons/rx";
import { useState } from "react";
const Navbar = () => {
  const [visiblity ,setVisiblity] = useState("hidden");
   const handleMenu = ()=>{
    setVisiblity("active")
    
   }
   const handleCross = ()=>{
    setVisiblity("hidden")
   }
  return (
    <>
      <div className="nav">
        <div className="logo">
          <img src={logo} alt="" />
          <span>board</span>
        </div>
        <ul className="horizontal-nav">
          <li>Products</li>
          <li>apps and games</li>
          <li>features</li>
          <li>support</li>
          <li>about</li>
        </ul>
        <div className="cart">
          <IoBagHandleOutline />
        </div>
        <div onClick={handleMenu} className="menu-line">
          <RiMenu3Line />
        </div>
        <div className={`menu ${visiblity}`}>
          <button type="button" onClick={handleCross}  className="cross"><RxCross2 size="30px"/></button>
        <div className="menubar">
          <div>Products</div>
          <div>apps & games</div>
          <div>features</div>
          <div>support</div>
          <div>about</div>
          <div>cart</div>
        </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
