import vr from '../../assets/vr.png'
import './page3.scss'

const Page3 = () => {
  return (
    <>
       <div className="page3">
        <div className="blur-back">
        <div className="left"><img src={vr} alt="" /></div>
          <div className="right">
          <h2 >discover the <br /> <span className='explore'>virtual</span><br /> reality gaming</h2>
      <p className='para1'>A well-designed gaming header often incorporates elements such as game characters, iconic symbols, vibrant colors, and dynamic visuals to convey excitement, adventure, and the immersive nature of gaming</p>
      
        <button className='btn-stroke-3'><div className='btn-name-gradient-3'>play now</div></button>
  
          </div>
        </div>
       </div>
    </>
  )
}

export default Page3
