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

  render() {
    var key = 1;
    return (
            <div>
                <h1>Create a new vote</h1>
                {this.state.options.map(function (row) {
                  key++;
                  return <OptionRow key={key} value={row}/>
                }) }
                <Option newOption={this.newOption}/>
                <button type='button'>Create Vote</button>
            </div>
        )
  }


}
ReactDOM.render(<App/>, document.getElementById('app'))