import React from "react";
import Link from "../Link/Link";
export default class Header extends React.Component {
  constructor() {
    super();
    console.log("from constructor"); //1

    this.state = {
      name: "mostafa",
      job: "developer",
    };
    this.age = 20;
  }

  componentDidMount() {
    console.log("from componentDidMount");
  }

  componentDidUpdate() {
    console.log("from componentDidUpdate");
  }
  changeName = (name) => {
    this.setState({ name: name });
  };
  handleInputChange(event) {
    this.setState({ name: event.target.value });
  }
  render() {
    console.log("from render"); //2
    return (
      <>
        <div>
          my name is {this.state.name}
          <br></br>
          age {this.age}
        </div>
        <button onClick={() => {this.changeName("mostafa khalaf mohamed")}}>
          Chang name
        </button>
        <Link url="htttp://www.facebook.com" name="facebook"/>
        <Link url="htttp://www.linkedin.com" name="linkedin"/>
        <Link url="htttp://www.google.com" name="google"/>
        <Link url="htttp://www.yahoo.com" name="yahoo"/>
      </>
    );
  }ks
}
