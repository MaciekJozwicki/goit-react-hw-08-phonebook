import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchContacts, registerUser } from '../../redux/operations';
import { Link } from 'react-router-dom';
import { Box, Button, TextField, Typography } from '@mui/material';

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
      <Box sx={{ m: 3 }}>
        <Typography
          variant="h6"
          component="div"
          sx={{
            flexGrow: 1,
            color: 'black',

            textDecoration: 'none',
            fontWeight: 'bold',
            fontSize: '20px',
            fontFamily: 'Roboto',
          }}
        >
          <Link to="/">Home</Link>
        </Typography>
      </Box>

      <form onSubmit={e => handleSubmit(e)}>
        <TextField
          id="outlined-basic"
          label="Name"
          variant="outlined"
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <TextField
          id="outlined-basic"
          label="Email"
          variant="outlined"
          name="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <TextField
          id="outlined-basic"
          label="Password"
          variant="outlined"
          name="password"
          type="password"
          value={password}
          placeholder="password"
          onChange={e => setPassword(e.target.value)}
        />
        <Button variant="contained" type="submit" sx={{ m: 2 }}>
          Register
        </Button>
      </form>
    </>
  );
};
export default Register;
