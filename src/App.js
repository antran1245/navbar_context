import logo from './logo.svg';
import './App.css';
import {Wrapper} from './components/Wrapper';
import Navbar from './components/Navbar';
import FromWrapper from './components/FormWrapper';
import {useState} from 'react';

function App() {
  const [name, setName] = useState('')
  return (
    <div className="App">
      <Wrapper.Provider value={{name, setName}}>
        <Navbar/>
        <FromWrapper/>
      </Wrapper.Provider>
    </div>
  );
}

export default App;
