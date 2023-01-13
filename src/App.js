import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Dashboard from './components/Dashboard/Dashboard';
import Attendance from './components/Attendance/Attendance';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route index element={<Dashboard />} />
            <Route path="/attendance" element={<Attendance />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
