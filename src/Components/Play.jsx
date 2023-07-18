import React, { Component } from "react";
import Fade from "react-reveal";

class Play extends Component {
  render() {
    if (!this.props.data) return null;

    return (
      <section id="play">
        <Fade left duration={1000} distance="40px">
          <div className="row">
            <div className="twelve columns collapsed">
              <h1 style={{color: "white"}}>Play</h1>

              <div
                id="portfolio-wrapper"
                className="bgrid-quarters s-bgrid-thirds cf"
              >

              </div>
            </div>
          </div>
        </Fade>
      </section>
    );
  }
}

export default Play;
