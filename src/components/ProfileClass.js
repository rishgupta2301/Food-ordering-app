import React from "react";

class Profile extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo:{
        name:"dummyName",
        location:"dummy location"
      }
    };
    console.log("Child - Constructor" + this.props.name)
  }

  async componentDidMount(){

    // const data = await fetch(" https://api.github.com/users/rishgupta2301");
    // const json = await data.json();
    // console.log(json);

    // this.setState({
    //   userInfo: json,
    // })

    setInterval(() => {
      console.log("heyy"); /** THIS IS THE PROBLEM OF SINGLE PAGE APPLICATION AS EVEN IF WE CHANGE THE PAGE/COMPONENT THE PAGE IS 
      NOT RELOADING AND THERE ARE MULTIPLE SET INTERVALS AS YOU CAN SEE IN THE CONSOLE LOG AND AFTER SOMETIMES ITS LOGGING TWICE AND 
      THRICE EVERY SECOND SO THATS WHY IT IS IMPORTANT TO UNMOUNT TO BUILD A LARGE AND SCALABLE APP */
    }, 1000);

    console.log("Child - componentDidMount" + this.props.name )
  }

  componentDidUpdate(){
    console.log("componentDidUpdate");
  }

  componentWillUnmount(){
    console.log("componentWillUnmount");
  }

  render() {
    console.log("Child - render" + this.props.name)
    return (
      <div>
        {/* <h1>Profile Class Component</h1> */}
        <img src={this.state.userInfo.avatar_url} />
        <h2>Name: {this.state.userInfo.login}</h2>
        <h2>location: {this.state.userInfo.location}</h2>
        <h2>XYZ: {this.props.xyz}</h2>
        <h2>Count: {this.state.count}</h2>
        <button onClick={()=>{
            this.setState({
                count:1
            })
        }} >SetCount</button>
      </div>
    );
  }
}

export default Profile;



/**
 * 
 *  Child constructor
 * child render
 * child componentDidMount
 * 
 * API call
 * Set State
 * 
 * <UPDATE CYCLE> that means now the updating phase will start, earlier it was the mounting phase that was going on
 * 
 * render method is called
 * react updates the DOM
 * componentDidUpdate is called
 * 
 * 
 * 
 */