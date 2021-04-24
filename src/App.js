import './App.css';
import logo from './swiggy.png';
import Customize from './Customize';
import React from 'react';

class App extends React.Component{
  constructor(){
    super();
    this.state={
      price:371
    }
    this.handlePrice = this.handlePrice.bind(this);
  }

  componentDidMount(){
    if(document.getElementById('subChoice0-1')){
        document.getElementById('subChoice0-1').checked=true;
    }
    if(document.getElementById('subChoice1-1')){
        document.getElementById('subChoice1-1').checked=true;
    }
    console.log(this.state.price)
  }
  handlePrice(price){
    this.setAsyncState({price:price})
      .then(console.log(this.state.price))
      .then(this.render()) 
    
    
  }

  setAsyncState = (newState) => 
    new Promise((resolve) => this.setState(newState, resolve));

render() {
  return (
    <div className="App">
      <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
      </header>
      <Customize this={this}/>
    </div>
  );
}
}
export default App;
