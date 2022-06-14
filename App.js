import './App.css';
import CounterOne from './components/CounterOne';
import CounterTwo from './components/CounterTwo';
import FetchAllTestTwo from './components/FetchAllTestTwo';

import {
  BrowserRouter as Router,
  Routes,
  Route,

} from 'react-router-dom';
import Home from './components/Home';
import CreateTest from './components/CreateTest';
import FetchTest from './components/FetchTest';
import DeleteTest from './components/DeleteTest';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/counterone" element={<CounterOne />} />
          <Route path="/countertwo" element={<CounterTwo />} />
          <Route path="/test/all" element={<FetchAllTestTwo />} />
          <Route path="/test/save" element={<CreateTest/>} />
          <Route path="/test/get/:id" element={<FetchTest/>} />
          <Route path="/test/delete/:id" element={<DeleteTest/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;