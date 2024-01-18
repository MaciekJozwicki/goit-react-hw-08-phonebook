import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { selectToken } from '../../redux/selectors';
import { Outlet } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const AuthRoute = ({ component: Component, ...rest }) => {
  const authState = useSelector(selectToken);
  const navigate = useNavigate();

  console.log(authState);
  useEffect(() => {
    if (!authState) {
      console.log(1333);
      navigate('/login');
    }
  }, [navigate, authState]);

  return <Outlet />;
};

export default AuthRoute;
