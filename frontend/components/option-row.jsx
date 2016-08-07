import React from 'react';
import ReactDOM from 'react-dom';

export class OptionRow extends React.Component {

  constructor(props) {
    super(props);
    this.state = {showDelete: 'hide'}
  }

  showDelete() {
    this.setState({showDelete: ''})
  }

  hideDelete() {
    this.setState({showDelete: 'hide'})
  }

  onDestroy(event) {
    this.props.onDestroy(this.props.value)
  }

  render() {
    return (
      <div onMouseOver={this.showDelete.bind(this)} onMouseOut={this.hideDelete.bind(this)}>
        <span>{this.props.value}</span>
        <button type='button' 
          className={this.state.showDelete} 
          onClick={this.onDestroy.bind(this)}>X</button>
      </div>
      )
  }
}

