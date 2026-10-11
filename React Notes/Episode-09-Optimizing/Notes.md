*Single Responsibility Principle*:
It means the every functional component or CBC should have a single specific responsibility.

* Hooks are basically utility functions which in turn a simple JS function.

*Custom Hooks*:

* while creating custom hooks always use "use" keyword infornt of it so that react can recognize that this is a hook. (It is recommended)
Eg; useRestaurantMenu; useOnlineStatus

* The js file that is created by parcel after bundling -> Its size increases based on how much component it holds
We do not keep all the components in one js file because it will be of very big size (though in prod build it minifies a lot)

Alwasys break your app into smaller pieces -> that means if possible try to break a index file that is created after bundling into multiple not thousands but more than 1 so that all the component is not in one file and it wont take time to load on UI

*Chunking / Code Splitting / Dynamic Loading / Dynamic Bundling* : This means we have to break our application into smaller chunks, split the code , bundling in the dynamic way.

* How to make smaller Bundles, When to make smaller bundles ? 

Lets say in our app instead of just havng food delivery we also have groxery delivery (It also has lots of components)
So we will make different bundle of grocery and different bundle of food delievery or main bundle
(this is how based on feature we can spilt our bundle)

* Just like in Make my trip for all the hotels, flights, homestays we can separate bundles for each vertical  instead of having
just one bundled file (created by bunlder like Parcel etc ) and split into mulitple chunks which can load based on necessary and thus in return optimize our app.


* Now we have Grocery Component which has lots of child component which will only load when we click on Grocery link from Header
that way we will not load its code in bundle file untill it is necessary

in order to break it into chunks we use something callled *Lazy loading*. This lazy loading allows the component to only lazily load when we click certain Link or go to that page.

syntax :  const Grocery = lazy(()=>{import(path of component)})  <This lazy functino uses a callback function which has import  function in it to call the component lazily >

<This line code is used to optimize app and improve performance by splitting the code and lazily load when required which in turns let the react to laod app fast>

* Now only using lazy laod any component and it will not work and will give error because when you click the link to load the Grocery component react takes some sec/milisec to load it and for that time duration it does not find the component so React suspends the rendering of app.

* In order to prevent this we use *Suspense* component provide by react which waits for that time frame and show some fallback UI code untill component is loaded

* The component that is being lazily load needs to be wrapped with this *Suspense* component and fallback attribute is used to pass fallback UI code or some loading component.

example :  
    {
        path: "/grocery",
        element: <Suspense fallback ={<h1>Loading......</h1>}><Grocery /></Suspense>,
    },