
import React from "react";
import { Link, useLocation } from "react-router-dom";

function NavTabs() {
  // We'll go into the Hooks API later, for now, we are just using some code
  // from the react-router docs (https://reacttraining.com/react-router/web/api/Hooks/uselocation)
  // This allows the component to check the route any time the user uses a link to navigate.
  const location = useLocation();

  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <Link to="/" className={location.pathname === "/" ? "nav-link active" : "nav-link"}>
          Home
        </Link>
      </li>
      <li className="nav-item">
        {/* <Link
          to="/about"
          className={location.pathname === "/about" ? "nav-link active" : "nav-link"}
        >
          About
        </Link> */}
      </li>
      <li className="nav-item">
        <Link
          to="/portfolio"
          className={location.pathname === "/portfolio" ? "nav-link active" : "nav-link"}
        >
          Portfolio
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/contact"
          className={location.pathname === "/contact" ? "nav-link active" : "nav-link"}
        >
          Contact
        </Link>
      </li>
      <li className="nav-item">
        {/* <Link
          to="/contact/learn"
          className={location.pathname === "/contact/learn" ? "nav-link active" : "nav-link"}
        >
          Learn
        </Link> */}
      </li>
    </ul>
  );
}

export default NavTabs;

// import React from "react";

// function NavTabs(props) {
//   return (
//     <ul className="nav nav-tabs">
//       <li className="nav-item">
//         <a href="#home" onClick={() => props.handlePageChange("Home")} 
//         className={props.currentPage === 'Home' ? "nav-link active" : "nav-link"}>
//           Home
//         </a>
//       </li>
//       {/* <li className="nav-item">
//         <a href="#about" onClick={() => props.handlePageChange("About")} 
//             className={props.currentPage === 'About' ? "nav-link active" : "nav-link"}>
//           About
//         </a>
//       </li> */}
//       <li className="nav-item">
//         <a href="#portfolio" onClick={() => props.handlePageChange("Portfolio")} 
//          className={props.currentPage === 'Portfolio' ? "nav-link active" : "nav-link"}>
//           Portfolio
//         </a>
//       </li>
//       <li className="nav-item">
//         <a href="#contact" onClick={() => props.handlePageChange("Contact")} 
//         className={props.currentPage === 'Contact' ? "nav-link active" : "nav-link"}>
//           Contact
//         </a>
//       </li>
//     </ul>
//   );
// }

// export default NavTabs;
