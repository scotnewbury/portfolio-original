import React from 'react';
import '../../App.css';

function Projects() {
  return (
    <div className="myprojects bg-light">
      <h1 style = {titleColor}>My Projects</h1>
      <div className = "row justify-content-center mb-5 mb-lg-0">
        <div className="col-lg-6">
          <img className="img-fluid" src={require('../../images/monster-mob.png')} alt={"Monster Mob!"} />
        </div>
        <div className="col-lg-6 order-lg-first">
          <div className="bg-black text-center h-100 project">
            <div className="d-flex h-100">
              <div className="project-text w-100 my-auto text-center text-lg-right">
                <h4 className="text-white">Monster Mob!</h4>
                <p className="mb-0 text-white-50">A React.js app that pulls from the JSONPlaceholder API and displays ID cards from the data.</p>
                <a href="https://monster-mob.netlify.com" className="btn btn-primary">Jump to live view</a> {' '}
                <a href="https://github.com/scotnewbury/monster-mob" className="btn btn-primary">Github Repository</a>
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
                <p className="mb-0 text-white-50">A simple todo list using React.js that pulls some initial data from JSON Placeholder API.</p>
                <a href="https://react-crash-course-todolist.netlify.com/" className="btn btn-primary">Jump to live view</a> {' '}
                <a href="https://github.com/scotnewbury/react-crash-todo" className="btn btn-primary">Github Repository</a>
                <hr className="d-none d-lg-block mb-0 ml-0" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className = "row justify-content-center mb-5 mb-lg-0">
        <div className="col-lg-6">
          <img className="img-fluid" src={require('../../images/gradient-background.png')} alt={"Gradient Background"} />
        </div>
        <div className="col-lg-6 order-lg-first">
          <div className="bg-black text-center h-100 project">
            <div className="d-flex h-100">
              <div className="project-text w-100 my-auto text-center text-lg-right">
                <h4 className="text-white">Gradient Background Generator</h4>
                <p className="mb-0 text-white-50">This project provides the linear gradient syntax based on either a randomly genereated or user selected color pairing.</p>
                <a href="https://newbury-gradient-background.netlify.com" className="btn btn-primary">Jump to live view</a> {' '}
                <a href="https://github.com/scotnewbury/Gradient-Background" className="btn btn-primary">Github Repository</a>
                <hr className="d-none d-lg-block mb-0 mr-0" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row justify-content-center mb-5 mb-lg-0">
        <div className="col-lg-6">
          <img className="img-fluid" src={require('../../images/image-gallery.png')} alt={"A gallery"} />
        </div>
        <div className="col-lg-6">
          <div className="bg-black text-center h-100 project">
            <div className="d-flex h-100">
              <div className="project-text w-100 my-auto text-center text-lg-left">
                <h4 className="text-white">Image Gallery</h4>
                <p className="mb-0 text-white-50">This project pulls random images from Unsplash using fetch.</p>
                <a href="https://newbury-image-gallery.netlify.com" className="btn btn-primary">Jump to live view</a> {' '}
                <a href="https://github.com/scotnewbury/Image-Gallery" className="btn btn-primary">Github Repository</a>
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
