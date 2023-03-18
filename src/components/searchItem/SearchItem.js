import "./searchItem.css"
import Si1 from "../../assets/images/searchItem/gel_mani.jpg"


const SearchItem = () => {
  return (
    <div className="searchItem">
      <img className="siImg" alt="" src={Si1}/>
      <div className="siDetails">
        <h1 className="siTitle">Gel Manicure</h1>
        <span className="siDesc">Premium manicure service include cuticle trimming, followed by massage with lotion and hot stones then ended with gel polish.</span>
        <textarea type="text" className="siNote" placeholder="Please enter your note here"></textarea>
      </div>

      <div className="siBooking">
        <span className="siPrice">$42</span>
        <button className="siButton">Schedule Appointment</button>
      </div>
    </div>
  )
}

export default SearchItem
