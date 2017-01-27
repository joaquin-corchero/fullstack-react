import React from 'react';

const content = document.createElement('div');
document.body.appendChild(content);

module.exports = React.createClass({
  displayName: __filename.split('/').slice(-1)[0],

  getInitialState() {
    return { 
          people: [],
          fields: {
            name: '',
            email: ''
          }
       };
  },
  onFormSubmit(evt) {
    const people = [ ...this.state.people, this.state.fields ];
    this.setState({
      people: people, 
      fields: {name: '', email: '' }
    });
    evt.preventDefault();
  },
  fieldChange(evt){
    const fields = this.state.fields;
    fields[evt.target.name] = evt.target.value;
    this.setState({fields});
  },
  render() {
    return (
      <div>
        <h1>Sign Up Sheet</h1>

        <form onSubmit={this.onFormSubmit}>
          <input
            name='name'
            placeholder='Name'
            value={this.state.fields.name}
            onChange={this.fieldChange}
          />
          <input
            name='email'
            placeholder='Email address'
            value={this.state.fields.email}
            onChange={this.fieldChange}
          />

          <input type='submit' />
        </form>

        <div>
          <h3>Names</h3>
          <ul>
            { this.state.people.map((person, i) => <li key={i}>{person.name} ({person.email})</li>) }
          </ul>
        </div>
      </div>
    );
  },
});
