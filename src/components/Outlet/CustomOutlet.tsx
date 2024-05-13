import React from 'react';
import { Outlet } from 'react-router-dom';
import outletImage from "../Outlet/head-d.png";
export default function CustomOutlet() {
    return (
        <main className="outlet">
            <img src={outletImage} alt="Главная" className="background-image"/>
            {/*<Outlet /> /!* дочерний маршрут *!/*/}
        </main>
    );
}