import React from 'react';
import '../../App.css';

function Projects() {
  return (
    <div className="myprojects bg-light">
      <h1 style = {titleColor}>Projects Page</h1>
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

    </div>
  )
}

const titleColor = {
  color: '#869da5'
}
export default Projects
