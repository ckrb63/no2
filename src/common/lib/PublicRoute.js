import { Route } from "react-router-dom";
import isLogin from "./isLogin";
import { Navigate } from "react-router-dom";

const PublicRoute = ({ component: Component, restricted, ...rest }) => {
    return (
      <Route
        {...rest}
        render={(props) => (isLogin && restricted ? <Navigate to="/" /> : <Component {...props} />)}
      />
    );
  };
  
  export default PublicRoute;