import "./Navbar.scss"
import logo from '../../assets/logo.png'
import { IoBagHandleOutline } from "react-icons/io5";

const Navbar = () => {
  return (
    <>
    <div className="nav">
      <div className="logo"><img src={logo}alt="" /><span>board</span></div>
      <ul>
        <li>Products</li>
        <li>apps and games</li>
        <li>features</li>
        <li>support</li>
        <li>about</li>
      </ul>
      <div className="cart"><IoBagHandleOutline/></div>
    </div>
      </>
  )
}

export default Navbar
