import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../../redux/operations';
import { Link, useNavigate } from 'react-router-dom';
import { selectToken } from '../../redux/selectors';
import { Box, Button, TextField, Typography } from '@mui/material';

const Login = () => {
  const dispatch = useDispatch();
  const token = useSelector(selectToken);
  const navigate = useNavigate();

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
      email: email,
      password: password,
    };

    dispatch(loginUser(data));
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
          Login
        </Button>
      </form>
    </>
  );
};
export default Login;
