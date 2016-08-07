import React from 'react';
import ReactDOM from 'react-dom';

export class Option extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this._handleKeyPress = this._handleKeyPress.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value })
  }

  _handleKeyPress(event) {
    if (event.key === 'Enter') {
      this.handleChange(event);
      this.props.newOption(this.state.value)
    }
  }

  render() {
    return (<div>
      <input
        className='option'
        onKeyPress={this._handleKeyPress}
        onChange={this.handleChange}
        type='text'/>
      <button type='button'
        onClick={this.props.newOption.bind(this, this.state.value) }>+</button>
    </div>)
  }
}

