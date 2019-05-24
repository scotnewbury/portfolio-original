import React from 'react';
import {Link} from 'react-router-dom';

function Header() {
  return (
    <div>
      <header>
        <nav class="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item">
                <Link to = "/" class="nav-link">Home</Link>
              </li>
              <li class="nav-item">
                <Link to = "/projects" class="nav-link">My Projects</Link>
              </li>
              <li class="nav-item">
                <Link to = "/contactme" class="nav-link">Contact Me </Link>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </div>
  )
}

export default Header;
