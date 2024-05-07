import { NavLink } from 'react-router-dom';
import logo from './logo.png';
import Dropdown from './Dropdown';
import { useState } from 'react';
import LoginForm from './LoginForm';

export default function Header() {

  const [showLoginModal, setShowLoginModal] = useState(false);
  const toggleLoginModal = () => {
    setShowLoginModal(!showLoginModal);
  };

  return (
    <header>
      <nav className="header-nav">
        <NavLink to="/" className="logo">
          <img src={logo} alt="Home" />
        </NavLink>
        <ul className="nav-links">
          
          <li className="drop">
            <NavLink to="pools" style={{ textDecoration: 'none' }}>
              <Dropdown />
            </NavLink>
          </li>
          <li>
            <NavLink to="hamams" style={{ textDecoration: 'none' }}>
              Хамамы
            </NavLink>
          </li>
          <li>
            <NavLink to="sauny" style={{ textDecoration: 'none' }}>
              Сауны
            </NavLink>
          </li>
          <li>
            <NavLink to="gallery" style={{ textDecoration: 'none' }}>
              Галлерея
            </NavLink>
          </li>
          <li>
            <NavLink to="contacts" style={{ textDecoration: 'none' }}>
              Контакты
            </NavLink>
          </li>

          <button onClick={toggleLoginModal} className="login_btn">
            Вход
          </button>
          {showLoginModal && (
            <div className="login-modal">
              <div className="login-modal-content">
                <span className="close-icon" onClick={toggleLoginModal}>
                  &times;
                </span>
                <LoginForm />
                <NavLink to="/register" style={{ textDecoration: 'none' }}>
                  Регистрация
                </NavLink>
              </div>
            </div>
          )}

        </ul>
      </nav>
    </header>
  );
};

