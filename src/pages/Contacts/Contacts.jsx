import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts, logoutUser, refreshUser } from '../../redux/operations';
import { selectToken } from '../../redux/selectors';
import ContactList from 'components/ContactList/ContactList';
import ContactForm from 'components/ContactForm/ContactForm';
import Filter from 'components/Filter/Filter';
import { Box, Button } from '@mui/material';

const Contacts = () => {
  const token = useSelector(selectToken);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
    dispatch(fetchContacts(token));
  }, [dispatch, token]);

  const handleSubmit = e => {
    e.preventDefault();

    dispatch(logoutUser(token));
  };

  return (
    <>
      <ul>
        <Box sx={{ m: 18, borderStyle: 'dotted', borderRadius: '20px' }}>
          <Box sx={{ m: 3 }}>
            <Button variant="contained" color="primary" onClick={handleSubmit}>
              Log out
            </Button>
          </Box>
          <Box sx={{ m: 3 }}>
            <ContactForm />
          </Box>
          <Box sx={{ m: 3 }}>
            <Filter />
          </Box>
          <Box sx={{ m: 3 }}>
            <ContactList />
          </Box>
        </Box>
      </ul>
    </>
  );
};
export default Contacts;
