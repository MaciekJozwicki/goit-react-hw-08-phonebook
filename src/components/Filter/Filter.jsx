import { useDispatch } from 'react-redux';
import { setFilter } from '../../redux/contactsSlice';
import { filterContact } from '../../redux/filtersSlice';

const Filter = () => {
  const dispatch = useDispatch();

  const handleChange = e => dispatch(filterContact(e.target.value));

  return (
    <label>
      Find contacts by name
      <input type="text" name="filter" onChange={handleChange} />
    </label>
  );
};

export default Filter;
