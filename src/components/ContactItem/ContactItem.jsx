import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';
import styled from 'styled-components';

import PropTypes from 'prop-types';

export const ContactItem = ({ id, name, number }) => {
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteContact(id));

  return (
    <Item>
      <span>{name}: </span>
      <span>{number} </span>

      <Button type="button" onClick={handleDelete}>
        Delete
      </Button>
    </Item>
  );
};

ContactItem.propTypes = {
  onDelete: PropTypes.func,
  id: PropTypes.string,
  name: PropTypes.string,
  number: PropTypes.string,
};

const Item = styled.div`
  width: 340px;
  font-size: 18px;
  display: flex;

  justify-content: space-between;
  align-items: center;

  :not(:last-child) {
    margin-bottom: 8px;
  }
`;

const Button = styled.button`
  display: inline-block;
  padding: 6px 10px;
  margin: 4px;
  font-size: large;
 
  border: 1px solid black;
  border-radius: 4px;
  background-color: transparent;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  :hover,
  :focus {
    background-color: #fc035e;
    color: white;
    border: 1px solid #fc035e;
  }
`;
