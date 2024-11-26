import React from "react";

class Profile extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      count2: 0,
    };
    console.log("Child - Constructor" + this.props.name)
  }

  componentDidMount(){
    console.log("Child - componentDidMount" + this.props.name )
  }

  render() {
    console.log("Child - render" + this.props.name)
    return (
      <div>
        {/* <h1>Profile Class Component</h1> */}
        <h2>Name: {this.props.name}</h2>
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
