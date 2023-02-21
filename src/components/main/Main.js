import React from "react";
import lucasFaria from "../../images/lucasFaria.png";
import { BsArrowDown } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";

import "../../styles/main.css";

const Medias = () => {
  return (
    <div className="medias">
      <BsFacebook />
      <BsInstagram />
      <BsLinkedin />
      <BsGithub />
    </div>
  );
};

const Person = () => {
  return (
    <div className="person">
      <div className="person__container">
        <div className="person__circle"></div>
        <img className="person__img" src={lucasFaria} alt="media"></img>
      </div>
    </div>
  );
};

const Title = () => {
  return (
    <div className="title-wrapper">
      <div className="title">
        <h1>creative</h1>
        <h2>developer</h2>
        <h3>sensible to frontend</h3>
      </div>
    </div>
  );
};

class Main extends React.Component {
  render() {
    return (
      <main>
        <section className="sectionWrapper">
          <seciton className="mediasSection">
            <Medias />
          </seciton>
          <section className="sectionOne">
            <Person />
            <Title />
          </section>
        </section>
        <section className="sectionTwo">
          <div className="numberWrapper">
            <h5>01</h5>
          </div>
          <div className="scrollWrapper">
            <h5>scrool down</h5>
            <BsArrowDown />
          </div>
        </section>
      </main>
    );
  }
}

export default Main;
