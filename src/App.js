import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import LoginForm from './Components/LoginForm';
import Hello from './Components/Hello';

function App() {
  return (
    <div className="App">
     <Routes>
        
        <Route exact element={<Hello />} path="/hello/:name" />
        <Route exact element={<LoginForm />} path="/" />
      </Routes>     
    </div>
  );
}

export default App;
