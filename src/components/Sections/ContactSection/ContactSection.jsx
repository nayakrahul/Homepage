import React from 'react';
import Address from './Address.jsx';
import MobileEmail from './MobileEmail.jsx';
import SocialMedia from './SocialMedia.jsx';
import styles from './ContactSection.scss';


class Contact extends React.Component {
  render() {
    return (
      <section className="section" id="contacts"> 
        <div className="container">
          <div className="contacts-wrapper">
            <div className="row">
              <div className="col-md-10 col-lg-10 col-md-offset-1 col-lg-offset-1 text-center">
                <Address/>
                <MobileEmail/>
                <SocialMedia/>  
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Contact;
