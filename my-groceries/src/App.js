import React, { Component } from 'react';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

export default class  App extends Component {
constructor(abcd)
{
  super(abcd);
  
  this.state={
    
    
    "organisation":"tm"
    
  };

}
doSomething()
{
  this.setState({"organisation":"whatever"});
};
render(){
 
  return (
    <div className='App'>
   <h3 >{this.state.organisation}</h3>
   <button onClick={this.doSomething.bind(this)}>Just do it</button>
   </div>
  );
 }
}

