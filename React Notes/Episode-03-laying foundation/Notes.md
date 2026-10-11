There are 2 types of components :

* Class Based Components- Old way to create components
* Functions Based components - new way 


import React from "react";
import ReactDOM from "react-dom/client";

// React.createElement => Object => when we render it on DOM -> HTML Element

// JSX is not HTML in JS -> It is HTML like or XML-like syntax 

// const jsxHeading = <h1 id="heading">Hello from JSX</h1>

// *JSX is transpiled befre it reaches the JS Engine. - 
// *It is done by Parcel's package -> Babel Transpiler (installed by parcel automatically)

// * Babel transpiles JSX to React.createElement() function call which returns an object. 
// * This object is then rendered on the DOM by ReactDOM.render() function.


// React Funtion Component - A function which returns JSX or React.createElement() function call

const Title = () => (
    <h1 className="title" id="title" tabIndex="1">
        Namaste Ract from Title😎
    </h1>
)

// If we want to put normal React element inside a React component, we can do that by using curly braces {}.
const reactElement = (
    <h2 className="react-element" id="react-element" tabIndex="2">
        Namaste React from React Element😎
    </h2>
)

// *This is called Component Composition - A component can be used inside another component.
const HeadingComponent = () => (
    <div id="container">
        <Title />
        {1000 * 2}
        {reactElement}
        <h1 id="heading">Hello from Heading</h1> 
     </div>
)
// ? these two syntax is same - Heading Component.

// const HeadingComponent = () => {
//     return  <h1 id="heading">Hello from JSX</h1> 
// }

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(jsxHeading);

// * This is how we render a React Component on the DOM.
root.render(<HeadingComponent />);
