import React, { Component } from "react";
import NavTabs from "./NavTabs";
import Home from "./pages/Home";
// import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";

class PortfolioContainer extends Component {
  state = {
    currentPage: "Home"
  };

  handlePageChange = page => {
    this.setState({ currentPage: page });
  };

  // create a new function to know what page to show based on the state.currentPage
  renderPage = () => {
    switch (this.state.currentPage){
case 'Home' :
  return <Home/>;
  // case 'About' :
  //   return <About/>;
    case 'Portfolio' :
  return <Portfolio/>;
  case 'Contact' :
  return <Contact/>;
  default:
  return <Home/>;
    }

  }

  render() {
    return (
      <div>
        <NavTabs
          currentPage={this.state.currentPage}
          handlePageChange={this.handlePageChange}
        />
 
 {this.renderPage()}
      </div>
    );
  }
}

export default PortfolioContainer;
