import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../redux/operations';
import { selectToken } from '../../redux/selectors';
import { Button, TextField } from '@mui/material';

const ContactForm = ({ newContact }) => {
  const token = useSelector(selectToken);
  const dispatch = useDispatch();
  const [userData, setuserData] = useState({
    name: '',
    number: '',
  });

  const handleInput = e => {
    setuserData(prevState => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = e => {
    dispatch(
      addContact({
        token: token,
        name: userData.name,
        number: userData.number,
      })
    );
    e.preventDefault();

    setuserData({
      name: '',
      number: '',
    });
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="formEl__form">
        <TextField
          onChange={handleInput}
          value={userData.name}
          className="formEl__input"
          type="text"
          sx={{ p: 2 }}
          placeholder="Enter name"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />

        <TextField
          onChange={handleInput}
          value={userData.number}
          className="formEl__input"
          type="tel"
          sx={{ p: 2 }}
          placeholder="Enter number"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />

        <Button
          className="formEl__button"
          type="submit"
          variant="contained"
          color="primary"
          sx={{
            p: 1,
            mt: 3,
          }}
        >
          {'Add  Contact'}
        </Button>
      </form>
    </>
  );
};

export default ContactForm;
