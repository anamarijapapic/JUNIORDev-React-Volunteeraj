// import { db, storageBucket } from './config/firebase';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { CustomNavbar } from './components/shared/CustomNavbar';
import { CustomFooter } from './components/shared/CustomFooter';
import { NotFound } from './components/shared/NotFound';
import Home from './components/Home';

function App() {
  // Firestore database
  // console.log(db);
  // Storage bucket
  // console.log(storageBucket);

  return (
    <BrowserRouter>
      <CustomNavbar />
      <Routes>
        {/* Home page */}
        <Route path="/" element={<Home />} />

        {/* Volunteer-related pages */}
        <Route path="/activities" element={<h1>Activities</h1>} />
        <Route path="/organizations" element={<h1>Organizations</h1>} />
        <Route path="/volunteers" element={<h1>Volunteers</h1>} />

        {/* 404 page */}
        <Route path="*" element={<NotFound />} />
      </Routes>
      <CustomFooter />
    </BrowserRouter>
  );
}

export default App;
