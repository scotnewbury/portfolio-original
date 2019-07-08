import React from 'react';
import '../../App.css';

function Projects() {
  return (
    <div className="myprojects bg-light">
      <h1 style = {titleColor}>My Projects</h1>

      <div className="row justify-content-center mb-5 mb-lg-0">
        <div className="col-lg-6">
          <img className="img-fluid" src={require('../../images/facial-recognition-app.png')} alt={"An app that recognizes faces"} />
        </div>
        <div className="col-lg-6">
          <div className="bg-black text-center h-100 project">
            <div className="d-flex h-100">
              <div className="project-text w-100 my-auto text-center text-lg-left">
                <h4 className="text-white">Facial Recognition App</h4>
                <div className="mb-0 text-white-50">
                  <p>This project allows a user to register with the site and enter the URL of a picture.
                     It will then place a box around a face in the image if one is found.</p>
                  <p>A count of the number of URLs entered over time is also maintained.</p>
                  <p>If you do not wish to register with the site you may login as testuser@noemail.com, with the password, password.</p>
                  <p>This project was written using React.js, Node.js, and uses a PostgreSQL database.</p>
                </div>
                <a href="https://newbury-smart-brain.herokuapp.com/" className="btn btn-primary">Jump to live view</a> {' '}
                <a href="https://github.com/scotnewbury/facerecognitionbrain/" className="btn btn-primary">Github Repository for front end</a> {' '}
                <a href="https://github.com/scotnewbury/facerecognitionapi/" className="btn btn-primary">Github Repository for API</a>
                <p>The project is deployed on Heroku and make take a few moments to 'spin up.'</p>
                <hr className="d-none d-lg-block mb-0 ml-0" />
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className = "row justify-content-center mb-5 mb-lg-0">
        <div className="col-lg-6">
          <img className="img-fluid" src={require('../../images/monster-mob.png')} alt={"Monster Mob!"} />
        </div>
        <div className="col-lg-6 order-lg-first">
          <div className="bg-black text-center h-100 project">
            <div className="d-flex h-100">
              <div className="project-text w-100 my-auto text-center text-lg-right">
                <h4 className="text-white">Monster Mob!</h4>
                <div className="mb-0 text-white-50">
                  <p>This project allows the user to search a listing of monsters. The contact details are pulled from the JSONPlaceholder API which the images
                      are pulled from Robohash.org.</p>
                  <p>The project was written using React.js</p>
                </div>
                <a href="https://monster-mob.netlify.com" className="btn btn-primary">Jump to live view</a> {' '}
                <a href="https://github.com/scotnewbury/monster-mob" className="btn btn-primary">Github Repository</a>
                <p>The project is deployed on Netlify.</p>
                <hr className="d-none d-lg-block mb-0 mr-0" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row justify-content-center mb-5 mb-lg-0">
        <div className="col-lg-6">
          <img className="img-fluid" src={require('../../images/A-Simple-ToDo-List.png')} alt={"A Simple ToDo List"} />
        </div>
        <div className="col-lg-6">
          <div className="bg-black text-center h-100 project">
            <div className="d-flex h-100">
              <div className="project-text w-100 my-auto text-center text-lg-left">
                <h4 className="text-white">A Simple ToDo</h4>
                <div className="mb-0 text-white-50">
                  <p>A simple todo that pulls some initial data from JSON Placeholder API and allows the user to add, complete, and delete tasks.</p>
                  <p>All data is stored in the browser and is cleard when the browser is closed.</p>
                  <p>This project was written using React.js</p>
                </div>
                <a href="https://react-crash-course-todolist.netlify.com/" className="btn btn-primary">Jump to live view</a> {' '}
                <a href="https://github.com/scotnewbury/react-crash-todo" className="btn btn-primary">Github Repository</a>
                <p>The project is deployed on Netlify.</p>
                <hr className="d-none d-lg-block mb-0 ml-0" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const titleColor = {
  color: '#869da5'
}
export default Projects
