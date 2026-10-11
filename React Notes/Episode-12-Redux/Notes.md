* Redux is not necessary to use in React depending on the project needs you can implement redux.
* Redux and React are two different.
* Redux is basically a state container/manager for JS apps :
which offers two libraries to us : 
1. React-Redux 
2. Rediux toolkit z: Newer or latest/trending way of writing redux 

* Now a days there are other librearies that are gaining popularity and among them one of them is *Zustand*

* You cannot directly modify the slices(small part of Redux's big object where we can store data based on its requirement. Eg: Cart slice will hold data related to cart, user slice, theme slice.) in redux or modify data in any slice.

* When you click on add button to add any food into cart Redux *dispatches an action* which in turn calls a function() .
This fun() internally modifies the cart slice.

* This Fn() is called a *Reducer*

* When you click a add button it dispatches an action which calls a Reducer funciton which in turn updates the slice Redux store.

*Selector* : We will use selector to read the data from our store and then update in our react component.

* When using this selector this phenomena is called *Subscribing to store* 

* So whenever on clicking on add button the slice is updated and since the header component's Cart is subscribed to Redux store its no of items will update automatically via selector and cart will be updated.

* In order to provide this store(create by Redux toolkit) to react application with the help of react-redux library which 
provides a *Provider* to import

* Then wrap our whole application inside <Provider store={appStore}> tag & provide appstore inside a store keyword.

* Providing store to react application is react-redux job

* In older version of redux we cannot mutate the state we always have to create a copy of state and modify that newState and return it(mandatory)
* But in newer version of Redux -> Redux Toolkit we have to mutate state this mutation issue which was not possible earlier has been solved by redux and now it requriewd to mutate state.Here returning is not mandatory

* In newer verison redux behind the scene is doing same older version thing. basically behind the scene it creates immutable state same as old version.

* Redux toolkit is using *Immer* library to find diff between original state, mutate state & gives you back new state

* In Redux slices if you want to console log state you need to use console.log(currret(state))

* Read about Redux Toolkit onredux websittes
