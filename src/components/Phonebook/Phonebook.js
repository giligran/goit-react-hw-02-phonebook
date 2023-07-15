import React from 'react';
import ContactForm from './ContactForm';
import ContactList from 'components/Phonebook/ContactList';
class Phonebook extends React.Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  formSubmitHandler = data => {
    const { contacts } = this.state;
    const { name } = data;
    if (contacts.find(contact => contact.name === name)) {
      alert(`${name} already in contact list`);
      return;
    }
    this.setState(({ contacts }) => ({
      contacts: [...contacts, data],
    }));
  };

  deleteContact = id => {
    this.setState(({ contacts }) => ({
      contacts: contacts.filter(contact => contact.id !== id),
    }));
  };

  changeInput = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value.trim() });
  };

  render() {
    const { contacts, filter } = this.state;
    return (
      <>
        <ContactForm onSubmit={this.formSubmitHandler} />
        <h2>Contacts</h2>

        <label>
          Find contacts by name
          <input name="filter" onChange={this.changeInput}></input>
        </label>
        <ContactList
          users={contacts}
          filter={filter}
          onDelete={this.deleteContact}
        />
      </>
    );
  }
}

export default Phonebook;
