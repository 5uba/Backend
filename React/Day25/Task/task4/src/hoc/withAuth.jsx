
import { useContext } from "react";
import AuthContext from "../context/AuthContext";

function withAuth(Component) {
  function ProtectedComponent(props) {
    const { isLoggedIn } = useContext(AuthContext);

    if (!isLoggedIn) {
      return <h2>Please Login</h2>;
    }

    return <Component {...props} />;
  }

  return ProtectedComponent;
}

export default withAuth;
