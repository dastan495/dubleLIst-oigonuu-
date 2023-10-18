import React from "react";
import FirstPage from "../pages/FirstPage";
import AuthPage from "../pages/AuthPage";
import { Route, Routes } from "react-router-dom";
const MainRouts = () => {
    let userRoutes = [
        { link: "/", element: <FirstPage />, id: 1 },
        { link: "/auth", element: <AuthPage />, id: 2 },
    ];
    return (
        <>
            <Routes>
                {userRoutes.map((item) => (
                    <Route
                        path={item.link}
                        element={item.element}
                        key={item.id}
                    />
                ))}
            </Routes>
        </>
    );
};

export default MainRouts;
