import { useState, useEffect } from 'react';
import { useParams, useLocation } from 'react-router';
import { updateContact } from '../../redux/operations';
import { selectToken } from '../../redux/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Box, Button, TextField, Typography } from '@mui/material';

const UpdateContact = () => {
  const { id } = useParams();
  const location = useLocation();
  const token = useSelector(selectToken);
  const { name, number } = location.state;
  const dispatch = useDispatch();

  const [contact, setContact] = useState({
    name: '',
    number: '',
  });

  useEffect(() => {
    setContact({ name, number });
  }, [name, number]);

  const onInputChange = e => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  };

  const onSubmit = async e => {
    e.preventDefault();

    dispatch(
      updateContact({
        token: token,
        id: id,
        name: contact.name,
        number: contact.number,
      })
    );
  };

  return (
    <>
      <Box sx={{ m: 18, p: 3, borderStyle: 'dotted', borderRadius: '20px' }}>
        <Typography
          sx={{
            display: 'flex',
            backgroundColor: 'orange',
            width: 125,
            height: 35,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Link
            style={{
              textDecoration: 'none',
              color: 'black',
              hover: { color: 'red' },
            }}
            to="/login"
          >
            Back to contacts
          </Link>
        </Typography>

        <h2>Edit Contact</h2>

        <form
          style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}
          onSubmit={e => onSubmit(e)}
        >
          <TextField
            type="text"
            name="name"
            value={contact.name}
            onChange={e => onInputChange(e)}
            placeholder="Enter Your Name"
            sx={{ width: '300px' }}
          />

          <TextField
            type="text"
            name="number"
            value={contact.number}
            onChange={e => onInputChange(e)}
            placeholder="Number"
            sx={{ width: '300px' }}
          />
          <Button
            sx={{
              display: 'flex',
              backgroundColor: 'orange',
              width: 125,
              height: 55,
              justifyContent: 'center',
              alignItems: 'center',
            }}
            type="submit"
          >
            {`Update contact`}
          </Button>
        </form>
      </Box>
    </>
  );
};
export default UpdateContact;
