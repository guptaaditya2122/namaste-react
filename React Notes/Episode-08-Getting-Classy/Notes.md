*class based components*: Asked in interviews a lot

* Example of Class based component - Rest calling this component , importing, exporting are all same

import React from "react";
class UserClass extends React.Component {
    render(){ // Basically In class based component there is a render method that returns a JSX
        return (
            <div className="user-card">
            </div>
        )
    }
}

export default UserClass;

* In order to receive props in class based component you receive it in constructor(props) and also in super(props)
contructor(props){
  super(props)   // This is important
}

*Why do you write super(props) in class based compomnent to receive props*

* In React, you write super(props) inside a constructor to initialize the parent class constructor (React.Component) and bind this.props so it can be accessed within the constructor itself.
* Without calling super(), JavaScript will throw a reference error when you try to use the this keyword. Without explicitly passing props into it, this.props will return undefined inside that constructor block

* Why JavaScript Demands super() - 
In JavaScript, a class that extends a parent class is known as a derived class or subclass. According to the language rules, a subclass cannot use the this keyword until it has called its parent's constructor. Calling super() executes the constructor of React.Component, which officially assigns and sets up the this context for your custom component.

* Why React Demands Passing props 
While super() initializes this, passing props into it fixes a specific scope issue inside the constructor.With super(props): React maps the incoming properties to this.props immediately. You can freely run logs or create a state based on props right away.
With just super(): You can still access props (the local argument passed into the constructor), but this.props will remain undefined until the constructor finishes executing and React assigns it externally

* Never update state variables in class based component directly
for example :  this.state.count = this.state.count + 1  ❌❌❌❌ *Never do it like this* .

* In class Based component React gives a special method *this.setState* to update state variables & we will pass object in this
this object will contain updated value of state variable

example : this.setState({
              count: this.state.count + 1,
            });

* Even if there are multiple state variables if you only update some of them react will not disturb/touch  other variables


*Life cycle of React Components*:
loading component = mounting component onto the webpage
CBC = class based component

* In a class based components when the instance of class is instantiated and is loaded into ui
first the constructor of class component will be called and then render method will be called (you can do console to check)
If there is a parent CBC and a child CBC then first constructor and render of parent will be called then constructor and render method of child will be callled.

* After these two are called there is a lifecycle hook *componentDidMount* in class based component which is called. 

*all these 3 methods contitutes a life cycle of react component*

* componentDidMount is called once the component has been mounted onto UI
so lets say there is a parent CBC and child CBC along with componentDidMOunt method then 
1. parent contructor is called
2. parent render is called 
3. while rendering it encounters child CBC so its create a instance of it (right now parent CBC is not completely mounted)
4. Child contructor is called
5. child render is called
6. child has finished rendering now child componentDidMOunt is called
7. after everyting is rendered (child has been mounted) then parent componentDidMount is called


* Now if had multiple child CBC in parent CBC then the result will be different

![alt text](image.png)

So according to this image there are *two phase for react lifecycle first is render phase &  second is commit phase*
in render phase constructor and render is called and in commint phase react updates DOM and then call componentDidMount 

so when we have multiple child CBC (example About component) then React basically first combines the rendering phase of
both components since react optimises the rendering due to Reconciliasation Algo so it batch together the rendering of both component together. Since render phase is fast and commit phase takes time. -> Bacthes the render pahse.

and once this is done it updates dom and after that componentDidMount is called one by one in a batch 

Because DOM manipulaiton is expensive so react batches the task together to make it fast and more efficient

-parent
  -child 1
  -child 2

result: 
  -parent constructor
  -parent render

   -child 1 contructor
   -child 1 render

   -child 2 constructor
   -child 2 render

 <DOM Upddated in Single batch>
 -child 1 componentDidMount
 -child 2 componentDidMount
 -parent componentDidMount



* Why *componentDidMount* is called or used ? 
-> In CBC once the component has been mounted it is used to call apis to fetch data

* Why api is called inside it 
-> since in Functional based component FBC also we first render a component as fast as possible then makes a apis call then renders it again so that react does not wait for api to give data and blocks rendering in the meantime

Similarly in CBC also we first render the component as fast as possible after that we call api in componentDidMount so thatthe intial render happens and based on api data and state changes react will render it again.

<After ComponentDidMount>

another lifecycle method is called *componentDidUpdate* which is called after React updates the compomnent on some state changed
variables

-------Mounting--------
-constructor
-render (dummy data)
  <HTML Dummy data>
-componentDidMount
  <api call>
  <this.setState> -> state variable is upadted

-----Update----------
-render (API data)
-<HTML api data>
-componentDidUpdate


*componentWillUnmount* : When component is removed from UI or it is unmounted


*componentDidMOunt !== useEffect* do not say this ❌ 
Never ever compare react CBC lifecycle methods to functional components

* So if i want to clear something on component unmounting we write it in componentWillUnmount like setIntervals, setTimeOut ,etc
inside CBC and in functional Copmponent if we use setTinerval inside useEffect If we do not handle it it will not clear Interval
after component unmounting.

* IN order to mimic or clear the intervals,settimeout in functinal components there is a function that we can return at end of useEffect which will run when you switch page or component or unmounting component.

<IN Functional Component-----cleanup>
useEffect(()=>{
  fetch()
  const timer = setInterval(()=>{})
  ....
  ...

*cleanup function*
  return ()=>{
    // this will run when component is unmounted
    clearInterval(timer)
  }
},[])


<In Class based component>
  componentDidMount(){
    this.timer = setInterval(()=>{

    })
  }


*cleanup function*

componentWillUnmount(){
   // this will run when component is unmounted
  clearInterval(this.timer)
}


* You cannot pass an async function directly to useEffect because useEffect expects its callback to return either a cleanup function or nothing (undefined), whereas an async function automatically returns a Promise
When you mark a function as async, JavaScript automatically wraps its return value in a Promise. This creates two fundamental conflicts with how React manages component lifecycles:

 * React relies on the returned function from useEffect to clean up side effects (like unsubscribing from WebSockets or clearing timers) before the component unmounts or before the effect runs again. If you pass an async function, React receives a Promise instead of a synchronous cleanup function. React does not know how to handle a Promise return, so your cleanup logic will never execute.
 
 * Race Conditions: React needs cleanup operations to happen synchronously right before the next cycle or unmount. A Promise resolves asynchronously, meaning the cleanup would be deferred. This timing delay frequently triggers race conditions and memory leaks where state updates are attempted on components that no longer exist.


<example of correctly using async inside useEffect> : 

useEffect(() => {
  // 1. Declare the async function inside
  const fetchData = async () => {
    try {
      const response = await fetch('https://api.example.com/data');
      const data = await response.json();
      setData(data);
    } catch (error) {
      console.error(error);
    }
  };

  // 2. Call it immediately
  fetchData();

  // 3. Return a standard, synchronous cleanup function if needed
  return () => {
    console.log('Cleanup runs perfectly here!');
  };
}, []);