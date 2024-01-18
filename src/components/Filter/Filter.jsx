import { useDispatch } from 'react-redux';

import { filterContact } from '../../redux/filtersSlice';
import { TextField } from '@mui/material';

const Filter = () => {
  const dispatch = useDispatch();

  const handleChange = e => dispatch(filterContact(e.target.value));

  return (
    <TextField
      sx={{ p: 2 }}
      type="text"
      name="filter"
      placeholder="Find contact by name"
      onChange={handleChange}
    />
  );
};

export default Filter;
