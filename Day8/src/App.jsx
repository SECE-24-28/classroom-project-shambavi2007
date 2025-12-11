import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import RechargeOptions from './pages/RechargeOptions';
import Recharge from './pages/Recharge';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard';
import { ThemeProvider } from './context/ThemeContext';
import { UserProvider } from './context/UserContext';

function App() {
  return (
    <ThemeProvider>
      <UserProvider>
        <Router>
          <div className="min-h-screen bg-gray-100 dark:bg-gray-900 transition-colors">
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/recharge-options" element={<RechargeOptions />} />
              <Route path="/recharge" element={<Recharge />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/dashboard" element={<Dashboard />} />
            </Routes>
            <Footer />
          </div>
        </Router>
      </UserProvider>
    </ThemeProvider>
  );
}

export default App;
