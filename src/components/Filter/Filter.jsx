import { useSelector, useDispatch } from 'react-redux';
import { setFilter } from 'redux/filterSlice';
import styled from 'styled-components';
import PropTypes from 'prop-types';

export const Filter = () => {
  const filter = useSelector(state => state.filter);

  const dispatch = useDispatch();
  const onCnange = evt => dispatch(setFilter(evt.target.value));

  console.log('filter', filter);
  return (
    <Label htmlFor="filter">
      Find contact by name
      <Input type="text" name="filter" value={filter} onChange={onCnange} />
    </Label>
  );
};

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};

const Label = styled.label`
  display: block;
  font-size: 18px;
  font-weight: 500;
  margin: 10px 0 8px 24px;
`;

const Input = styled.input`
  display: block;
  margin: 8px 0 0 8px;
  height: 32px;
  width: 220px;
  outline: none;
  border: 1px solid black;
  border-radius: 4px;
`;
