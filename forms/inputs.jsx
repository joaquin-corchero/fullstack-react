import React from 'react';
import isEmail from 'validator/lib/isEmail';

const content = document.createElement('div');
document.body.appendChild(content);

module.exports = React.createClass({
  displayName: __filename.split('/').slice(-1)[0],

  getInitialState() {
    return { 
          people: [],
          fields: {},
          fieldErrors:{}
       };
  },
  onFormSubmit(evt) {
    const people = [ ...this.state.people ];
    const person = this.state.fields;
    const fieldErrors = this.validate(person);
    this.setState({ fieldErrors });
    evt.preventDefault();

    if (Object.keys(fieldErrors).length) return;
    
    people.push(person);
    this.setState({ people, fields: {} });;
  },
  fieldChange(evt){
    const fields = this.state.fields;
    fields[evt.target.name] = evt.target.value;
    this.setState({fields});
  },
  validate(person){
    const errors = {};
    if (!person.name) errors.name = 'Name Required';
    if (!person.email) errors.email = 'Email Required';
    if (person.email && !isEmail(person.email)) errors.email = 'Invalid Email';
    return errors;
  },
  render() {
    return (
      <div>
        <h1>Sign Up Sheet</h1>

        <form onSubmit={this.onFormSubmit}>
          <div>
            <input
              name='name'
              placeholder='Name'
              value={this.state.fields.name}
              onChange={this.fieldChange}
            />
            <span style={{color:'red'}}>{this.state.fieldErrors.name}</span>
          </div>
          <div>
            <input
              name='email'
              placeholder='Email address'
              value={this.state.fields.email}
              onChange={this.fieldChange}
            />
            <span style={{color:'red'}}>{this.state.fieldErrors.email}</span>
          </div>
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
