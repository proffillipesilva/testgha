import logo from './logo.svg';
import './App.css';
import Ana from './Ana';
import Luana from './Luana';
import { BrowserRouter as Router,
  Route,
  Routes

 } from 'react-router-dom';
import LoginPage from './login/LoginPage';
import HomePage from './home/HomePage';

function App() {
  return (
    <Router>
    <div className="App">
      <Routes>
        <Route index element={<LoginPage />} />
        <Route path="/home" element={<HomePage />} />
      </Routes>
    </div>
    </Router>
  );
}

export default App;
