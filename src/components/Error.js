import {useRouteError} from "react-router";


const Error = () => {
    const error = useRouteError();
    console.log(error);
  return (
    <div className="error">
      <h1>Oops! Something went wrong.</h1>
      <p>We apologize for the inconvenience. Please try again later.</p>
      <p>Error Details: {error.status} - {error.statusText}</p>
    </div>
  );
};

export default Error;
