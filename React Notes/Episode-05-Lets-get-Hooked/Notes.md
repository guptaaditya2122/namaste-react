# The primary difference is that .js denotes standard JavaScript, while .jsx explicitly indicates a file contains JavaScript XML (JSX) syntax for React UI components

* Never ever keep hard coded data in component folder

* Two types of Export / import

* export const restaurantList creates a *named export*. It must be imported with braces: 
Eg : 
 <!--
mockData.js
* export const restaurantList = [...];

Body.js
* import { restaurantList } from "../utils/mockData"; -->


* With export default, the module has one  *default export*, so import it without braces:

<!-- 
mockData.js
*const restaurantList = [...];
*export default restaurantList;

 Body.js
*import restaurantList from "../utils/mockData";

 -->


* By default file can export only one thing there we can use *export default*  But If we have multiple export
use *export const varName*

* React hooks
(Normal JS functions)
useState() -> whenever state variable is updated / changes React re-render the component
useEffect()