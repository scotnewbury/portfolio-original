import React, { Component } from 'react'

export class ContactMe extends Component {
  render() {
    return (
        <div class="contact text-center">
          <h1>Let's connect!</h1>
          <h3>Feel free to reach out to me using any of the following</h3>
          <a href="https://github.com/scotnewbury"><i class="fab fa-github"></i></a>
          <a href="http://www.linkedin.com/in/scotnewbury"><i class="fab fa-linkedin"></i></a>
          <a href="mailto:scot@scotnewbury.com"><i class="fas fa-envelope"></i></a>
      </div>
    )
  }
}

export default ContactMe
