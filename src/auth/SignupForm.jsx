import { useState } from 'react';
import { useDispatch } from 'react-redux';
import bcrypt from 'bcryptjs';
import { login } from '../store/user-slice';

const SignupForm = () => {

  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    username: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();


    // const storedUser = JSON.parse(localStorage.getItem("user"));
// console.log(storedUser.username.toLowerCase());
// console.log(e.target.name.toLowerCase());
// if (storedUser.username.toLowerCase() === e.target.name.toLowerCase()) {
//       alert("User already exists. Please Login");
//       return;
//       }
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords don't match");
      return;
    }

    // Hash password
    const hashedPassword = bcrypt.hashSync(formData.password, 10);

    // Save user data to localStorage
    localStorage.setItem('user', JSON.stringify({
      username: formData.username,
      password: hashedPassword
    }));
    dispatch(login());
    alert('Signup successful!');
  };

  return (
    <form onSubmit={handleSubmit}>
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
      <div className="mb-3">
        <input
          type="password"
          name="confirmPassword"
          className="form-control"
          placeholder="Confirm Password"
          value={formData.confirmPassword}
          onChange={handleChange}
        />
      </div>
      <button onClick={handleSubmit} className="btn btn-primary">Signup</button>
    </form>
  );
};

export default SignupForm;