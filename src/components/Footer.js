
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
            <div className="contact-btn">
        <Link
          to="/contact"
          className={location.pathname === "/contact" ? "nav-link active" : "nav-link"}
        >
          Contact
        </Link>
      </div>
      <div className="copyright">
                © 2020 - S Kuo
            </div>
            {/* <a className="contact" href="contact.html"><button className="btn-outline-dark" id="contact-btn" type="button">Contact</button></a> */}
      
        </div>
    </div>
</footer>
    // <ul className="nav nav-tabs">
    //   <li className="nav-item">
    //     <Link to="/" className={location.pathname === "/" ? "nav-link active" : "nav-link"}>
    //       Home
    //     </Link>
    //   </li>
    //   <li className="nav-item">
    //     {/* <Link
    //       to="/about"
    //       className={location.pathname === "/about" ? "nav-link active" : "nav-link"}
    //     >
    //       About
    //     </Link> */}
    //   </li>
    //   <li className="nav-item">
    //     <Link
    //       to="/portfolio"
    //       className={location.pathname === "/portfolio" ? "nav-link active" : "nav-link"}
    //     >
    //       Portfolio
    //     </Link>
    //   </li>
    //   <li className="nav-item">
    //     <Link
    //       to="/contact"
    //       className={location.pathname === "/contact" ? "nav-link active" : "nav-link"}
    //     >
    //       Contact
    //     </Link>
    //   </li>
    //   <li className="nav-item">
    //     {/* <Link
    //       to="/contact/learn"
    //       className={location.pathname === "/contact/learn" ? "nav-link active" : "nav-link"}
    //     >
    //       Learn
    //     </Link> */}
    //   </li>
    // </ul>
  );
}

export default Footer;