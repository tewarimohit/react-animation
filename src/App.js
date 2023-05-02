import React, { Component } from "react";

import "./App.css";
import Modal from "./components/Modal/Modal";
import Backdrop from "./components/Backdrop/Backdrop";
import List from "./components/List/List";
import { Transition } from "react-transition-group";

class App extends Component {
  state = { modalIsOpen: false, showBlock: false };

  showModal = () => {
    this.setState({ modalIsOpen: true });
  };
  closeModal = () => {
    this.setState({ modalIsOpen: false });
  };
  render() {
    return (
      <div className="App">
        <h1>React Animations</h1>
        <button
          onClick={() =>
            this.setState((prevState) => ({ showBlock: !prevState.showBlock }))
          }
        >
          Toggle
        </button>
        <br />
        <Transition
          in={this.state.showBlock}
          timeout={1000}
          mountOnEnter
          unmountOnExit
        >
          {(state) => (
            <div
              style={{
                backgroundColor: "green",
                width: "100px",
                height: "100px",
                margin: "auto",
                transition: "opacity 1s ease-out",
                opacity: state === "entered" ? 1 : 0,
              }}
            ></div>
          )}
        </Transition>
        <Transition
          in={this.state.modalIsOpen}
          timeout={300}
          mountOnEnter
          unmountOnExit
        >
          {(state) => <Modal show={state} closed={this.closeModal} />}
        </Transition>

        {this.state.modalIsOpen ? (
          <Backdrop show={this.state.modalIsOpen} />
        ) : null}
        <button className="Button" onClick={this.showModal}>
          Open Modal
        </button>
        <h3>Animating Lists</h3>
        <List />
      </div>
    );
  }
}

export default App;
