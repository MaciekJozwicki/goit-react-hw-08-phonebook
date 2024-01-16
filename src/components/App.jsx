import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { fetchContacts, loginUser } from '../redux/operations';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';

const App = () => {
  const dispatch = useDispatch();

  const [email, setEmail] = useState('123321123@test.pl');
  const [password, setPassword] = useState('examplepwd12345');

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const handleSubmit = e => {
    e.preventDefault();

    const data = {
      email: email,
      password: password,
    };

    dispatch(loginUser(data));
  };

  // wynieść logowanie w inne miejsce
  // na tej samej zasadzie stworzyć rejestracje
  // wynieść zapis tokenu do axios albo po prostu brać go ze slice
  // 

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />

      <h2>Contacts</h2>
      <Filter />
      <ContactList />

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
    </div>
  );
};

export default App;
