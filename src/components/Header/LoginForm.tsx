import React, { useState } from 'react';

// Объявление функционального компонента LoginForm
const LoginForm = () => {
    // Состояния для email и password, используемые для управления данными в форме
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // Обработчик события (предотвращает перезагрузку страницы) 
    const handleSubmit = (event: { preventDefault: () => void; }) => {
        event.preventDefault();
    };

    // Возвращение JSX для отображения формы входа
    return (
        <form onSubmit={handleSubmit}>
            {/* Поле ввода email */}
            <label htmlFor="email">Email:</label>
            <br />
            <input
                type="email"
                id="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                required // Поле обязательно для заполнения
            />
            <br />
            {/* Поле для ввода пароля */}
            <label htmlFor="password">Пароль:</label>
            <br />
            <input
                type="password"
                id="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                required // Поле обязательно для заполнения
            />
            <br />
            {/* Кнопка для отправки формы */}
            <button type="submit">Войти</button>
        </form>
    );
};

export default LoginForm;