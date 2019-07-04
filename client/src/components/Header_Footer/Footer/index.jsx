import React from 'react';
import fontawesome from '@fortawesome/fontawesome';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';

import {
  faCompass,
  faPhone,
  faClock,
  faEnvelope
} from '@fortawesome/free-solid-svg-icons';

library.add(faCompass, faPhone, faClock, faEnvelope);

const Footer = () => {
  return (
    <footer className="bck_b_dark">
      <div className="container">
        <div className="logo">Waves</div>
        <div className="wrapper">
          <div className="left">
            <h2>Contact Information</h2>
            <div className="business_nfo">
              <div className="tag">
                <FontAwesomeIcon icon={faCompass} className="icon" />
                <div className="nfo">
                  <div>Address</div>
                  <div>San Francisco, CA</div>
                </div>
              </div>
              <div className="tag">
                <FontAwesomeIcon icon={faPhone} className="icon" />
                <div className="nfo">
                  <div>Phone</div>
                  <div>555-555-5555</div>
                </div>
              </div>
              <div className="tag">
                <FontAwesomeIcon icon={faClock} className="icon" />
                <div className="nfo">
                  <div>Working Hours</div>
                  <div>Mon-Sun 9am-8pm</div>
                </div>
              </div>
              <div className="tag">
                <FontAwesomeIcon icon={faEnvelope} className="icon" />
                <div className="nfo">
                  <div>email</div>
                  <div>info@waves.com</div>
                </div>
              </div>
            </div>
          </div>
          <div className="left">
            <h2>Be the first to know</h2>
            <p>
              Get the latest information on events, sales, and offers. Don't
              Miss Out!
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
