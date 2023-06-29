import './index.css'
import Header from '../Header'

const Profile = () => (
  <>
    <Header />
    <div className="template-container">
      <div className="contact-box">
        <img
          src="https://cdn.pixabay.com/photo/2020/07/14/13/07/icon-5404125_1280.png"
          className="profile-image"
        />
        <div>
          <div className="small-box">
            <p className="para-2">Name</p>
            <p className="para-2">PNV KRISHNA</p>
          </div>
          <div className="small-box">
            <p className="para-2">D.O.B</p>
            <p className="para-2">july 10 2003</p>
          </div>
          <div className="small-box">
            <p className="para-2">Mobile.No</p>
            <p className="para-2">9704201572</p>
          </div>
          <div className="small-box">
            <p className="para-2">Gmail</p>
            <p className="para-2">pnv.ydk10@gmail.com</p>
          </div>
          <div className="small-box">
            <p className="para-2">District</p>
            <p className="para-2">Ananthapur</p>
          </div>
        </div>
      </div>
    </div>
  </>
)

export default Profile
