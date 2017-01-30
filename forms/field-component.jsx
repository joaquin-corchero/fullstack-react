import React, { PropTypes } from 'react';

module.exports = React.createClass({
  propTypes: {
    placeHolder: PropTypes.string,
    name: PropTypes.string,
    value: PropTypes.string,
    validate: PropTypes.func,
    onChange: PropTypes.func.isRequired
  },
  getInitialState(){
    return{
      value: this.props.value,
      error: false
    }
  },
  componentWillReceiveProps(update){
    this.setState({value: update.value});
  },
  render(){
    return(
      <div>
        <input
          placeholder={this.props.placeHolder}
          value={this.props.value}
          onChange={this.props.onChange}
        />
        <span style={{color:'red'}}>{this.state.error}</span>
      </div>
    );
  },
  onChange(evt){
    const name = this.props.name;
    const value = this.props.value;
    //If there was a validation method passed in it gets validated, otherwise no error set
    const error = this.props.validate ? this.props.validate(value) : false;

    this.setState({value, error});

    this.props.onChange({name, value, error});
  }
});
