import { useDispatch, useSelector } from 'react-redux';
import { removeContact } from '../../redux/operations';
import { selectVisibleContacts, selectToken } from '../../redux/selectors';
import { Link } from 'react-router-dom';
import { Button, Typography } from '@mui/material';
import ListItemText from '@mui/material/ListItemText';
import { orange } from '@mui/material/colors';

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectVisibleContacts);
  const token = useSelector(selectToken);

  return (
    <ul>
      {contacts
        ? contacts.map(contact => (
            <ListItemText
              key={contact.id}
              sx={{
                m: 2,
                p: 1,
                fontSize: '18',
                border: '2px solid ',
                borderRadius: '5px',
              }}
            >
              Name : {contact.name} Number : {contact.number}
              <Button
                sx={{ p: 1 }}
                onClick={() =>
                  dispatch(removeContact({ id: contact.id, token: token }))
                }
              >
                Delete
              </Button>
              <Typography
                sx={{
                  display: 'flex',
                  backgroundColor: orange[500],
                  width: 125,
                  height: 35,
                  justifyContent: 'center',
                  alignItems: 'center',
                  ml: 2,
                }}
              >
                <Link
                  style={{
                    textDecoration: 'none',
                    color: 'black',
                    hover: { color: 'red' },
                  }}
                  to={`/contacts/${contact.id}`}
                  state={{ name: contact.name, number: contact.number }}
                >
                  Update contact
                </Link>
              </Typography>
            </ListItemText>
          ))
        : null}
    </ul>
  );
};

export default ContactList;
