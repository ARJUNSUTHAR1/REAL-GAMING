import './card.scss'

const Card = ({...items}) => {
  return (
    <>
    {/* <div className="container"> */}
      <div className="card">
        <img className="card-main-image" src={items.main_image} alt="" />
        <div className="name">{items.name}</div>
        <div className="user">
            <img className='profile-image'src={items.user_image} alt="" />
            <div className="detail">
                <h5>{items.user_name}</h5>
                <h6 className='cmpny' >{items.company}</h6>
            </div>
            
        </div>
        <button className='btn-gradient-card'><div className='btn-name-card'>newest games</div></button>

      </div>
      {/* </div> */}
    </>
  )
}

export default Card
