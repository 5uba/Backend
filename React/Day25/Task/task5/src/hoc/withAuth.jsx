import { useContext } from "react";
import AuthContext from "../context/AuthContext";

function withAuth(Component) {
  function ProtectedComponent(props) {
    const { user } = useContext(AuthContext);

    if (!user) {
      return <h2 className="p-4">Please Login</h2>;
    }

    return <Component {...props} />;
  }

  return ProtectedComponent;
}

export default withAuth;