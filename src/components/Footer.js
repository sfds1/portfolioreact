
import React from "react";
import { Link, useLocation } from "react-router-dom";

function Footer() {
  // We'll go into the Hooks API later, for now, we are just using some code
  // from the react-router docs (https://reacttraining.com/react-router/web/api/Hooks/uselocation)
  // This allows the component to check the route any time the user uses a link to navigate.
  const location = useLocation();

  return (

    <footer className="page-footer">
      <div className="black-text footer-copyright">
        <div className="container text-align-center">
          <div className="social-links">
            <a className="black-text text-lighten-4 icon" href="https://github.com/sfds1/" target="_blank"><i
              className="fab fa-github"></i></a>
          </div>

          <div className="copyright">
            © 2020 - S Kuo
            </div>

        </div>
      </div>
    </footer>

  );
}

export default Footer;