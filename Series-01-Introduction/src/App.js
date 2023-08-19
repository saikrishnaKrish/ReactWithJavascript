import overviewOfApp from './assets/overviewOfApp.png';
import './App.css';
import Navbar from './components/Navbar';
import Books from './components/Books';

function App() {
  return (
    <div className="App">
      <img src={overviewOfApp} className="App-logo" alt="logo" />
      <p>
        <Navbar></Navbar>

        <Books></Books>
      </p>

     <ul style={{width:'50%',listStyle:'english'}}>
     <li>
        React is one of the most widely used JavaScript libraries to build front-end applications, but before starting it, we should give some time to understand the optimal design structure of a react application.
      </li>
      <li>
        ReactJs.org has officially mentioned
         some key points and principles that should be highly considered while creating react applications.
      </li>
      <li>
        They are - Component Composition, Common Abstraction, Escape Hatches, Stability, Interoperability, Scheduling, Developer Experience, Debugging, Configuration, Beyond the DOM, Implementation, Optimized for tooling, and Dogfooding.
      </li>

     </ul>
    </div>
  );
}

export default App;
