import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { registerUser } from '../../redux/operations';
import { Link, useNavigate } from 'react-router-dom';
import { Box, Button, TextField, Typography } from '@mui/material';
import { selectToken } from '../../redux/selectors';

const Register = () => {
  const dispatch = useDispatch();
  const token = useSelector(selectToken);
  const navigate = useNavigate();
  console.log(token);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    if (token) {
      navigate('/contacts');
    }
  }, [token, navigate]);

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
