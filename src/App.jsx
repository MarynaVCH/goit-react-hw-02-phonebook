import React from 'react';
import ContactForm from './Components/ContactForm';
import Title from './Components/Title/Title';
// import { nanoid } from 'nanoid';

export default class App extends React.Component {
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
    console.log(data);
  };

  render() {
    const { contacts, filter } = this.state;
    return (
      <Title title="Phonebook">
        <ContactForm onSubmit={this.formSubmitHandler} contacts={contacts} />
      </Title>
    );
  }
}
