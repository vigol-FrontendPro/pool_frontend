import {NavLink} from 'react-router-dom';
import logo from './logo.png';
import Dropdown from './Dropdown';
import {useState} from 'react';
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
            <nav className="header-nav">
                <NavLink to="/" className="logo">
                    <img src={logo} alt="Home"/>
                </NavLink>
                <ul className="nav-links">
                    {/* навигация с выпадающим меню */}
                    <li className="drop">
                        {/* Dropdown - реализует выпадающее меню */}
                        <NavLink to="pools"><Dropdown/></NavLink>
                    </li>
                    {/* Остальные элементы навигации */}
                    <li>
                        <NavLink to="hamams">Хамамы</NavLink>
                    </li>
                    <li>
                        <NavLink to="sauny">Сауны</NavLink>
                    </li>
                    <li>
                        <NavLink to="gallery">Галлерея</NavLink>
                    </li>
                    <li>
                        <NavLink to="contacts">Контакты</NavLink>
                    </li>
                    <li>
                        <NavLink to="products">Продукты</NavLink>
                    </li>

                    {/* Кнопка для открытия модального окна входа */}
                    <button onClick={toggleLoginModal} className="login_btn">Вход</button>
                    {/* Модальное окно для входа */}
                    {showLoginModal && (
                        <div className="login-modal">
                            <div className="login-modal-content">
                                {/* Иконка закрытия модального окна */}
                                <span className="close-icon" onClick={toggleLoginModal}>&times;</span>
                                {/* Компонент LoginForm для ввода данных пользователя */}
                                <LoginForm/>
                                {/* Ссылка на страницу регистрации */}
                                <NavLink to="/register">Регистрация</NavLink>
                            </div>
                        </div>
                    )}

                </ul>
            </nav>
        </header>
    );
};
