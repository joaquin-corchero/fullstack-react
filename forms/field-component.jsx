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
});
