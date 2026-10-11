*useEffect (()=>{}, [])* : first argument is callback function and second is dependency array
This useEffect is called everytime when component renders

- If no Dependency array , useEffect id called on every component render
- If [] empty dependency array , useEffect is called on only initial render and just once when component is rendered for the first time.
- If there is something in dependency array eg: [any stateVariable] , and everytime this stateVariable changes , useEffect will be called.

*useEffect is always called on first render* and then afterwards it depends on dependency array

*useState* :

- It is used for creating local state vaiable inside your functional component.
- Never use useState outside your component
- Never use your useState variable inside if/else or any condition or loops or functions.

- To install react router pacakge : npm i react-router-dom

Whenever we use routing we have to create routing configuration(some info that defines what will happen on specific path/route) in our project -> app.js

const appRouter = createBrowserRouter([]) -> inside this list we provide objects of path and what element to load on that path
eg: {
path: "/about",
element: <About/>
}

- Once we have defined the configuration we need to provide this config to react to render it for that we use another component called RouterProvider provided by React
  This *RouterProvider* will provide this routing config to our app

- Earlier we were rendering this appLayout component in app.js directly now instead of this we weill provide Router Configuration here for rendering
  eg: root.render(<RouterProvider router={appRouter} />);

- To show error page when user enters wrong url, we can use errorElement property in the route object and pass the component to be rendered in case of error.
  {
  path: "/about",
  element: <About />,
  errorElement: <Error />,
  },

* React router dom gives us access to imp Hook called *useRouteError*
to show more details in error 

* Childern Routes : in order to use multiple routes/naviagtion  under Header component we need to use something called  *Outlet*  provided by React Router so that upon recieveing the specific route it will replace the Outlet with the component associated with that route.


* *Link* is a component (works excatly like anchor tag) that is given by react-router to create a link or type of anchor tag in react for navigating via routing
the diff between anchor tag and Link is that Link does not cause the whole component to reload, whereas if you use anchor tag for link and upon clicking it will relaod the whole component and we do not want this in react.

* Link is a feature provided by React(It is basically a wrapper around anchor tag so that it does not relaod the whole page while navigating)& Behind the scenes in browser Link component uses anchor tag <a> 


* *SPA* : Single Page Application - React application are SPAs becasue there is only one whole signle component displayed on Browser and all the other pages are just components switching within this single component only via routes 

* There are 2 types of Routing:

- *Client Side Routing* : And this application with React is Client side routing we are not making any network call for moving to different page.

- *Server Side Routing* : Means , you have index.html, about.html, etc If I click on my anchor tag -> About , it reload the whole page -It sends the request to about.html fetches the html and renders it on webpage. 


*useParams* : It is used to get params from path , This hook is providede by React-router
