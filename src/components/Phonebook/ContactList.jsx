import React from 'react';
import PropTypes from 'prop-types'; // ES6

function ContactList({ users, filter, onDelete }) {
  return (
    <ul>
      {users
        .filter(({ name }) =>
          name.toLowerCase().includes(filter.toLowerCase().trim())
        )
        .map(({ id, name, number }) => {
          return (
            <li key={id}>
              {`${name}: ${number}`}
              <button onClick={() => onDelete(id)}>Delete contact</button>
            </li>
          );
        })}
    </ul>
  );
}

ContactList.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  filter: PropTypes.string,
  onDelete: PropTypes.func.isRequired,
};

export default ContactList;
