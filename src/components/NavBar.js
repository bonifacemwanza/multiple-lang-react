import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-google-multi-lang';
import { withTranslation } from 'react-google-multi-lang';

const NavBar = () => {
  const { setLanguage } = useTranslation();
  const navigate = useNavigate();

  return (
    <div className="navbar">
      <div onClick={() => navigate('/')} className="nav-item">Landing</div>
      <div onClick={() => navigate('/register')} className="nav-item">Register</div>
      <div onClick={() => navigate('/home')} className="nav-item">Home</div>
      <div onClick={() => navigate('/login')} className="nav-item">Login</div>

      {/* Language Switcher */}
      <div className="language-switcher">
        <div onClick={() => setLanguage('en')} className="langSwitch">English</div>
        <div onClick={() => setLanguage('es')} className="langSwitch">Español</div>
        <div onClick={() => setLanguage('fr')} className="langSwitch">Français</div>
      </div>
    </div>
  );
};

export default NavBar;
