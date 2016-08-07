import React from 'react';
import ReactDOM from 'react-dom';

import {Option} from './option.jsx';
import {OptionRow} from './option-row.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      options: []
    }
    this.newOption = this.newOption.bind(this);
  }

  newOption(optionValue) {
    var newArr = this.state.options;

    if (newArr.indexOf(optionValue) == -1) {

      newArr.push(optionValue);
      this.setState({ options: newArr })
    }
  }

  onDestroy(item) {
    var newOpts = this.state.options.filter(x => x !== item);
    this.setState({options: newOpts})
  }

  render() {
    var key = 1;
    var options = this.state.options.map(row => {
      key++;
      return (
      <OptionRow 
        key={key} 
        value={row} 
        onDestroy={this.onDestroy.bind(this)}/>
      )
    });
    return (
            <div>
                <h1>Create a new vote</h1>
                {options}
                <Option newOption={this.newOption}/>
                <button type='button'>Create Vote</button>
            </div>
        )
  }


}
ReactDOM.render(<App/>, document.getElementById('app'))