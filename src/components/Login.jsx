import { Link } from "react-router-dom";

export const Login = ({ author, setAuthor }) => {
  console.log(author);

  return (
    <div id="login-container">
      <h1>Welcome!</h1>
      <label>Please select a User: </label>
      <select
        value={author}
        onChange={(e) => {
          setAuthor(e.target.value);
        }}
      >
        <option value="tickle122">tickle122</option>
        <option value="grumpy19">grumpy19</option>
        <option value="happyamy2016">happyamy2016</option>
        <option value="cooljmessy">cooljmessy</option>
        <option value="weegembump">weegembump</option>
        <option value="jessjelly">jessjelly</option>
      </select>
      <Link to="/reviews">
        <button>Login</button>
      </Link>
    </div>
  );
};
