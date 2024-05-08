import { NavLink } from 'react-router-dom';
import logo from './logo.png';
import Dropdown from './Dropdown';
import { useState } from 'react';
import LoginForm from './LoginForm';

// Объявляем компонент Header
export default function Header() {
  // Состояние для отображения/скрытия модального окна входа
  const [showLoginModal, setShowLoginModal] = useState(false);
  const toggleLoginModal = () => {
    setShowLoginModal(!showLoginModal);
  };

  // Возвращаем JSX для отображения заголовка и навигации
  return (
    <header>
      {/* Навигационное меню */}
      <nav className="header-nav">
        {/* Логотип */}
        <NavLink to="/" className="logo">
          <img src={logo} alt="Home" />
        </NavLink>
        {/* Список ссылок для навигации */}
        <ul className="nav-links">
          
          {/* Элемент навигации с выпадающим меню */}
          <li className="drop">
            {/* Компонент Dropdown, который реализует выпадающее меню */}
            <NavLink to="pools" style={{ textDecoration: 'none' }}>
              <Dropdown />
            </NavLink>
          </li>
          {/* Остальные элементы навигации */}
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

          {/* Кнопка для открытия модального окна входа */}
          <button onClick={toggleLoginModal} className="login_btn">
            Вход
          </button>
          {/* Модальное окно для входа */}
          {showLoginModal && (
            <div className="login-modal">
              <div className="login-modal-content">
                {/* Иконка закрытия модального окна */}
                <span className="close-icon" onClick={toggleLoginModal}>
                  &times;
                </span>
                {/* Компонент LoginForm для ввода данных пользователя */}
                <LoginForm />
                {/* Ссылка на страницу регистрации */}
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
