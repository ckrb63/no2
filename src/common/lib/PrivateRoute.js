import { Route } from "react-router-dom";
import isLogin from "./isLogin";
import { Navigate } from "react-router-dom";
const PrivateRoute = ({ component: Component, ...rest }) => {
    return (
      // Show the component only when the user is logged in
      // Otherwise, redirect the user to /login page
      <Route
        {...rest}
        render={(props) => (isLogin ? <Component {...props} /> : <Navigate to="/" />)}
      />
    );
  };
  
  export default PrivateRoute;