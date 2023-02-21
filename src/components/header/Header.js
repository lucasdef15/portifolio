import React from "react";
import "../../styles/header.css";
import logo from "../../images/logo01.png";
import { AiOutlineClose } from "react-icons/ai";
// import { ReactComponent as Logo } from "../../images/logo.svg";

const Humburguer = ({ handlePosition }) => {
  return (
    <div className="wrapper" onClick={handlePosition}>
      <div className="bar"></div>
      <div className="bar"></div>
      <div className="bar"></div>
    </div>
  );
};

const Close = ({ handleClose }) => {
  return (
    <div className="close" onClick={handleClose}>
      <AiOutlineClose />
    </div>
  );
};

class Header extends React.Component {
  render() {
    const { handlePosition, styles, handleClose } = this.props;
    return (
      <header>
        <div className="logo">
          <img className="logoImg" src={logo} alt="lucas ferreira"></img>
          <h2>Lucas Faria</h2>
        </div>
        <div className="web-wrapper">
          <ul className="web">
            <li>about</li>
            <li>porfolio</li>
            <li>contact</li>
          </ul>
        </div>
        <div className="mobile-wrapper">
          <ul className="mobile" style={styles}>
            <Close handleClose={handleClose} />
            <li>about</li>
            <li>porfolio</li>
            <li>contact</li>
          </ul>
        </div>
        <Humburguer handlePosition={handlePosition} />
      </header>
    );
  }
}

export default Header;
