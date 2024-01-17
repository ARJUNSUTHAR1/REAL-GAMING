import { useEffect } from "react"
import './marquee.scss'

const Marquee = () => {
    // useEffect(()=>{
    //     var copy = document.querySelector(".logos-slide-1").cloneNode(true);
    //     document.querySelector(".logos-1").appendChild(copy);
    // },[])
  return (
    <>
      <div className="logos-1">
          <div className="logos-slide-1">
            <span>Spaning Gaming</span>
            <div id="circle-1"></div>
            <span>Action-Packed</span>
            <div id="circle-1"></div>
            <span>Mind-Bending</span>
            <div id="circle-1"></div>
            <span>unique-collection</span>
            <div id="circle-1"></div>
          </div>

          <div className="logos-slide-1">
            <span>Spaning Gaming</span>
            <div id="circle-1"></div>
            <span>Action-Packed</span>
            <div id="circle-1"></div>
            <span>Mind-Bending</span>
            <div id="circle-1"></div>
            <span>unique-collection</span>
            <div id="circle-1"></div>
          </div>
        </div>
    </>
  )
}

export default Marquee
