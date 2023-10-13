import React from 'react';
import { Routes, Route } from 'react-router-dom';

export default function AppRoutes(props) {
    const { routes } = props;

    return (
        <Routes>
            {routes.map((route, index) => (
                <Route key={index} path={route.path} element={route.element} />
            ))}
        </Routes>
    );
}
