import Card from "../../components/card/Card";
import Data from "../../data/Data"
import "./page4.scss";

const Page4 = () => {
  return (
    <>
      <div className="page4">
        <h2>
          welcome to the
          <br />
          top<span className="explore">games</span>
        </h2>
        <div className="btns-4">
          <button className="btn-gradient-4">
            <div className="btn-name-4">newest games</div>
          </button>
          <button className="btn-stroke-4">
            <div className="btn-name-gradient-4">latest games</div>
          </button>
          <button className="btn-stroke-4">
            <div className="btn-name-gradient-4">sports games</div>
          </button>
          <button className="btn-stroke-4">
            <div className="btn-name-gradient-4">fight games</div>
          </button>
        </div>
        <div className="cards">
          {Data.map((items) => {
            return <Card {...items} />;
          })}
        </div>
      </div>
    </>
  );
};

export default Page4;
