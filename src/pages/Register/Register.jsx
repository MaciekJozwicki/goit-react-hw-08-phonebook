import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchContacts,  registerUser } from '../../redux/operations';
import { Link } from 'react-router-dom';

const Register = () => {
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const handleSubmit = e => {
    e.preventDefault();

    const data = {
      name: name,
      email: email,
      password: password,
    };

    dispatch(registerUser(data));
  };

  return (
    <>
      <Link to="/">Home</Link>
      <form onSubmit={e => handleSubmit(e)}>
        <input
          type="text"
          name="name"
          placeholder="name"
          value={name}
          onChange={e => setName(e.target.value)}
        />
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
export default Register;
