import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts, logoutUser } from '../../redux/operations';
import { selectToken } from '../../redux/selectors';
import ContactList from 'components/ContactList/ContactList';
import ContactForm from 'components/ContactForm/ContactForm';
import Filter from 'components/Filter/Filter';

const Contacts = () => {
  const token = useSelector(selectToken);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts(token));
  }, [dispatch, token]);

  const handleSubmit = e => {
    e.preventDefault();
    
    dispatch(logoutUser(token));
  };

  return (
    <>
      <ul>
        <button onClick={handleSubmit}>LogOut</button>
        <ContactForm />
        <Filter/>
        <ContactList />
      </ul>
    </>
  );
};
export default Contacts;
