import React from 'react';
import {BrowserRouter as Router,Route,Routes} from "react-router-dom"
import Dashboard from './components/Board/Dashboard';
import Main from './components/Main';
function App() {
  return ( <Router>
    <Routes>
      <Route path="/" element={<Main/>}/>
      <Route path="/board" element={<Dashboard/>}/>
    </Routes>
  </Router>
    
  );
}

export default App;
