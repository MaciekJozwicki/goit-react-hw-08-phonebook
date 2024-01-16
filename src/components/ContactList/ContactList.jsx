import { useDispatch, useSelector } from 'react-redux';
import { removeContact } from '../../redux/operations';
import { selectVisibleContacts } from '../../redux/selectors';

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectVisibleContacts);

  return (
    <ul>
      {contacts
        ? contacts.map(contact => (
            <li key={contact.id}>
              Name: {contact.name} Number: {contact.number}
              <button onClick={() => dispatch(removeContact(contact.id))}>
                Delete
              </button>
            </li>
          ))
        : null}
    </ul>
  );
};

export default ContactList;
