import UserContext from "../utils/UserContext";
import UserClass from "./UsersClass";
import React from "react";

class About extends React.Component {
    constructor(props){
        super(props)

        console.log("Parent Constructor");
    }

    componentDidMount(){
        console.log("Parent component did mount callled");
    }

    render(){
        console.log("Parent render");
       return (
        <div className="about">
            <h2>About Us</h2>
             {/* in order to use Contxt in class based component */}
            <UserContext.Consumer>
                {(data)=><p className="text-lg font-black font-bold">{data.loggedInUser}</p>}
            </UserContext.Consumer>
            <UserClass username={"Child1"} location={"Delhi NCR"}/>
            {/* <UserClass username={"child2"} location={"Delhi NCR"}/> */}
        </div>
    ) 
    }
}

// const About = () => {
//     return (
//         <div className="about">
//             <h2>About Us</h2>
//             <UserClass name={"Aditya"} location={"Delhi NCR"}/>
//         </div>
//     )
// }

export default About;