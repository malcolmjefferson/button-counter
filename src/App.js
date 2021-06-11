import React from "react";
import './App.css'

class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = {count: 0};

    this.updateButton = this.updateButton.bind(this);
  }

  updateButton() {
    this.setState(prevState => ({
      count: prevState.count + 1
    }));
  }
  
  render() {
    return (
      <div class='button'>
        <button type='button' onClick={this.updateButton}>Button has been clicked {this.state.count} times!</button>
    </div>)
  }
}

function App() {
  return (
    <div className="container">
      <Button/>
    </div>
  );
}

export default App;
