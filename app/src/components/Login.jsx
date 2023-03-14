import { Link } from "react-router-dom";

export const Login = () => {
  return (
    <div id="login-container">
      <h1>Welcome!</h1>
      <Link to="/reviews">
        <button>Login</button>
      </Link>
    </div>
  );
};
