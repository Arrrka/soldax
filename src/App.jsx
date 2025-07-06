import { Routes, Route, Router } from 'react-router-dom';
import MainPage from './pages/MainPage';
import CasesPage from './pages/CasesPage';
import ProfilePage from './pages/ProfilePage';
import WeeklyPage from './pages/WeeklyPage';
import { Navbar } from './routes/Navbar';
import './styles/base/App.css';

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/soldax/" element={<MainPage />} />
        <Route path="/soldax/cases" element={<CasesPage />} />
        <Route path="/soldax/profile" element={<ProfilePage />} />
        <Route path="/soldax/weekly" element={<WeeklyPage />} />
      </Routes>

      <Navbar />
      {/* <ApiRequest /> */}
    </>
  );
}
