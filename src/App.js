import { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [
        {
          name: 'Frankeistein',
          id: 'dfd3'
        },
        {
          name: 'Zoombie',
          id: 'asd3'
        },
        {
          name: 'Dracula',
          id: '3dsd'
        }
      ]
    };
  }

  render() {
    return (
      <div className="App">
        {this.state.monsters.map(monster => (
            <h1 key={monster.id}>{monster.name}</h1>
        ))}
      </div>
    );
  }
}

export default App;
