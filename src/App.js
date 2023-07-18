import React, { Component } from "react";
import ReactGA from "react-ga";
import $ from "jquery";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Play from "./Components/Play";
import Resume from "./Components/Resume";
import Contact from "./Components/Contact";
import Portfolio from "./Components/Portfolio";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      foo: "bar",
      resumeData: {}
    };

    // ReactGA.initialize(""); // TODO: Add Google Analytics
    // ReactGA.pageview(window.location.pathname);
  }

  getResumeData() {
    $.ajax({ // TODO: Replace with fetch
      url: "./en_us.json",
      dataType: "json",
      cache: false,
      success: function(data) {
        this.setState({ resumeData: data });
      }.bind(this),
      error: function(xhr, status, err) {
        console.log(err);
        alert(err);
      }
    });
  }

  componentDidMount() {
    this.getResumeData();
  }

  render() {
    return (
      <div className="App">
        <Header data={this.state.resumeData.main} />
        <Portfolio data={this.state.resumeData.portfolio} />
        <Resume data={this.state.resumeData.resume} />
        <Play data={this.state.resumeData.main} />
        <Contact data={this.state.resumeData.main} />
        <Footer data={this.state.resumeData.main} />
      </div>
    );
  }
}

export default App;