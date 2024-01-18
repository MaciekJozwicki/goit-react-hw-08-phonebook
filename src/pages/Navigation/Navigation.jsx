// import { Link } from 'react-router-dom';

// const Navigation = () => {
//   return (
//     <nav>
//       <ul>
//         <li>
//           <Link to="/">Home</Link>
//         </li>
//         <li>
//           <Link to="/register">Register</Link>
//         </li>
//         <li>
//           <Link to="/login">Login</Link>
//         </li>
//       </ul>
//     </nav>
//   );
// };
// export default Navigation;

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

import IconButton from '@mui/material/IconButton';

import { Link } from 'react-router-dom';

export default function Navigation() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          ></IconButton>
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
            <Link to="/register">Register</Link>
          </Typography>
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
            <Link to="/login">Login</Link>
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
