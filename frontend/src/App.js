import './App.css';
import Dashboard from './components/Dashboard';
import Form from './components/Form';
import Header from './components/Header';

import Posting from './components/Social_Media/Posting';

import {Route, Routes} from 'react-router-dom' 


function App() {
  return (
    <Header>
      <Routes>
        <Route path="/form" element={<Form />}/>
        <Route path="/forum" element={<Posting />}/>
        <Route path="/" element={<Dashboard />}/>
      </Routes>
    </Header>
  );
}

export default App;
