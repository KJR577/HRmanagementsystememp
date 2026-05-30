import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './componentse/Layoute';
import LoginInfo from './pages/Logininfoe';
import PlaceholderPagee from './pages/PlaceholderPagee';
import './styles/globale.css';
import EmployeeDashboard from './Empdashboard/EmployeeDashboard';
import EmployeeModule from './Employeemodule/EmployeeProfile'
import Leave from './Leave/Leave';
import RecruitmentModule from './Recruitment/RecruitmentModule';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Redirect root to dashboard */}
        <Route path="/" element={<Navigate to="/dashboard" replace />} />

        {/* All pages share the sidebar Layout */}
        <Route element={<Layout />}>
          <Route path="/dashboard"   element={<EmployeeDashboard/>} />
          <Route path="/employee"    element={<EmployeeModule />} />
          <Route path="/leave"       element={<Leave />} />
          <Route path="/recruitment" element={<RecruitmentModule />} />
          <Route path="/login-info"  element={<LoginInfo />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
