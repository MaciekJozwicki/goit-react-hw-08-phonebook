import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from '../redux/operations';
import Login from 'pages/Login/Login';
import Register from 'pages/Register/Register';
import Contacts from 'pages/Contacts/Contacts';
import { Route, Routes } from 'react-router';
import Navigation from 'pages/Navigation/Navigation';
import AuthRoute from './AuthRoute/AuthRoute';
import UpdateContact from './UpdateContact/UpdateContact';
import { selectToken } from '../redux/selectors';

const App = () => {
  const dispatch = useDispatch();
  const token = useSelector(selectToken);

  useEffect(() => {
    if (token) dispatch(fetchContacts());
  }, [dispatch, token]);

  return (
    <Routes>
      <Route path="/" element={<Navigation />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route element={<AuthRoute />}>
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/contacts/:id" element={<UpdateContact />} />
      </Route>
    </Routes>
  );
};

export default App;
