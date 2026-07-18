const heading = React.createElement("h1", { id: 'heading' }, "Hello World from React !");

// This {} is used to attributes to the element llike className, id, style, etc.
// All these elements (react) are object if you console them you will see the object representation of the element. 
// React uses this object to create the actual DOM element in the browser.
console.log(heading); // Returns object representation of the element.


{/* <div id="parent">
    <div id="child">
        <h1>I am h1 tag</h1>
    </div>

</div> */}

const parent = React.createElement("div", { id: 'parent' },
    React.createElement("div", { id: 'child' }, [
        React.createElement("h1", {}, "I am h1 tag"),
        React.createElement("h2", {}, "I am h2 tag")
    ]));


// If want to create sibling elements then we can use React.createElement() method and pass the elements as an array in the third argument of the parent element.



const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);
root.render(parent);



// ReactElement (Object) => HTML (Browser Understandable)
//While it is rendering on to DOM it converts this object into HTML element which the browser can understand and 
// render it on the screen.