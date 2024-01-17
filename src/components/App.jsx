import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from '../redux/operations';
import Login from 'pages/Login/Login';
import Register from 'pages/Register/Register';
import Contacts from 'pages/Contacts/Contacts';
import { Route, Routes } from 'react-router';
import Navigation from 'pages/Navigation/Navigation';
import AuthRoute from './AuthRoute/AuthRoute';
import UpdateContact from './UpdateContact/UpdateContact';

// na podstawie innych repo zrobić refresh auth token
// zrobic widok update danych contact
// token zapisywac gdzies globalnie zamiast przekazywac go do funkcji i jak zrobisz zapis globalny to pousuwaj ten parametr z requestów i z funkcji do których go przekazujesz

const App = () => {
  const dispatch = useDispatch();

  // const [email, setEmail] = useState('123321123@test.pl');
  // const [password, setPassword] = useState('examplepwd12345');

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  // const handleSubmit = e => {
  //   e.preventDefault();

  //   const data = {
  //     email: email,
  //     password: password,
  //   };

  //   dispatch(loginUser(data));
  // };

  // wynieść logowanie w inne miejsce
  // na tej samej zasadzie stworzyć rejestracje
  // wynieść zapis tokenu do axios albo po prostu brać go ze slice
  //

  return (
    <Routes>
      <Route path="/" element={<Navigation />} />
      {/* <Route index element={<Navigation />} /> */}
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
