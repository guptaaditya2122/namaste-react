//Class based component
import React from "react";
class UserClass extends React.Component {
  // Basically In class based component there is a render method that returns a JSX
  constructor(props) {
    super(props);
    // in order to create state variable you use this.state

    this.state = {
      // count: 0,
      // // to create more variables
      // count2: 2,
      userInfo: {
        name: "Dummy",
        location: "",
        avatar_url: null,
      },
    };

    console.log(this.props.username + " child constructor");
  }

  async componentDidMount() {
    console.log(this.props.username + " child component Did mount called");
    const data = await fetch("https://api.github.com/users/guptaaditya2122");
    const jsonData = await data.json();
    this.setState({
      userInfo: jsonData,
    });
    console.log(jsonData);
  }

  componentDidUpdate() {
    console.log(this.props.username + " child component Did update called");
  }

  componentWillUnmount() {
    console.log("component will unmount");
  }

  render() {
    console.log(this.props.username + " child rendered");
    const { username } = this.props;

    // in order to destructure state variables
    const { name, location, avatar_url } = this.state.userInfo;
    return (
      <div className="user-card">
        {/* <h1>Count : {this.state.count}</h1>
        <h1>Count2 : {count2}</h1>
        <button
          onClick={() => { 
            this.setState({
              count: this.state.count + 1,
              count2: this.state.count2 + 2
            });
          }}
        >
          count increase
        </button> */}
        <img src={avatar_url} />
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h4>Contact: @adityaGupta</h4>
      </div>
    );
  }
}

export default UserClass;
