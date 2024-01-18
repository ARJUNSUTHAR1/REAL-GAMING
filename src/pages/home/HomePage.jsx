import './HomePage.scss'
import { useEffect } from "react";
import homeimage from "../../assets/smallmainimage.png"
import Marquee from "../../components/marquee/Marquee";
const HomePage = () => {
  useEffect(()=>{
    var copy = document.querySelector(".logos-slide").cloneNode(true);
    document.querySelector(".logos").appendChild(copy);
  },[])
  return (
    <>
     <div className="main-container">
      <div className="left-section">
      <h1 >let your <br />mind <span id='explore'>explore</span> <br /> new world</h1>
      <p id='para1'>Playing electronic games, whether through consoles, computers, mobile phones or another medium altogether. Gaming is a nuanced term that suggests regular gameplay, possibly as a hobby.</p>
      <div className="btns">
        <button className='btn-gradient'><div className='btn-name'>buy now</div></button>
        <button className='btn-stroke'><div className='btn-name-gradient'>play now</div></button>
      </div>
      <div className="features">
        <div className="feature">
          <h2>300+</h2>
          <h5>Unique Styles</h5>
        </div>
        <div className="feature">
          <h2>200+</h2>
          <h5>Project Finished</h5>
        </div>
        <div className="feature">
          <h2>500+</h2>
          <h5>Happy Customers</h5>
        </div>
      </div>
      </div>
      <div className="right-section">
        <img className = "home-image"src={homeimage} alt="" />
      <div className="height"></div>

      </div>
     
      <div className="logos">
          <div className="logos-slide">
            <span>Spaning Gaming</span>
            <div id="circle"></div>
            <span>Action-Packed</span>
            <div id="circle"></div>
            <span>Mind-Bending</span>
            <div id="circle"></div>
            <span>unique-collection</span>
            <div id="circle"></div>
          </div>
        </div>
     </div>
     </>
  )
}

export default HomePage;
