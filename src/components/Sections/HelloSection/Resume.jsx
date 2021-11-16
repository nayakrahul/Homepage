import React from 'react';
import './HelloSection.scss';


class Resume extends React.Component {
  render() {
    return (
        <nav className="resume animated animatedFadeInUp fadeInUp" style={{animationDelay: '1.5s'}}>
          <a href="/resume.pdf">Resume</a>
				</nav>
    );
  }
}

export default Resume;
