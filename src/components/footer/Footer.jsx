import logo from "../../assets/logo.png";
import asus from "../../assets/footerimg/asus.png";
import canon from "../../assets/footerimg/canon.png";
import roblox from "../../assets/footerimg/roblox.png";
import twitch from "../../assets/footerimg/twitch.png";
import micro from "../../assets/footerimg/microsoft.png";
import insta from "../../assets/footerimg/insta.png";
import facebook from "../../assets/footerimg/facebook.png";
import github from "../../assets/footerimg/github.png";
import twitter from "../../assets/footerimg/twitter.png";
import "./footer.scss";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-section-1">
        <div className="footer-logo-para">
          <div className="footer-logo">
            <img src={logo} alt="" />
            <span>board</span>
          </div>
          <p className="para-footer">
            Playing electronic games, whether through consoles, computers,
            mobile phones or another medium altogether. Gaming is a nuanced term
            that suggests regular gameplay, possibly as a hobby.
          </p>
        </div>
        <div className="footer-tags">
          <div className="company-footer">
            <h4>company</h4>
            <h6>products</h6>
            <h6>apps & games</h6>
            <h6>features</h6>
          </div>

          <div className="help">
            <h4>help</h4>
            <h6>support</h6>
            <h6>about</h6>
            <h6>contact us</h6>
          </div>

          <div className="resourses">
            <h4>resourses</h4>
            <h6>youtube</h6>
            <h6>blog</h6>
            <h6>terms & conditions</h6>
          </div>
        </div>
      </div>

      <div className="companies">
        <img src={twitch} alt="" />
        <img src={roblox} alt="" />
        <img src={asus} alt="" />
        <img src={canon} alt="" />
        <img src={micro} alt="" />
      </div>
      <div className="social-accounts">
        <img src={twitter} alt="" />
        <img src={facebook} alt="" />
        <img src={insta} alt="" />
        <img src={github} alt="" />
        <div className="copy">
          Copyrights 2024. all rights reserved by board
        </div>
      </div>
    </div>
  );
};

export default Footer;
