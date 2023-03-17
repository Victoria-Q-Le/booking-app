import { faSprayCanSparkles } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Header from "../../components/header/Header"
import Navbar from "../../components/navBar/Navbar"
import "./service.css"

const Service = () => {
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
        </div>
      </div>
    </div>
  )
}

export default Service
