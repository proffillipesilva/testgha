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
import store from './store/store';

function App() {
  const {user} = store();
  return (
    <Router>
    <div className="App">
      <Routes>
        {user == null ? 
        <Route index element={<LoginPage />} />
        :
        <Route index element={<HomePage />} />
        }
      </Routes>
    </div>
    </Router>
  );
}

export default App;
