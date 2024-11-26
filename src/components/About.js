import { Outlet } from "react-router-dom";
import ProfileClass from "../components/ProfileClass";
import Profile from "../components/Profile";
import React from "react";

class About extends React.Component {

  constructor(props){
    super(props);
      console.log("Parent - constructor");
  }

  componentDidMount(){
    console.log("Parent - componentDidMount")
  }

  render() {
    console.log("Parent - render")
    return (
        <>
          <h1>About Us Page!!</h1>
          {/* <Outlet />  */}
          {/* this outlet is being used as the profile page is the children of about page which is 
            there in the config file in  App.j*/}
          <ProfileClass name={"First child"} xyz={"xyz"} />
          <ProfileClass name={"Second child"} xyz={"xyz"} />
          {/* <Profile name={"rishabh-function prop"} /> */}
        </>
      );
  }
}

export default About;




// Lifecycle method flow: 
// Parent - constructor
// Parent - render
// Child - ConstructorFirst child
// Child - renderFirst child
// Child - ConstructorSecond child
// Child - renderSecond child
// Child - componentDidMountFirst child
// Child - componentDidMountSecond child
// Parent - componentDidMount