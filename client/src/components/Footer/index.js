import React from 'react';
import { Link } from 'react-router-dom';
import './stylesheet.css';

function Footer() {
  return (
    <div className="row">
      <footer className="page-footer">
        <div className="container container-footer">
          <div className="row">
            <div className="col s12">
              <p className="center">Thank you for your love and kindness! 💗</p>
              <p className="center">© 2021 Copyright Happy Tails 🐶</p>
            </div>
          </div>
          <div>
          <Link className="donate-link" to="/donate">Donate</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
