import {Link} from 'react-router-dom'
import './index.css'
import Header from '../Header'

const Skills = () => (
  <>
    <Header />
    <div className="template-container-1">
      <div className="name-box">
        <h1>Technical skills</h1>
      </div>
      <div className="skill-sub-box">
        <Link to="/python" className="skill-box">
          <center>
            <img
              src="https://e1.pxfuel.com/desktop-wallpaper/379/191/desktop-wallpaper-python-programming-python-logo.jpg"
              className="skill-image-1"
            />
            <div className="font">
              <p className="skill-para">PYTHON</p>
              <img
                src="https://static-00.iconduck.com/assets.00/arrow-up-right-from-square-icon-512x512-o0z8ht3t.png"
                className="font-image"
              />
            </div>
          </center>
        </Link>
        <Link to="/html" className="skill-box">
          <center>
            <img
              src="https://p4.wallpaperbetter.com/wallpaper/286/982/555/internet-html5-html-web-wallpaper-preview.jpg"
              className="skill-image-1"
            />
            <div className="font">
              <p className="skill-para">HTML</p>
              <img
                src="https://static-00.iconduck.com/assets.00/arrow-up-right-from-square-icon-512x512-o0z8ht3t.png"
                className="font-image"
              />
            </div>
          </center>
        </Link>
        <Link to="/css" className="skill-box">
          <center>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQg2LqQmsWBV0dbqy3CzdPaR0L2ONe1H1tGzQ&usqp=CAU"
              className="skill-image-1"
            />
            <div className="font">
              <p className="skill-para">CSS</p>
              <img
                src="https://static-00.iconduck.com/assets.00/arrow-up-right-from-square-icon-512x512-o0z8ht3t.png"
                className="font-image"
              />
            </div>
          </center>
        </Link>
        <Link to="/javascript" className="skill-box">
          <center>
            <img
              src="https://whizsmart.com/wp-content/uploads/2020/08/Javascript-1.jpg"
              className="skill-image-1"
            />
            <div className="font">
              <p className="skill-para">JavaScript</p>
              <img
                src="https://static-00.iconduck.com/assets.00/arrow-up-right-from-square-icon-512x512-o0z8ht3t.png"
                className="font-image"
              />
            </div>
          </center>
        </Link>
      </div>
    </div>
  </>
)

export default Skills
