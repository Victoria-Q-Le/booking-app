import { faSprayCanSparkles } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Header from "../../components/header/Header"
import Navbar from "../../components/navBar/Navbar"
import "./service.css"
import Img1 from "../../assets/images/searchItem/gel_mani.jpg"
import Img2 from "../../assets/images/searchItem/dip_design.jpg"
import Img3 from "../../assets/images/searchItem/gelX.jpg"
import Img4 from "../../assets/images/searchItem/acrylic.jpg"

const Service = () => {
  const images = [Img1, Img2, Img3, Img4]
  return (
    <div>
      <Navbar /> 
      <Header type="list"/>
      <div className="serviceContainer">
        <div className="serviceWrapper">
          <h1 className="serviceTitle">Gel Manicure</h1>
          <div className="serviceDesc">
            <FontAwesomeIcon icon={faSprayCanSparkles} />
            <span>Manicure with Gel Polish</span>
          </div>

          <span className="serviceBrand"> We are using natural colors from well known brand such as OPI, Nitro, etc.</span>

          <span className="servicePriceHighLight">Bring your friends to get 10% discount for your services</span>

          <div className="serviceImgs">
           {images.map(image => (
            <div className="serviceImgWrapper">
              <img className="serviceImg" alt="" src={image}/>
            </div>
           ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Service
