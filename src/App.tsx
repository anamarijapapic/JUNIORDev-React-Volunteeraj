import { useState } from 'react';
import AdminContext from './context/AdminContext';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { CustomNavbar } from './components/shared/CustomNavbar';
import { CustomFooter } from './components/shared/CustomFooter';
import { NotFound } from './components/shared/NotFound';
import Home from './components/Home';
import Organizations from './components/Organizations';
import Volunteers from './components/Volunteers';

function App() {
  const [isAdmin, setIsAdmin] = useState(false);

  const toggleAdmin = () => {
    setIsAdmin(!isAdmin);
  };

  return (
    <AdminContext.Provider value={{ isAdmin, toggleAdmin }}>
      <BrowserRouter>
        <CustomNavbar />
        <Routes>
          {/* Home page */}
          <Route path="/" element={<Home />} />

          {/* Volunteer-related pages */}
          <Route path="/activities" element={<h1>Activities</h1>} />
          <Route path="/organizations" element={<Organizations />} />
          <Route path="/volunteers" element={<Volunteers />} />

          {/* 404 page */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        <CustomFooter />
      </BrowserRouter>
    </AdminContext.Provider>
  );
}

export default App;
