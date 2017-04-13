import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router,Link,Route} from 'react-router-dom';

export default class App extends React.Component{
  render(){
    return(
        <div>
         <ul>
           <li><Link to="/">Home</Link></li>
           <li><Link to="/about">About</Link></li>
         </ul>
        <hr/>
        <Route exact path="/" component={Home} /> 
        <Route path="/about" component={About} />   
       </div>
    )
  }
}

//State less components
//Home
const Home = ()=> (
  <div>
    <h1>Home</h1>
    <p>This is the Home Page</p> 
  </div>
)

//About
const About = ()=>(
  <div>
    <h1>About</h1>
    <p>This is about</p>
  </div>
)

if(typeof window !== "undefined")
ReactDOM.render(<Router><App /></Router>,document.getElementById('app'));