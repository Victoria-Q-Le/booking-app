import "./header.css"
import {faCalendar, faClock, faEye, faFaceSmile, faSprayCanSparkles} from "@fortawesome/free-solid-svg-icons"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { useState } from "react"
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Header = ({type}) => {
  const [date, setDate] = useState(new Date())

  return (
    <div className="header">
      <div className={ type === "list" ? "headerContainer listMode" : "headerContainer"}>
        {/* HEADER LIST ITEMS */}
        <div className='headerList'>
          <div className='headerListItem active'>
            <FontAwesomeIcon icon={faSprayCanSparkles} />
            <span>Manicures and Pedicures</span>
          </div>

          <div className='headerListItem'>
            <FontAwesomeIcon icon={faEye} />
            <span>Lashes</span>
          </div>

          <div className='headerListItem'>
            <FontAwesomeIcon icon={faFaceSmile} />
            <span>Facial</span>
          </div>
        </div>

        {type !== "list" &&
        <>
          {/* TITLE */}
          <h1 className="headerTitle">Want to get pampered? Come visit us!</h1>
          <p className="headerDesc">Come to us with all your beauty needs, from taking care of your nails, to lashes, or just simply a facial to refresh to skin</p>
          <button className="headerBtn">Login / Register</button>

          {/* SEARCH BOX */}
          <div className="headerSearch">
            <div className="headerSearchItem">
              <FontAwesomeIcon icon={faSprayCanSparkles} className="headerIcon" />
              <input type="text" placeholder="Find by service" className="headerSearchInput"></input>
            </div>

            <div className="headerSearchItem">
              <FontAwesomeIcon icon={faCalendar} className="headerIcon" />
              <DatePicker className="date" selected={date} onChange={(date) => setDate(date)} closeOnScroll={true}/>

            </div>
            
            <div className="headerSearchItem">
              <FontAwesomeIcon icon={faClock} className="headerIcon" />
              <span className="headerSearchText">Time</span>
            </div>

            <div className="headerSearchItem">
              <button className="headerBtn">Search</button>
            </div>
          </div>
        </>}

      </div>
    </div>
  )
}

export default Header
