import Data from '../../data/data';
import './page5.scss'
import verified from '../../assets/verified.png'
Data
import { FaStar } from "react-icons/fa6";
const Page5 = () => {
  return (
    <><div className="page5">
        <div className="boxes">
        <div className="left-box">
            <div className="flags">
                <div className="left-flag"></div>
                <div className="right-flag"></div>
            </div>
            <div className="five-stars">
                <FaStar/>
                <FaStar/>
                <FaStar/>
                <FaStar/>
                <FaStar/>
            </div>
            <p className='para5'>One of the standout features of this gaming website is its extensive library of game guides and tutorials. It has helped me level up my skills, conquer challenging quests, and discover hidden secrets within games. The guides are comprehensive, easy to follow, and have undoubtedly elevated my gaming performance.</p>
            <div className="line"></div>

            <div className="user-5">
                <div className='profile'>
            <img className='profile-image-5'src={Data[0].user_image} alt="" />
            <div className="detail-5">
                <h5>{Data[0].user_name}</h5>
                <h6 className='cmpny-5' >{Data[0].company}</h6>
            </div>
            </div>
            <div className="verified">
           <div className="tick"><img src={verified} alt="" /></div> <span>Verified</span>
            </div>
        </div>
        </div>
        <div className="right-box">
        <div className="flags">
                <div className="left-flag"></div>
                <div className="right-flag"></div>
            </div>
        </div>
        </div>
       



    </div>
      
    </>
  )
}

export default Page5
