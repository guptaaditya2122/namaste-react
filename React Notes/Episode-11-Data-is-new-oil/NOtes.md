* Higher Order Component is a component that takes in a component and returns a component
examaple: RestaurantCard component

* Controlled / Uncontrolled Components

* *Lifting the state* up so that control of a state variable is moved from child to parent.
Read about it more

Lifting state up in React is the practice of moving shared state from individual child components to their closest common ancestor. In React, data flows downward (top-down data flow). When two or more sibling components need to reflect the same changing data or synchronize with one another, you "lift" the state up to their parent. The parent then passes that state back down to the children via props, along with callback functions to update it.

example in RestaurantCategory and RestaurantMenu

* *React Context API*: React Context is a built-in feature that allows you to share global data—like themes, user authentication, or language settings—across your component tree without manually passing props down through every level. This eliminates the problem known as prop drilling

* *createContext* given by react library to create context

*useContext(name of the context created)*: is react hook that is used to get value from context that we save at gloabl level to fetch that info anywhere in out app
* In Class based component since we cannot use hooks we need to use something called contextname.Consumer to fetch data 
it hav e callback function that retuen data which has access to data that we have stored in context
<UserContext.Consumer>
{(data)=> console.log(data)}
</UserContext.Consumer>


* Lets say if i want to update the loggedInUser value needs to be updated based on some authentication and current loggeddInUser name needs to be show so in order to provide new data / userName to the whole app we will use 
<UserContext.Provider>
    either wrap whole app inside these tags of particular component can also be wrapped so that only ehose component will be able to get the new value

</UserContext.Provider>

Eg 1: 
   <UserContext.Provider value={{loggedInUser:userName}}>
    <div className="app">
      <Header />
      <Outlet /> 
      {/* This outlety/ will be replaced based on the routes and that component will be displayed here  */}
    </div>
    </UserContext.Provider>

 Eg 2 :       
    <div className="app">
    <UserContext.Provider value={{loggedInUser:userName}}>
      <Header />
    </UserContext.Provider>

      <Outlet /> 
      {/* This outlety/ will be replaced based on the routes and that component will be displayed here  */}
    </div>

* you can even pass setMethod also in UserContext so that any component can change the userrName if required and access that method anywhere. 

Eg:  <UserContext.Provider value={{loggedInUser:userName , setUserName}}>