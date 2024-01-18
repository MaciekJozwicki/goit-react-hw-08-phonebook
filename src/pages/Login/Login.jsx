import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../../redux/operations';
import { Link, useNavigate } from 'react-router-dom';
import { selectToken } from '../../redux/selectors';

const Login = () => {
  const dispatch = useDispatch();
  const token = useSelector(selectToken);
  const navigate = useNavigate();

  const [email, setEmail] = useState('ddd@test.pl');
  const [password, setPassword] = useState('dddddddd');

  useEffect(() => {
    if (token) {
      navigate('/contacts');
    }
  }, [token, navigate]);

  const handleSubmit = e => {
    e.preventDefault();

    const data = {
      email: email,
      password: password,
    };

    dispatch(loginUser(data));
  };

  return (
    <>
      <Link to="/">Home</Link>
      <form onSubmit={e => handleSubmit(e)}>
        <input
          type="email"
          name="email"
          placeholder="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <input
          type="password"
          name="password"
          value={password}
          placeholder="password"
          onChange={e => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
    </>
  );
};
export default Login;
