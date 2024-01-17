import { useState } from 'react';
import { useParams, useLocation } from 'react-router';
import { updateContact } from '../../redux/operations';
import { selectToken } from '../../redux/selectors';
import { useDispatch, useSelector } from 'react-redux';

const UpdateContact = () => {
  const { id } = useParams();
  const location = useLocation();
  const token = useSelector(selectToken);
  const { name, number } = location.state;
  const dispatch = useDispatch();

  console.log(name, number);

  const [contact, setContact] = useState({
    name: '',
    number: '',
  });

  

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
    // usedispatch updateContact i mu przekazujesz id, name, number i token jeszcze
    // w inputach mozesz jako placeholder wyswietlac obecne dane kontaktu
    // ten komponent moglbys zmienic na Pages zamiast zeby byl w komponentach
    // po wpisaniu danych w input one sie nie zmieniaja, zrob sobie console log tego state contact to zobaczysz ze jest lipa i tez po wpisaniu w pola input nie zmienia sie ich wartosc na froncie
    // reszta tasków jest w app.jsx
  };

  return (
    <div>
      <div>
        <h2>Edit Contact</h2>
        <form onSubmit={e => onSubmit(e)}>
          <div>
            <input
              type="text"
              name="name"
              value={name}
              onChange={e => onInputChange(e)}
              placeholder="Enter Your Name"
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              name="number"
              value={number}
              onChange={e => onInputChange(e)}
              placeholder="Number"
            />
          </div>

          <button>Update Contact</button>
        </form>
      </div>
    </div>
  );
};
export default UpdateContact;
