import { lazy, Suspense, useEffect, useState } from "react";
import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./components/Cart";
// import Grocery from "./components/Grocery";

//Chunking
//Code Splitting
//On Demand Loading
//Dynamic Loading

const Grocery = lazy(() => import("./components/Grocery"));

const AppLayout = () => {
  const [userName, setUserName] = useState();

  // Authentication
  useEffect(()=>{
    // Make api call and send userName / Pass
    const data = {
      name : "Aditya Gupta"
    }
    setUserName(data.name);
  },[])




  return (
    <Provider store={appStore}>
    <UserContext.Provider value={{loggedInUser:userName , setUserName}}>
    <div className="app">
      <UserContext.Provider value={{loggedInUser:"Elon Musk"}}>
      <Header />
      </UserContext.Provider>
      <Outlet /> 
      {/* This outlety/ will be replaced based on the routes and that component will be displayed here  */}
    </div>
    </UserContext.Provider>
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
        
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/grocery",
        element: <Suspense fallback ={<h1>Loading......</h1>}><Grocery/></Suspense>,
      },
      {
        path: "/restaurants/:resId",
        // resId is dynamic , it can change based on diff restaurants
        element: <RestaurantMenu />,
      },
      {
        path: "/cart",
        // resId is dynamic , it can change based on diff restaurants
        element: <Cart />,
      },
    ],
    
    // To show error page when user enters wrong url, we can use errorElement property in the route object and pass the component to be rendered in case of error.
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
