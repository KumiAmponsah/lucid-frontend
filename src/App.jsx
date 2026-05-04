import React from 'react';
import 'leaflet/dist/leaflet.css';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { NotificationProvider } from './contexts/NotificationContext';
import Navbar from "./components/navbar";
import Footer from './components/footer';
import Home from './pages/home.jsx';
import Signup from './pages/sign_up.jsx';
import Signin from './pages/sign_in.jsx';


function Layout({ children }) {
  const location = useLocation();
  const hideNavAndFooter = [

  ];
  const shouldHideLayout = hideNavAndFooter.includes(location.pathname);

  return (
    <>
      {!shouldHideLayout && <Navbar />}
      {children}
      {!shouldHideLayout && <Footer />}
    </>
  );
}//function to not display navbar and footer on some pages

function App() {
  return (
    <NotificationProvider>
      <Router>
        <Layout>
          <Routes>
            {/* Existing Routes */}
            <Route path="/lucid/" element={<Home/>} />//home page
            <Route path="/lucid/signup" element={<Signup/>} />//signup page
            <Route path="/lucid/signin" element={<Signin/>} />//signin page
          </Routes>
        </Layout>
      </Router>
    </NotificationProvider>
  );
}

export default App;
