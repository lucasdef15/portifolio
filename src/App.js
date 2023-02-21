import React from "react";
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import "./styles/App.css";

class App extends React.Component {
  state = {
    styles: {
      right: "-99999px",
    },
  };
  handlePosition = () => {
    this.setState({ styles: { right: 0 } });
  };
  handleClose = () => {
    this.setState({ styles: { right: "-99999px" } });
  };
  render() {
    return (
      <div>
        <Header
          handlePosition={this.handlePosition}
          handleClose={this.handleClose}
          styles={this.state.styles}
        />
        <Main />
      </div>
    );
  }
}

export default App;
