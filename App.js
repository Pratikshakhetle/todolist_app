import React from 'react';
import './App.css';
import { Listitems } from './Listitems.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      currentItems: {
        text: '',
        key: ''
      }
    }
    this.handleInput = this.handleInput.bind(this);
    this.addItem = this.addItem.bind(this);
  }
  handleInput(e) {
    this.setState({
      currentItems: {
        text: e.target.value,
        key: Date.now()
      }
    })
  }
  addItem(e) {
    e.preventDefault();
    const newItems = this.state.currentItems;
    console.log(newItems);
    if (newItems.text !== "") {
      const newItems = [...this.state.items, newItems];
      this.setState({
        items: newItems,
        currentItems: {
          text: '',
          key: ''
        }
      })
    }
  }
  render() {
    return (
      <div className="App">
        <header>
          <form id="to-do-form" onSubmit={this.addItem} >
            <input type="text" placeholder="Enter Text" value={this.state.currentItems.text}
              onChange={this.handleInput} />
            <button type="submit">Add</button>
          </form>
        </header>
        <Listitems items={this.state.items}>

        </Listitems>
      </div>

    );
  }
}

export default App;
