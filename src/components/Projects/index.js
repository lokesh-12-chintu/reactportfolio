import './index.css'
import Header from '../Header'

const Projects = () => (
  <>
    <Header />
    <div className="template-container">
      <div className="project-box">
        <img
          src="https://s3-ap-south-1.amazonaws.com/static.awfis.com/wp-content/uploads/2017/07/07184649/ProjectManagement.jpg"
          className="project-image"
        />
        <div className="project">
          <p>
            A small project on <span className="span"> Static Website </span>{' '}
            using HTML CSS Bootstrap technologies.
          </p>
          <a href="http://tourism768.ccbp.tech">
            <button className="button">Click Here</button>
          </a>
        </div>
        <div className="project">
          <p>
            A project on <span className="span">Responsive Website </span> using
            HTML CSS BOOTSTRAP technologies.
          </p>
          <a href="http://jittafoodmunch.ccbp.tech">
            <button className="button">Click Here</button>
          </a>
        </div>
      </div>
    </div>
  </>
)

export default Projects
