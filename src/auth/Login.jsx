import { useState } from "react";
import bcrypt from "bcryptjs";
import { useDispatch } from "react-redux";
import { login } from "../store/user-slice";

const Login = () => {

  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLogin = () => {
    dispatch(login());
    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (!storedUser) {
      alert("User not found");
      return;
    }

    if (
      storedUser.username === formData.username &&
      bcrypt.compareSync(formData.password, storedUser.password)
    ) {
      alert("Login successful!");
    } else {
      alert("Invalid username or password");
    }
  };

  return (
    <div>
      <div className="mb-3">
        <input
          type="text"
          name="username"
          className="form-control"
          placeholder="Username"
          value={formData.username}
          onChange={handleChange}
        />
      </div>
      <div className="mb-3">
        <input
          type="password"
          name="password"
          className="form-control"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
        />
      </div>
      <button onClick={handleLogin} className="btn btn-primary">Login</button>
    </div>
  );
};

export default Login;
